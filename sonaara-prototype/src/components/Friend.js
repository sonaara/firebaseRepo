import React from "react";
import Signature from "./Signature";

const Friend = ({
  name = "Friend Name",
  imageUrl = "https://assets.api.uizard.io/api/cdn/stream/c2417916-3599-4c77-b711-ef40f55b09bb.png",
}) => {
  const styles = {
    container: {
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      padding: "10px",
    },
    content: {
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      width: "100%",
      marginTop: "10px",
    },
    image: {
      width: "40px",
      height: "40px",
      borderRadius: "4px",
      objectFit: "cover",
    },
    text: {
      color: "#030303",
      fontSize: "14px",
      fontFamily: "Roboto Mono",
      lineHeight: "16px",
      marginRight: "170px",
    },
    signature: {
      marginLeft: "20px",
    },
  };

  return (
    <div style={styles.container}>

      {/* Content */}
      <div style={styles.content}>
        {/* Image */}
        <div style={styles.image}>
          <img src={imageUrl} alt="Friend" style={styles.image} />
        </div>

        {/* Name and Signature */}
        <div style={{ display: "flex", alignItems: "center" }}>
          {/* Name */}
          <div style={styles.text}>{name}</div>

          {/* Signature */}
          <div style={styles.signature}>
            <Signature />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Friend;
