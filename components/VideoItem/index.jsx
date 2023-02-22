import React from "react";

const VideoItem = ({ img, title = "", width = "w-full" }) => {
  return (
    <div className={`${width} h-20 flex bg-age-gray-3 mt-5 rounded-lg`}>
      <div className="w-24">
        <img src={img} alt="not-found" className="rounded-l-lg -mt-1 -ml-2" />
      </div>
      <div className="flex justify-center items-center">
        <p className="text-base font-medium">{title}</p>
      </div>
    </div>
  );
};

export default VideoItem;
