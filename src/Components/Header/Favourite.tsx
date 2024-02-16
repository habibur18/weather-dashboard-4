import React from "react";
import favourite from "../../assets/heart.svg";

interface FavouriteProps {
  onShowModal: () => void;
}

const Favourite: React.FC<FavouriteProps> = ({ onShowModal }) => {
  return (
    <div onClick={onShowModal} className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={favourite} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
};

export default Favourite;
