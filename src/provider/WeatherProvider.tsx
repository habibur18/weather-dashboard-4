import { ReactNode } from "react";
import { WeatherContext } from "../context";
import { useWeather } from "../hoooks";

interface WeatherProviderProps {
  children: ReactNode;
}

const WeatherProvider = ({ children }: WeatherProviderProps) => {
  const { weatherData, loading, error } = useWeather();

  return <WeatherContext.Provider value={{ weatherData, loading, error }}>{children}</WeatherContext.Provider>;
};

export default WeatherProvider;
