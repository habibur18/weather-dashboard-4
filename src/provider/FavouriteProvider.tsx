import React from "react";
import { FavouriteContext } from "../context";
import { useLocalStorage } from "../hoooks";

interface FavouriteProviderProps {
  children: React.ReactNode;
}

export const FavouriteProvider: React.FC<FavouriteProviderProps> = ({ children }) => {
  const [favourite, setFavourite] = useLocalStorage("favourites", []);

  const addToFavourite = (lat: number, long: number, location: string) => {
    setFavourite([...favourite, { latitude: lat, longitude: long, location: location }]);
  };
  const removeFromFavourite = (location) => {
    setFavourite(favourite.filter((item) => item.location !== location));
  };
  return <FavouriteContext.Provider value={{ favourite, addToFavourite, removeFromFavourite }}>{children}</FavouriteContext.Provider>;
};
