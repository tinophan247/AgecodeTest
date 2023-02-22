import React from "react";
import StarIcon from "../Icons/star";

const RatingStar = ({user='', ratingStar = 0, date= '', text=''}) => {
  const renderStar = (star) => {
    switch (star) {
      case 1: {
        return (
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
          </div>
        );
      }
      case 2: {
        return (
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
          </div>
        );
      }
      case 3: {
        return (
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
          </div>
        );
      }
      case 4: {
        return (
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon fill="#ebe9e9" />
          </div>
        );
      }
      case 5: {
        return (
          <div className="flex gap-1">
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
            <StarIcon />
          </div>
        );
      }
      default: {
        return (
          <div className="flex gap-1">
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
            <StarIcon fill="#ebe9e9" />
          </div>
        );
      }
    }
  };
  return (
    <div className='mt-6'>
      <div className="flex justify-between">
        <div className="flex items-center">
          <p className="font-bold text-xs mr-2">{user}</p>
          {renderStar(ratingStar)}
        </div>
        <p className="text-xs text-age-gray-1">{date}</p>
      </div>
      <div className="text-xs mt-2" dangerouslySetInnerHTML={{ __html: text}}/>
    </div>
  );
};

export default RatingStar;
