import React from "react";
import { Link } from "react-router-dom";

const styles = {
  cursor: "pointer",
  top: "473px",
  left: "38px",
  width: "120px",
  height: "36px",
  padding: "0px 8px",
  border: "1px solid #030303",
  boxSizing: "border-box",
  boxShadow: "2px 2px 0px rgba(0,0,0,0.8)",
  backgroundColor: "#c7c7f1",
  color: "#030303",
  fontSize: "14px",
  fontFamily: "Roboto Mono",
  lineHeight: "16px",
  textTransform: "uppercase",
  outline: "none",
};

const roleStyles = {
  "add-friend": {
    width: "131px",
    height: "36px",
    backgroundColor: "#c7c7f1",
  },
  "follow-artist": {
    width: "131px",
    height: "36px",
    backgroundColor: "#f9d857",
  },
  login: {
    width: "327px",
    height: "46px",
    backgroundColor: "#c7c7f1",
  },
  player: {
    width: "57px",
    height: "52px",
    backgroundColor: "#c7c7f1",
  },
};

const Button = (props) => {
  const localStyles = {
    ...styles,
    ...roleStyles[props.role],
  };
  console.log(localStyles);

  const button = (
    <button onClick={props.onClick} style={localStyles}>
      {props.children}
    </button>
  );
  if (props.to) {
    return <Link to={props.to}>{button}</Link>;
  } else {
    return button;
  }
};

export default Button;
