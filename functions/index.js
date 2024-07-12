/* eslint-disable camelcase, max-len */
const {onRequest} = require("firebase-functions/v2/https");
const {logger} = require("firebase-functions");
const qs = require("qs");
const {getAuth} = require("firebase-admin/auth");
const axios = require("axios");

exports.helloWorld = onRequest((request, response) => {
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
  const accessToken = await fetchSpotifyAccessToken(code);
  const songs = await fetchUserSongs(accessToken);
  console.log(JSON.stringify(songs, null, 2));

  res.json({foo: "bar"});
  return;

  /*
  const {code} = req.body;
  const authString = Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64");
  const body = qs.stringify({
    code,
    redirect_uri: req.headers.origin,
    grant_type: "authorization_code",
  });
  const headers = {
    "authorization": `Basic ${authString}`,
    "content-type": "application/x-www-form-urlencoded;charset=utf-8",
  };
  try {
    const response = await axios.post("https://accounts.spotify.com/api/token", body, {headers});
    const data = response.data;
    const {access_token, refresh_token} = data;
    try {
      const spotifyResponse = await axios.get("https://api.spotify.com/v1/me", {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      });
    } catch (error) {
      console.error("Error fetching Spotify user profile:", error.message);
      res.status(500).json({
        error: "Failed to fetch Spotify user profile",
        details: error.message,
      });
      return;
    }
    const spotifyUserProfile = spotifyResponse.data;
    const id = spotifyUserProfile.id;
    const firebase_token = await getAuth().createCustomToken(id);
    res.json({access_token, refresh_token, firebase_token});
  } catch (err) {
    console.error("Error while requesting a token", err);
    res.status(500).json({
      error: err.message,
    });
  }
  */
});

const fetchSpotifyAccessToken = async (code) => {
  try {
    const response = await axios.post(SPOTIFY_TOKEN_URL, new URLSearchParams({
      grant_type: "authorization_code",
      code,
      redirect_uri: SPOTIFY_REDIRECT_URI,
    }), {
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
        "Authorization": "Basic " + Buffer.from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`).toString("base64"),
      },
    });

    const data = response.data;
    console.log("Access Token:", data.access_token);

    return data.access_token;
  } catch (error) {
    console.error("Error fetching Spotify access token:", error.message);
    throw error;
  }
};

const fetchUserSongs = async (accessToken) => {
  const response = await axios.get("https://api.spotify.com/v1/me/tracks", {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  });

  const data = response.data;

  return data;
};
