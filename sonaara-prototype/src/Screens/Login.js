import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

const SPOTIFY_CLIENT_ID = "52103d3733a448c0a2079a746e239414";
const SPOTIFY_REDIRECT_URI = "http://localhost:3000/redirect";
const SPOTIFY_AUTH_URL = "https://accounts.spotify.com/authorize";
const SPOTIFY_SCOPE =
  "user-read-private user-read-email user-library-read user-top-read user-read-playback-state user-read-recently-played";

const LoginScreen = () => {
  const login = async () => {
     const authUrl = `${SPOTIFY_AUTH_URL}?client_id=${SPOTIFY_CLIENT_ID}&redirect_uri=${encodeURIComponent(
      SPOTIFY_REDIRECT_URI
    )}&scope=${encodeURIComponent(SPOTIFY_SCOPE)}&response_type=code`;
    window.location.href = authUrl;   
  };
  return (
    <div style={styles.container}>
      {/* Header Container - Sonaara Logo and text*/}
      <div style={styles.logoContainer}>
        <Icon style={styles.logo} role="login-logo" />
        <p style={styles.SonaaraText}>SONAARA</p>
        <p style={styles.WelcomeText}>Discover music through Friends!</p>
      </div>

      {/* Login Button */}
      <div>
        <Button role="login" onClick={login}>
          Connect with Spotify
        </Button>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  logoContainer: {
    padding: "120px",
  },
  SonaaraText: {
    color: "#030303",
    fontSize: "24px",
    fontFamily: "Roboto Mono",
    lineHeight: "16px",
    textAlign: "center",
  },
  WelcomeText: {
    color: "#030303",
    fontSize: "16px",
    fontFamily: "Roboto Mono",
    lineHeight: "16px",
    textAlign: "center",
  },
};

export default LoginScreen;
