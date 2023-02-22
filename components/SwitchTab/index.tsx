import React from "react";

const SwitchTab = () => {
  return (
    <div className="w-full h-8 flex bg-age-gray-2 rounded-full">
      <div className="text-xs font-bold min-w-113 flex justify-center items-center bg-white rounded-full border border-age-gray-2 ">
        プロフィール
      </div>
      <div className="text-xs w-28 h-8 flex justify-center items-center">
        感謝の声
      </div>
      <div className="text-xs w-28 h-8 flex justify-center items-center">
        タイムライン
      </div>
    </div>
  );
};

export default SwitchTab;
