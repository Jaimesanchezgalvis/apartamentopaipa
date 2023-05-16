import React from "react";
import videoFile from "../assets/Video/videoApartamento.mp4"; // Ruta al archivo de video

import "../styles/VideoPlayer.css";

export const VideoPlayer = () => {
  return (
    <div className="video">
      <h2>Miralo en Video 😍</h2>
      <video controls>
        <source src={videoFile} type="video/mp4" />
      </video>
    </div>
  );
};
