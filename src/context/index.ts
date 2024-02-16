import { Dispatch, SetStateAction, createContext } from "react";
import { WeatherContextType } from "../hoooks/useWeather";

interface Location {
  location: string;
  latitude: number;
  longitude: number;
}

interface LocationContextType {
  selectedLocation: Location;
  setSelectedLocation: Dispatch<SetStateAction<Location>>;
}
interface FavouriteContextType {
  removeFromFavourite: (location: string) => void;
  addToFavourite: (lat: number, long: number, location: string) => void;
  favourite: Location[]; // Adjust the type accordingly
}

const WeatherContext = createContext<WeatherContextType>({
  weatherData: {
    location: "",
    climate: "",
    temperature: 0,
    maxTemperature: 0,
    minTemperature: 0,
    humidity: 0,
    cloudPercentage: 0,
    wind: { speed: 0, deg: 0 },
    time: 0,
    longitude: 0,
    latitude: 0,
  },
  loading: { state: false, message: "" },
  error: null,
});
const FavouriteContext = createContext<FavouriteContextType>({ favourite: [], addToFavourite: () => {}, removeFromFavourite: () => {} });
const LocationContext = createContext<LocationContextType>({
  selectedLocation: {
    location: "",
    latitude: 0,
    longitude: 0,
  },
  setSelectedLocation: () => {},
});
export { FavouriteContext, LocationContext, WeatherContext };
