import React, { useRef } from "react";
import video from "../../assets/college-video.mp4";
const VideoPlayer = ({ playState, setPlayState }) => {
  const player = useRef(null);
  const closePlayer = (e) => {
    if (e.target === player.current) {
        setPlayState(false)
    }
  };
  return (
    <div
      className={`video-player ${
        playState ? "" : "hide"
      }  fixed top-0 left-0 w-full h-full bg-[rgba(0,0,0,0.9)] z-100 flex items-center justify-center`}
      ref={player}
      onClick={closePlayer}
    >
      <video src={video} autoPlay muted controls></video>
    </div>
  );
};

export default VideoPlayer;
