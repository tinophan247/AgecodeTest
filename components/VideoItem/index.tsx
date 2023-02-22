import React from "react";

const VideoItem = () => {
  return (
    <div className="w-full h-20 flex bg-age-gray-3 mt-5 rounded-lg">
      <div className="w-24">
        <img
          src="./assets/videoItem.png"
          alt="not-found"
          className="rounded-l-lg -mt-1 -ml-2"
        />
      </div>
      <div className="flex justify-center items-center ml-4">
        <p className="text-base font-medium">Tickets on Sale Friday</p>
      </div>
    </div>
  );
};

export default VideoItem;
