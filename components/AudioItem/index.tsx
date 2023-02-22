import React from "react";
import PlayIcon from "../Icons/play";

const AudioItem = () => {
  return (
    <div className="w-full h-84px flex bg-age-gray-3 mt-5 rounded-lg">
      <div className="w-84px h-84px">
        <img
          src="./assets/audio.png"
          alt="not-found"
          className="rounded-l-lg"
        />
      </div>
      <div className="ml-4 mt-2">
        <p className="text-sm font-medium">As it was</p>
        <p className="text-10 text-age-gray-4">Harry Styles</p>
        <button className="w-32 h-5 m-auto text-10 border border-black rounded-full">
          Streaming options
        </button>
      </div>
    </div>
  );
};

export default AudioItem;
