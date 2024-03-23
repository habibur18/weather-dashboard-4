import { useContext, useEffect, useState } from "react";
import { LocationContext } from "../context";

export interface WeatherData {
  location: string;
  climate: string;
  temperature: number;
  maxTemperature: number;
  minTemperature: number;
  humidity: number;
  cloudPercentage: number;
  wind: { speed: number; deg: number }; // You might want to define a type for wind data as well
  time: number;
  longitude: number;
  latitude: number;
}

interface LoadingState {
  state: boolean;
  message: string;
}

export interface WeatherContextType {
  weatherData: WeatherData;
  loading: { state: boolean; message: string };
  error: Error | null;
}

const useWeather = () => {
  const [weatherData, setWeatherData] = useState<WeatherData>({
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
  });
  const [loading, setLoading] = useState<LoadingState>({
    state: false,
    message: "",
  });
  const [error, setError] = useState<Error | null>(null);
  const { selectedLocation } = useContext(LocationContext);
  console.log("selectedLocation", selectedLocation);
  const fetchWeather = async (latitude: number, longitude: number) => {
    try {
      setLoading({
        ...loading,
        state: true,
        message: "Fetching weather data...",
      });
      const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=424806f5d3c0ca5d807782443f9552cf
      `);
      console.log("response", response);
      if (!response.ok) {
        const errorMessage = `Fetching weather data failed : ${response.status}`;
        throw new Error(errorMessage);
      }
      const data = await response.json();
      const updatedWeatherData = {
        ...weatherData,
        location: data?.name,
        climate: data?.weather[0]?.main,
        temperature: data?.main?.temp,
        maxTemperature: data?.main?.temp_max,
        minTemperature: data?.main?.temp_min,
        humidity: data?.main?.humidity,
        cloudPercentage: data?.clouds?.all,
        wind: data.wind,
        time: data?.dt,
        longitude: longitude,
        latitude: latitude,
      };
      setWeatherData(updatedWeatherData);
    } catch (err) {
      setError(err as Error);
    } finally {
      setLoading({
        ...loading,
        state: false,
        message: "",
      });
    }
  };

  useEffect(() => {
    setLoading({
      ...loading,
      state: true,
      message: "Finding your location...",
    });

    if (selectedLocation.latitude && selectedLocation.longitude) {
      fetchWeather(selectedLocation.latitude, selectedLocation.longitude);
    } else {
      navigator.geolocation.getCurrentPosition((position) => {
        const latitude = position.coords.latitude;
        const longitude = position.coords.longitude;
        fetchWeather(latitude, longitude);
      });
    }
  }, [selectedLocation.latitude, selectedLocation.longitude]);

  return { weatherData, loading, error };
};

export default useWeather;
