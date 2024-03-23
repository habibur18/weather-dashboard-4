# Weather App

This is a user-friendly Weather App offering instant and accurate weather updates for any location (exepet few cities). Powered by OpenWeatherMap API.

## Technologies Used

- Tailwind
- ReactJS
- React Context API
- TypeScript
- Git

## Features

- **Current Weather:** Get the current temperature, weather condition, humidity, wind speed, and more.
- **IsFavorite:** Have a toggle button that will save exact location when.
- **Search:** Easily find the weather for any location by searching for city names or using coordinates.
- **Debouce Search:** I utilized debounce functionality to search every 500 milliseconds, which calls the API after the user inputs data.
- **Full Responsiveness:** A seamless experience across various screen sizes, ensuring it's accessible on desktops, tablets, and mobile devices.

## Demo

Check out the live demo: [Weather-App Demo](https://weather-dashboard-4.vercel.app/)

## Screenshots

![Weather App Screenshot](https://i.postimg.cc/85C9J9JX/Screenshot-2024-03-23-095823.png)

## Build & Deploy

Follow these steps to build and deploy the Weather App:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/habibur18/weather-dashboard-4
   cd weather-app

   ```

2. **Install Dependency**

   ```
   npm install

   ```

#### or

       yarn install ```

3. **Set up Environment Variables**
   Create a .env file in the root directory of your project and add your API key:

   `VITE_WEATHER_API_KEY= your_open_weather_api_key`

4. **Start the Development Server**
   `npm run dev`

5. **Deploy to Vercel**

```
Install Vercel CLI (if not already installed):
     npm install -g vercel
     # or
     yarn global add vercel

```

6. **Log in to Vercel CLI:**
   `vercel login`

7. **Deploy**
   `vercel --prod`

## License

This project is open-source and available under the MIT License.
