import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import { Link } from "react-router-dom";

const LoginScreen = () => {
  const login = async () => {
    const response = await fetch("http://127.0.0.1:5001/sonaara-21356/us-central1/helloWorld");
    const test = await response.json();
    console.log(test);
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
