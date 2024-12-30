/* eslint-disable camelcase, max-len */
const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const {getFirestore} = require("firebase-admin/firestore");
const admin = require("firebase-admin");
const {log} = require("firebase-functions/logger");

admin.initializeApp();

exports.helloWorld = onRequest({cors: true}, (request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send({message: "do it again!!!"});
});

const SPOTIFY_CLIENT_ID = "183adbc3728e4d3b8fbadf6ac68317f1";
const SPOTIFY_CLIENT_SECRET = "09bd6e0bb76543a292a48adcea188b4f";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/redirect";
const SPOTIFY_TOKEN_URL = "https://accounts.spotify.com/api/token";

exports.token = onRequest({cors: true}, async (req, res) => {
  console.log(req.body);
  const {code} = req.body;
  try {
    console.log("getting access token");
    const {accessToken, refreshToken} = await fetchSpotifyAccessAndRefreshToken(code);
    console.log('access token:')
    console.log(accessToken)
    console.log("getting profile");
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

exports.getAllSongs = onRequest({cors: true}, async (req, res) => {
  try {
    const db = getFirestore();
    const songsCollection = db.collection("songs");
    const snapshot = await songsCollection.get();

    if (snapshot.empty) {
      res.status(404).json({message: "No songs found"});
      return;
    }

    const songs = [];
    snapshot.forEach((doc) => {
      songs.push({id: doc.id, ...doc.data()});
    });

    res.status(200).json({songs});
  } catch (error) {
    console.error("Error fetching songs from Firestore:", error.message);
    res.status(500).json({error: error.message});
  }
});


const saveUserProfileAndTokens = async (profile, accessToken, refreshToken) => {
  const db = getFirestore();
  const usersCollection = db.collection("users");

  // Parse the profile if it's a string
  let parsedProfile = profile;
  if (typeof profile === "string") {
    try {
      parsedProfile = JSON.parse(profile);
    } catch (error) {
      console.error("Error parsing profile:", error);
      throw new Error("Invalid profile data");
    }
  }

  // Check if the parsed profile has an id
  if (!parsedProfile.id) {
    console.error("Profile is missing id:", parsedProfile);
    throw new Error("Profile is missing id");
  }

  const userDoc = usersCollection.doc(parsedProfile.id);

  await userDoc.set({
    profile: parsedProfile,
    tokens: {accessToken, refreshToken},
  });

  console.log(`User profile and tokens have been saved for user: ${parsedProfile.id}`);
};

const saveSongsToFirebaseStore = async (songs) => {
  const db = getFirestore();
  const songsCollection = db.collection("songs");
  const batch = db.batch();

  songs.items.forEach((song) => {
    const songRef = songsCollection.doc(song.track.id);
    batch.set(songRef, song.track);
  });

  await batch.commit();ƒ
  console.log("Songs have been saved to Firestore.");
};

const fetchUserProfile = async (accessToken) => {
  const response = await fetch("https://api.spotify.com/v1/me", {
    headers: {Authorization: `Bearer ${accessToken}`},
  });
  console.log('error!!!!!!')
  console.log(response)

  if (!response.ok) {
    const error = new Error(`Error fetching user profile: ${response.statusText}`);
    error.statusCode = response.status;
    throw error;
  }

  return response.json(); // This will return parsed JSON directly
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
