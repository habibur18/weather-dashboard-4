// // useWeather.d.ts
// declare module "./useWeather.ts" {
//   export interface WeatherData {
//     location: string;
//     climate: string;
//     temperature: number;
//     maxTemperature: number;
//     minTemperature: number;
//     humidity: number;
//     cloudPercentage: number;
//     wind: {
//       speed: number;
//       deg: number;
//     };
//     time: number;
//     longitude: number;
//     latitude: number;
//   }

//   export interface LoadingState {
//     state: boolean;
//     message: string;
//   }

//   export interface WeatherError extends Error {}

//   export function useWeather(): {
//     weatherData: WeatherData;
//     loading: LoadingState;
//     error: WeatherError | null;
//   };
// }
