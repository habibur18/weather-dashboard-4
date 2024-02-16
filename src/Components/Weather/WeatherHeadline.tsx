import { useContext } from "react";
import cloud from "../../assets/cloud.svg";
import haze from "../../assets/haze.svg";
import snowIcon from "../../assets/icons/snow.svg";
import sunnyIcon from "../../assets/icons/sunny.svg";
import pin from "../../assets/pin.svg";
import rainIcon from "../../assets/rainy.svg";
import thunderstormIcon from "../../assets/thunder.svg";
import { WeatherContext } from "../../context";
import { getFormattedDate } from "../../utils/date-utils";

function getWeatherIcon(climate: string): string {
  switch (climate) {
    case "sunny":
      return sunnyIcon;
    case "haze":
      return haze;
    case "snow":
      return snowIcon;
    case "rain":
      return rainIcon;
    case "thunderstorm":
      return thunderstormIcon;
    case "cloud":
      return cloud;
    case "clear":
      return sunnyIcon;
    case "mist":
      return haze;
    case "smoke":
      return haze;
    case "hail":
      return haze;
    default:
      return sunnyIcon;
  }
}
export default function WeatherHeadline() {
  const { weatherData } = useContext(WeatherContext);
  const { climate, location, temperature, time } = weatherData;
  return (
    <div>
      <div className="max-md:flex items-center justify-between md:-mt-10">
        <img src={getWeatherIcon(climate)} alt="cloud" />
        <div className="max-md:flex items-center max-md:space-x-4">
          <h1 className="text-[60px] lg:text-[80px] xl:text-[100px] leading-none md:mb-4">{Math.round(temperature)}°</h1>
          <div className="flex items-center space-x-4 md:mb-4">
            <img src={pin} />
            <h2 className="text-2xl lg:text-[50px]">{location}</h2>
          </div>
        </div>
      </div>
      <p className="text-sm lg:text-lg">{getFormattedDate(time, "date", false)}</p>
    </div>
  );
}
