import React, { useRef, useState } from "react";
import "../styles/VideoPlayer.css";

const VideoPlayer = ({ videoPath, overlayText }) => {
  const videoRef = useRef(null); // Ref for video element
  const [isPlaying, setIsPlaying] = useState(false);

  // Toggle play/pause
  const handlePlayPause = () => {
    if (videoRef.current.paused) {
      videoRef.current.play();
      setIsPlaying(true);
    } else {
      videoRef.current.pause();
      setIsPlaying(false);
    }
  };

  return (
    <div className="video-player-container">
      {/* Video element */}
      <video
        ref={videoRef}
        className="video-player"
        src={videoPath}
        muted
        controls="true"
      ></video>

      {/* Overlay text, if provided */}
      {overlayText && <div className="video-overlay-text">{overlayText}</div>}

      {/* Play/Pause Button */}
      {!isPlaying && ( // Only show the button when the video is paused
        <button className="video-play-pause-btn" onClick={handlePlayPause}>
          Play
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
