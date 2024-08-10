import React, { useEffect } from "react";
import { useSearchParams } from "react-router-dom";

const Redirect = () => {
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const code = searchParams.get("code");

    if (code) {
      sendTokenRequest(code);
    }
  }, [searchParams]);

  return (
    <div className="App">
      <h1>Redirecting...</h1>
    </div>
  );
};

const sendTokenRequest = async (code) => {
  const response = await fetch(
    "http://127.0.0.1:5001/sonaara-21356/us-central1/token",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ code }),
    }
  );
  const data = await response.json();
  console.log(data);
  const trackDetails = data.songs.items.map((item) => {
    return {
      trackName: item.track.name,
      artistName: item.track.artists[0].name,
      duration_ms: item.track.duration_ms,
    };
  });
  console.log(trackDetails);
};

export default Redirect;
