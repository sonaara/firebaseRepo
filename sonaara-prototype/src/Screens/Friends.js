import React from "react";
import Button from "../components/Button";
import Signature from "../components/Signature";
import BottomNavBar from "../components/BottomNavBar";
import Friend from "../components/Friend";
import { Link } from "react-router-dom";
import { Layout } from "../layouts/Layout";

const friends = [
  {
    name: "Friend 1",
    imageUrl:
      "https://assets.api.uizard.io/api/cdn/stream/c2417916-3599-4c77-b711-ef40f55b09bb.png",
  },
  {
    name: "Friend 2",
    imageUrl:
      "https://assets.api.uizard.io/api/cdn/stream/c2417916-3599-4c77-b711-ef40f55b09bb.png",
  },
  {
    name: "Friend 3",
    imageUrl:
      "https://assets.api.uizard.io/api/cdn/stream/c2417916-3599-4c77-b711-ef40f55b09bb.png",
  },
  {
    name: "Friend 4",
    imageUrl:
      "https://assets.api.uizard.io/api/cdn/stream/c2417916-3599-4c77-b711-ef40f55b09bb.png",
  },
];

const FriendsScreen = () => {
  const friendList = friends.map(({ name, imageUrl }) => (
    <>
      <hr
        style={{
          height: "1px",
          border: "0",
          background: "#f0f0f0",
        }}
      />
      <Friend imageUrl={imageUrl} name={name} />
    </>
  ));
  return (
    <Layout>
      <div style={styles.header}>
        <h1>User's Name</h1>
        <div style={styles.signatureContainer}>
          <Signature />
        </div>
      </div>

      {/* Buttons */}
      <div style={styles.buttonsContainer}>
        <Button role="add-friend">Add Friend</Button>
        <Button role="follow-artist">Follow Artist</Button>
      </div>

      {/* Main Content Container */}
      <div style={styles.mainContent}>
        {/* Friends */}
        <ul>{friendList}</ul>
      </div>

      {/* Bottom Navigation Bar */}
      <BottomNavBar role="friends-page" />
    </Layout>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    height: "85vh",
    overflow: "hidden",
  },
  header: {
    color: "#000000",
    padding: "20px",
    textAlign: "center",
  },
  signatureContainer: {
    marginTop: "10px",
  },
  buttonsContainer: {
    display: "flex",
    justifyContent: "space-around",
    padding: "10px",
  },
  mainContent: {
    flex: 1,
    overflowY: "auto",
    padding: "20px",
  },
};

export default FriendsScreen;
