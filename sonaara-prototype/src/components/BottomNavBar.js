import React from "react";
import Icon from "./Icon"; // Import the Icon component

const BottomNavBar = () => {
  return (
    <div style={styles.bottomNavBar}>
      <a href="/tunez">
        <Icon role="menu-tunez" />
      </a>
      <a href="/discover">
        <Icon role="menu-discover" />
      </a>
      <a href="/friends">
        <Icon role="menu-friends" />
      </a>
    </div>
  );
};

const BottomNavBarDiscover = () => {
  return (
    <div style={styles.bottomNavBar}>
      <a href="/tunez">
        <Icon role="menu-tunez" />
      </a>
      <a href="/discover">
        <Icon role="menu-discover-selected" />
      </a>
      <a href="/friends">
        <Icon role="menu-friends" />
      </a>
    </div>
  );
};

const BottomNavBarFriends = () => {
  return (
    <div style={styles.bottomNavBar}>
      <a href="/tunez">
        <Icon role="menu-tunez" />
      </a>
      <a href="/discover">
        <Icon role="menu-discover" />
      </a>
      <a href="/friends">
        <Icon role="menu-friends-selected" />
      </a>
    </div>
  );
};

const CurrentPageAwareNavigationButton = ({ href, role }) => {
  let currentPage = window.location.pathname;
  let variant = null;
  if (role === "menu-tunez") {
    console.log({ currentPage, href });
  }
  const matchesCurrentPage = currentPage === href;
  if (matchesCurrentPage) {
    variant = "active";
  } else {
    variant = "inactive";
  }
  if (role === "menu-tunez") {
    console.log(variant);
  }
  return <Icon role={role} variant={variant} />;
};

const BottomNavBarTunez = () => {
  return (
    <div style={styles.bottomNavBar}>
      <a href="/tunez">
        <CurrentPageAwareNavigationButton href="/tunez" role="menu-tunez" />
      </a>
      <a href="/discover">
        <CurrentPageAwareNavigationButton
          href="/discover"
          role="menu-discover"
        />
      </a>
      <a href="/friends">
        <CurrentPageAwareNavigationButton href="/friends" role="menu-friends" />
      </a>
    </div>
  );
};

const BottomNavBarDiff = (props) => {
  const { role } = props;
  let NavBarComponentToRender = null;

  if (role === "discover-page") {
    NavBarComponentToRender = BottomNavBarDiscover;
  }
  if (role === "tunez-page") {
    NavBarComponentToRender = BottomNavBarTunez;
  }
  if (role === "friends-page") {
    NavBarComponentToRender = BottomNavBarFriends;
  }
  return NavBarComponentToRender ? (
    <NavBarComponentToRender style={styles.bottomNavBar} />
  ) : null;
};

const styles = {
  bottomNavBar: {
    position: "fixed",
    bottom: 0,
    left: 0,
    width: "100%",
    backgroundColor: "#ffffff",
    borderTop: "1px solid #f0f0f0",
    boxSizing: "border-box",
    boxShadow: "0px 20px 10px rgba(3,3,3,0.1)",
    borderTop: "1px solid #ccc",
    display: "flex",
    justifyContent: "space-evenly",
    padding: "10px 0",
    height: "70px",
  },
};

export default BottomNavBarDiff;
