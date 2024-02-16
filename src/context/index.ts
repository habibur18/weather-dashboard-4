import { createContext } from "react";
import { WeatherContextType } from "../hoooks/useWeather";

const WeatherContext = createContext<WeatherContextType>(null);
const FavouriteContext = createContext("");
const LocationContext = createContext("");
export { FavouriteContext, LocationContext, WeatherContext };
