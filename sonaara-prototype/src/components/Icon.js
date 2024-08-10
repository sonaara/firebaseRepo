import React from "react";

const styles = {
  Circle: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    width: "86px",
    height: "86px",
    backgroundColor: "#c2c2c2",
    borderRadius: "50%",
  },
  Icon: {
    color: "#030303",
    fill: "#030303",
    fontSize: "30px",
    top: "618px",
    left: "57px",
    width: "30px",
    height: "30px",
  },
};

const IconComponentMenuFriends = () => (
  <svg
    style={{
      ...styles.Icon,
      color: "#030303",
      fill: "#030303",
      width: "45px",
      height: "45px",
      fontSize: "45px",
    }}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM1.22 17.58A2.01 2.01 0 0 0 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zM20 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM22.78 17.58A6.95 6.95 0 0 0 20 17c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85zm-6.54-.93c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
    <path d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6 2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4 19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26.65.31 1.18.82 1.53 1.44.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2 2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7.35-.62.88-1.13 1.52-1.44z"></path>
  </svg>
);

const IconComponentMenuFriendsSelected = () => (
  <svg
    style={{
      ...styles.Icon,
      color: "#8018dc",
      fill: "#8018dc",
      width: "45px",
      height: "45px",
      fontSize: "45px",
    }}
    viewBox="0 0 24 24"
  >
    <path d="M0 0h24v24H0z" fill="none"></path>
    <path d="M4 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM1.22 17.58A2.01 2.01 0 0 0 0 19.43V21h4.5v-1.61c0-.83.23-1.61.63-2.29-.37-.06-.74-.1-1.13-.1-.99 0-1.93.21-2.78.58zM20 12a2 2 0 1 0 0 4 2 2 0 1 0 0-4zM22.78 17.58A6.95 6.95 0 0 0 20 17c-.39 0-.76.04-1.13.1.4.68.63 1.46.63 2.29V21H24v-1.57c0-.81-.48-1.53-1.22-1.85zm-6.54-.93c-1.17-.52-2.61-.9-4.24-.9-1.63 0-3.07.39-4.24.9A2.988 2.988 0 0 0 6 19.39V21h12v-1.61c0-1.18-.68-2.26-1.76-2.74zM9 12c0 1.66 1.34 3 3 3s3-1.34 3-3-1.34-3-3-3-3 1.34-3 3z"></path>
    <path d="M2.48 10.86C2.17 10.1 2 9.36 2 8.6 2 6.02 4.02 4 6.6 4c2.68 0 3.82 1.74 5.4 3.59C13.57 5.76 14.7 4 17.4 4 19.98 4 22 6.02 22 8.6c0 .76-.17 1.5-.48 2.26.65.31 1.18.82 1.53 1.44.6-1.2.95-2.42.95-3.7C24 4.9 21.1 2 17.4 2c-2.09 0-4.09.97-5.4 2.51C10.69 2.97 8.69 2 6.6 2 2.9 2 0 4.9 0 8.6c0 1.28.35 2.5.96 3.7.35-.62.88-1.13 1.52-1.44z"></path>
  </svg>
);

const IconComponentMenuDiscover = () => (
  <div style={styles.Circle}>
    <svg
      style={{
        ...styles.Icon,
        color: "#030303",
        fill: "#030303",
        width: "57px",
        height: "51px",
        fontSize: "57px",
      }}
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM80.72 256H79.63c-9.078 0-16.4-8.011-15.56-17.34C72.36 146 146.5 72.06 239.3 64.06C248.3 63.28 256 70.75 256 80.09c0 8.35-6.215 15.28-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4C95.4 249.6 88.77 256 80.72 256zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96s96 43 96 96S309 351.1 256 351.1zM256 224C238.3 224 224 238.2 224 256s14.3 32 32 32c17.7 0 32-14.25 32-32S273.7 224 256 224z"></path>
    </svg>
  </div>
);

const IconComponentMenuDiscoverSelected = () => (
  <div style={styles.Circle}>
    <svg
      style={{
        ...styles.Icon,
        color: "#8018dc",
        fill: "#8018dc",
        width: "57px",
        height: "51px",
        fontSize: "57px",
      }}
      viewBox="0 0 512 512"
    >
      <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM80.72 256H79.63c-9.078 0-16.4-8.011-15.56-17.34C72.36 146 146.5 72.06 239.3 64.06C248.3 63.28 256 70.75 256 80.09c0 8.35-6.215 15.28-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4C95.4 249.6 88.77 256 80.72 256zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96s96 43 96 96S309 351.1 256 351.1zM256 224C238.3 224 224 238.2 224 256s14.3 32 32 32c17.7 0 32-14.25 32-32S273.7 224 256 224z"></path>
    </svg>
  </div>
);

