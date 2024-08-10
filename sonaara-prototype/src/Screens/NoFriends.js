import React from "react";
import Button from "../components/Button";
import Signature from "../components/Signature";
import BottomNavBar from "../components/BottomNavBar";
import { Link } from "react-router-dom";
const NoFriendsScreen = () => {
  return (
    <div style={styles.container}>
      {/* Header Container - Name + Signature */}
      <div style={styles.header}>
        <h1>User's Name</h1>
        <div style={styles.signatureContainer}>
          <Signature />
        </div>
      </div>

      {/* Main Content Container */}
      <div style={styles.mainContent}>
        {/* No Friends Text */}
        <p style={styles.Text}>No Friends Yet!</p>

        {/* Buttons */}
        <div style={styles.buttonsContainer}>
          <Button role="add-friend" to="/friends">
            Add Friend
          </Button>

          <Button role="follow-artist">Follow Artist</Button>
        </div>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar role="friends-page" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
  },
  header: {
    color: "#000000",
    padding: "20px",
    textAlign: "center",
  },
  mainContent: {
    flex: 1,
    padding: "20px",
  },
  Text: {
    color: "#030303",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    lineHeight: "16px",
    textAlign: "center",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    marginTop: "220px",
  },
};

export default NoFriendsScreen;
