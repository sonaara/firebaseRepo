/* eslint-disable camelcase */
import {onRequest} from "firebase-functions/v2/https";
import {logger} from "firebase-functions";
import fetch from "node-fetch";
import qs from "qs";
import {getAuth} from "firebase-admin/auth";

exports.helloWorld = onRequest((request, response) => {
  logger.info("Hello logs!", {structuredData: true});
  response.send({message: "do it again!!!"});
});

const SPOTIFY_CLIENT_ID = "02aacbb9263148b9b80ab9f43a05c7a3";
const SPOTIFY_CLIENT_SECRET = "9e14c26637d347b0a9ad2257a3abfcc7";

exports.token = onRequest(async (req, res) => {
  const {code} = req.body;
  const authString = Buffer
      .from(`${SPOTIFY_CLIENT_ID}:${SPOTIFY_CLIENT_SECRET}`)
      .toString("base64");
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
    const response = await fetch("https://accounts.spotify.com/api/token", {
      method: "POST",
      headers,
      body,
    });
    const data = await response.json();
    const {access_token, refresh_token} = data;
    const spotifyResponse = await fetch("https://api.spotify.com/v1/me", {
      headers: {
        Authorization: `Bearer ${access_token}`,
      },
    });
    const spotifyUserProfile = await spotifyResponse.json();
    const id = spotifyUserProfile.id;
    const firebase_token = await getAuth().createCustomToken(id);
    res.json({access_token, refresh_token, firebase_token});
  } catch (err) {
    console.error("Error while requesting a token", err);
    res.status(500).json({
      error: err.message,
    });
  }
});