const IconComponentMenuTunez = ({ color, fill }) => (
  <svg
    style={{
      ...styles.Icon,
      color,
      fill,
      width: "45px",
      height: "45px",
      fontSize: "45px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
  </svg>
);

const IconComponentMenuTunezSelected = () => (
  <svg
    style={{
      ...styles.Icon,
      color: "#8018dc",
      fill: "#8018dc",
      width: "45px",
      height: "45px",
      fontSize: "45px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
  </svg>
);

const IconComponentSettings = () => (
  <svg style={styles.Icon} viewBox="0 0 24 24">
    <path fill="none" d="M0 0h24v24H0z"></path>
    <path d="M3 17v2h6v-2H3zM3 5v2h10V5H3zm10 16v-2h8v-2h-8v-2h-2v6h2zM7 9v2H3v2h4v2h2V9H7zm14 4v-2H11v2h10zm-6-4h2V7h4V5h-4V3h-2v6z"></path>
  </svg>
);

const IconComponentLikeButton = () => (
  <svg
    style={{
      ...styles.Icon,
      width: "25px",
      height: "25px",
      fontSize: "25px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M0 190.9V185.1C0 115.2 50.52 55.58 119.4 44.1C164.1 36.51 211.4 51.37 244 84.02L256 96L267.1 84.02C300.6 51.37 347 36.51 392.6 44.1C461.5 55.58 512 115.2 512 185.1V190.9C512 232.4 494.8 272.1 464.4 300.4L283.7 469.1C276.2 476.1 266.3 480 256 480C245.7 480 235.8 476.1 228.3 469.1L47.59 300.4C17.23 272.1 .0003 232.4 .0003 190.9L0 190.9z"></path>
  </svg>
);

const IconComponentPausePlayButton = () => (
  <svg
    style={{
      ...styles.Icon,
      width: "25px",
      height: "25px",
      fontSize: "25px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M424.4 214.7L72.4 6.6C43.8-10.3 0 6.1 0 47.9V464c0 37.5 40.7 60.1 72.4 41.3l352-208c31.4-18.5 31.5-64.1 0-82.6z"></path>
  </svg>
);

const IconComponentDislikeButton = () => (
  <svg
    style={{
      ...styles.Icon,
      width: "25px",
      height: "25px",
      fontSize: "25px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M376.6 427.5c11.31 13.58 9.484 33.75-4.094 45.06c-5.984 4.984-13.25 7.422-20.47 7.422c-9.172 0-18.27-3.922-24.59-11.52L192 305.1l-135.4 162.5c-6.328 7.594-15.42 11.52-24.59 11.52c-7.219 0-14.48-2.438-20.47-7.422c-13.58-11.31-15.41-31.48-4.094-45.06l142.9-171.5L7.422 84.5C-3.891 70.92-2.063 50.75 11.52 39.44c13.56-11.34 33.73-9.516 45.06 4.094L192 206l135.4-162.5c11.3-13.58 31.48-15.42 45.06-4.094c13.58 11.31 15.41 31.48 4.094 45.06l-142.9 171.5L376.6 427.5z"></path>
  </svg>
);

const IconComponentLoginLogo = () => (
  <svg
    style={{
      ...styles.Icon,
      color: "#8018dc",
      fill: "#8018dc",
      width: "104px",
      height: "106px",
      fontSize: "104px",
    }}
    viewBox="0 0 512 512"
  >
    <path d="M256 0C114.6 0 0 114.6 0 256s114.6 256 256 256s256-114.6 256-256S397.4 0 256 0zM80.72 256H79.63c-9.078 0-16.4-8.011-15.56-17.34C72.36 146 146.5 72.06 239.3 64.06C248.3 63.28 256 70.75 256 80.09c0 8.35-6.215 15.28-14.27 15.99C164.7 102.9 103.1 164.3 96.15 241.4C95.4 249.6 88.77 256 80.72 256zM256 351.1c-53.02 0-96-43-96-95.1s42.98-96 96-96s96 43 96 96S309 351.1 256 351.1zM256 224C238.3 224 224 238.2 224 256s14.3 32 32 32c17.7 0 32-14.25 32-32S273.7 224 256 224z"></path>
  </svg>
);

const variantToFillColor = {
  inactive: {
    fill: "#030303",
    color: "#030303",
  },
  active: {
    fill: "#8018dc",
    color: "#8018dc",
  },
};

const Icon = (props) => {
  const { role, variant = "inactive" } = props;
  let IconComponentToRender = null;

  const variantFillColor = variantToFillColor[variant];

  if (role === "menu-tunez") {
    console.log({ variantFillColor });
  }

  if (role === "settings") {
    IconComponentToRender = IconComponentSettings;
  }
  if (role === "menu-tunez") {
    IconComponentToRender = IconComponentMenuTunez;
  }
  if (role === "menu-tunez-selected") {
    IconComponentToRender = IconComponentMenuTunez;
  }
  if (role === "menu-friends") {
    IconComponentToRender = IconComponentMenuFriends;
  }
  if (role === "menu-friends-selected") {
    IconComponentToRender = IconComponentMenuFriendsSelected;
  }
  if (role === "menu-discover") {
    IconComponentToRender = IconComponentMenuDiscover;
  }
  if (role === "menu-discover-selected") {
    IconComponentToRender = IconComponentMenuDiscoverSelected;
  }
  if (role === "like-button") {
    IconComponentToRender = IconComponentLikeButton;
  }
  if (role === "dislike-button") {
    IconComponentToRender = IconComponentDislikeButton;
  }
  if (role === "pause-play-button") {
    IconComponentToRender = IconComponentPausePlayButton;
  }
  if (role === "login-logo") {
    IconComponentToRender = IconComponentLoginLogo;
  }

  return IconComponentToRender ? (
    <IconComponentToRender
      style={styles.Icon}
      {...variantFillColor}
      color={variantFillColor.color}
      fill={variantFillColor.fill}
    />
  ) : null;
};

export default Icon;
