import { useContext, useEffect, useState } from "react";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import ClearSkyImage from "./assets/backgrounds/clear-sky.jpg";
import FewCloudsImage from "./assets/backgrounds/few-clouds.jpg";
import MistImage from "./assets/backgrounds/mist.jpeg";
import RainyDayImage from "./assets/backgrounds/rainy-day.jpg";
import ScatterCloudsImage from "./assets/backgrounds/scattered-clouds.jpg";
import SnowyDayImage from "./assets/backgrounds/snow.jpg";
import ThunderStormImage from "./assets/backgrounds/thunderstorm.jpg";
import WinterImage from "./assets/backgrounds/winter.jpg";
import { WeatherContext } from "./context";
export default function Page() {
  const { weatherData, loading } = useContext(WeatherContext);
  const [climateImage, setClimateImage] = useState("");

  function getBackgroundImage(climate = "") {
    switch (climate) {
      case "Clear":
        return ClearSkyImage;
      case "Clouds":
        return FewCloudsImage;
      case "Mist":
        return MistImage;
      case "Rain":
        return RainyDayImage;
      case "Scattered Clouds":
        return ScatterCloudsImage;
      case "Snow":
        return SnowyDayImage;
      case "Thunderstorm":
        return ThunderStormImage;
      case "Winter":
        return WinterImage;
      default:
        return ClearSkyImage;
    }
  }
  useEffect(() => {
    const bgImage = getBackgroundImage(weatherData.climate);
    setClimateImage(bgImage);
  }, [weatherData.climate]);

  return (
    <>
      <div style={{ backgroundImage: `url(${climateImage})` }} className="grid place-items-center h-screen bg-no-repeat bg-cover bg-center">
        <Header />
        <main>{!loading.state ? <WeatherBoard /> : <div className="flex justify-center items-center text-center text-2xl bg-no-repeat bg-cover bg-center">{loading.message}</div>}</main>
      </div>
    </>
  );
}
