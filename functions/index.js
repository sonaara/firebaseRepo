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
const SPOTIFY_CLIENT_SECRET = "9e14c26637d347b0a9ad2257a3abfcc7";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/redirect";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

exports.token = onRequest({cors: true}, async (req, res) => {
  console.log(req.body);
  const {code} = req.body;
  try {
    const {accessToken, refreshToken} = await fetchSpotifyAccessAndRefreshToken(code);
    console.log('access token:')
    console.log(accessToken)
    const profile = await fetchUserProfile(accessToken);
    console.log(profile);

    await saveUserProfileAndTokens(profile, accessToken, refreshToken);

    const songs = await fetchUserSongs(accessToken);
    await saveSongsToFirebaseStore(songs);
    console.log(songs);
    res.status(200).json({songs});
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.message);
    res.status(500).json({error: error.message});
  }
});

const saveUserProfileAndTokens = async (profile, accessToken, refreshToken) => {
  const db = getFirestore();
  const usersCollection = db.collection("users");
  const userDoc = usersCollection.doc(profile.id);

  console.log(`User profile and tokens have been saved for user: ${profile.id}`);
};

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

const fetchUserProfile = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {Authorization: `Bearer ${accessToken}`},
  });
  console.log('error!!!!!!')
  console.log(response)

  if (!response.ok) {
    throw new Error(`Error fetching user profile: ${response.statusText}`);
  }

  return await response.json();
};

const fetchSpotifyAccessAndRefreshToken = async (code) => {
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

    const {access_token: accessToken, refresh_token: refreshToken} = await response.json();
    return {accessToken, refreshToken};
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.message);
    throw error;
  }
};

const fetchUserSongs = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me/tracks", {
    headers: {Authorization: `Bearer ${accessToken}`},
  });

  if (!response.ok) {
    throw new Error(`Error fetching user songs: ${response.statusText}`);
  }

  return await response.json();
};
