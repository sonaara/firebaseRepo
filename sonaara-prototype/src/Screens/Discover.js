import React from "react";
import Button from "../components/Button";
import Icon from "../components/Icon";
import BottomNavBar from "../components/BottomNavBar";

const DiscoverScreen = () => {
  return (
    <div style={styles.container}>
      {/* Header */}
      <div style={styles.header}>
        {/* Placeholder text with emojis */}
        <h1 style={styles.headerText}>
          <span role="img" aria-label="Music Emoji">
            🎵
          </span>{" "}
          Liked By Friends
          <span role="img" aria-label="Music Emoji">
            🎵
          </span>
        </h1>
      </div>

      {/* Main Content */}
      <div style={styles.mainContent}>
        {/* Gif */}
        <div
          style={{
            ...styles.gif,
            backgroundImage:
              "url(https://media4.giphy.com/media/gFhZjOtzoutSvckWPM/giphy.webp?cid=acd21440tvk1xt6lq9ep727c4emb042f49rcbd9st15nuwgu&ep=v1_gifs_search&rid=giphy.webp&ct=g)",
          }}
        />

        {/* Buttons */}
        <div style={styles.buttonsContainer}>
          <Button role="player">
            <Icon role="dislike-button" />
          </Button>

          <Button role="player">
            <Icon role="pause-play-button" />
          </Button>

          <Button role="player">
            <Icon role="like-button" />
          </Button>
        </div>
      </div>
      <BottomNavBar role="discover-page" />
    </div>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  header: {
    margin: "20px 0",
  },
  headerText: {
    color: "#030303",
    fontSize: "14px",
    fontFamily: "Roboto Mono",
    fontWeight: 500,
    lineHeight: "22px",
    textAlign: "center",
  },
  mainContent: {
    position: "relative",
  },
  gif: {
    width: "318px",
    height: "313px",
    borderRadius: "25.44px",
    boxShadow: "-2px 2px 0px rgba(0,0,0,0.25)",
    backgroundPosition: "center center",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  buttonsContainer: {
    marginTop: "20px", // Adjust margin top as needed
    display: "flex",
    justifyContent: "space-between",
    width: "80%", // Adjust as needed
    marginLeft: "auto",
    marginRight: "auto",
  },
};

export default DiscoverScreen;
