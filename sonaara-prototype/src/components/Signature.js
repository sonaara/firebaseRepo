import React from "react";

const styles = {
  Button: {
    cursor: "pointer",
    top: "232px",
    left: "91px",
    width: "196px",
    height: "60px",
    padding: "0px 8px",
    border: "0",
    boxSizing: "border-box",
    borderRadius: "6px",
    boxShadow: "0px 2px 8px rgba(0,0,0,0.16)",
    backgroundColor: "#ffffff",
    color: "#000000",
    fontSize: "28px",
    fontFamily: "Roboto Mono",
    lineHeight: "36px",
    textTransform: "uppercase",
    outline: "none",
  },
};

const defaultProps = {
  label: "🎸 🎺 🪩" /* replace with actual emojis from output */,
};

const Button = (props) => {
  return (
    <button style={styles.Button}>{props.label ?? defaultProps.label}</button>
  );
};

export default Button;
