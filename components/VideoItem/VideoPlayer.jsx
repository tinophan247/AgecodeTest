import React from "react";
import PlayIcon2 from "../Icons/play2";

const VideoPlayer = () => {
  return (
    <div className="mt-5 flex justify-center">
      <img src="./assets/video.png" alt="not-found" />
      <div className="absolute translate-y-20 cursor-pointer">
        <PlayIcon2 />
      </div>
    </div>
  );
};

export default VideoPlayer;
