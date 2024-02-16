import { useContext, useEffect, useState } from "react";
import readHeartIcon from "../../assets/heart-red.svg";
import heartIcon from "../../assets/heart.svg";
import { FavouriteContext, WeatherContext } from "../../context";
export default function AddToFavourite() {
  const { favourite, addToFavourite, removeFromFavourite } = useContext(FavouriteContext);
  const { weatherData } = useContext(WeatherContext);
  const [isFavorite, setFavourite] = useState(false);
  const { latitude, longitude, location } = weatherData;

  useEffect(() => {
    const found = favourite.find((item) => item.latitude === latitude && item.longitude === longitude);
    setFavourite(found ? true : false);
  }, [favourite, latitude, longitude]);
  const handleFavourite = () => {
    const found = favourite.find((item) => item.latitude === latitude && item.longitude === longitude);
    if (found) {
      removeFromFavourite(location);
    } else {
      addToFavourite(latitude, longitude, location);
    }
    setFavourite(!isFavorite);
  };
  return (
    <div className="md:col-span-2">
      <div className="flex items-center justify-end space-x-6">
        <button onClick={handleFavourite} className="text-sm md:text-base inline-flex items-center space-x-2 px-3 py-1.5 rounded-md bg-[#C5C5C54D]">
          <span>Add to Favourite</span>
          <img src={isFavorite ? readHeartIcon : heartIcon} alt="" />
        </button>
      </div>
    </div>
  );
}
