import "./App.css";
import Header from "./Components/Header/Header";
import WeatherBoard from "./Components/Weather/WeatherBoard";
import { FavouriteProvider, LocationProvider } from "./provider";
import WeatherProvider from "./provider/WeatherProvider";

function App() {
  return (
    <WeatherProvider>
      <FavouriteProvider>
        <LocationProvider>
          <div className="grid place-items-center h-screen">
            <Header />
            <main>
              <WeatherBoard />
            </main>
          </div>
        </LocationProvider>
      </FavouriteProvider>
    </WeatherProvider>
  );
}

export default App;
