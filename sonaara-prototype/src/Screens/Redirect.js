import React, { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const Redirect = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate()
  const code = searchParams.get("code");

  useEffect(() => {
    if (code) {
      sendTokenRequest(code);
    }
  }, [code]);

  return (
    <div className="App">
      <h1>Redirecting...</h1>
      <button onClick={() => navigate('/')}>Go to home (/)</button>
    </div>
  );
};

let requestSent = false
const sendTokenRequest = async (code) => {
  if (requestSent) return;
  requestSent = true;
  try {
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
  } catch (err) {
    console.log('error occurred', err)
  }
};

export default Redirect;
