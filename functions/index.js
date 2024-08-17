/* eslint-disable camelcase, max-len */
const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const {getFirestore} = require("firebase-admin/firestore");
const admin = require("firebase-admin");

admin.initializeApp();

exports.helloWorld = onRequest({cors: true}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send({message: "do it again!!!"});
});

const SPOTIFY_CLIENT_ID = "02aacbb9263148b9b80ab9f43a05c7a3";
const SPOTIFY_CLIENT_SECRET = "9e14c26637d347b0a9ad2257a3abfcc7"; // Add your Spotify client secret here
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/redirect";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

exports.token = onRequest({cors: true}, async (req, res) => {
  console.log(req.body);
  const {code} = req.body;
  try {
    const accessToken = await fetchSpotifyAccessToken(code);
    const songs = await fetchUserSongs(accessToken);
    saveSongsToFirebaseStore(songs);
    console.log(songs);
    res.status(200).json({songs});
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.message);
    res.status(500).json({error: error.message});
  }
});


const saveSongsToFirebaseStore = async (songs) => {
  const db = getFirestore();
  const songsCollection = db.collection("songs");

  const batch = db.batch();

  songs.items.forEach((song) => {
    const songRef = songsCollection.doc(song.track.id);
    batch.set(songRef, song.track);
  });

  await batch.commit();
  console.log("Songs have been saved to Firestore.");
};


const fetchSpotifyAccessToken = async (code) => {
  try {
    const response = await fetch(SPOTIFY_TOKEN_URL, {
      method: "POST",
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64"),
      },
      body: new URLSearchParams({
        grant_type: "authorization_code",
        code,
        redirect_uri: SPOTIFY_REDIRECT_URI,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error fetching Spotify access token: ${response.statusText}`);
    }

    const data = await response.json();
    console.log("Access Token:", data.access_token);

    return data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.message);
    throw error;
  }
};

const fetchUserSongs = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  if (!response.ok) {
    throw new Error(`Error fetching user songs: ${response.statusText}`);
  }

  const data = await response.json();

  return data;
};
