const data = [
  {
    location: "London",
    latitude: 51.5074,
    longitude: -0.1278,
  },
  {
    location: "New York City",
    latitude: 40.7128,
    longitude: -74.006,
  },
  {
    location: "Tokyo",
    latitude: 35.6895,
    longitude: 139.6917,
  },
  {
    location: "Paris",
    latitude: 48.8566,
    longitude: 2.3522,
  },
  {
    location: "Sydney",
    latitude: -33.8688,
    longitude: 151.2093,
  },
  {
    location: "Los Angeles",
    latitude: 34.0522,
    longitude: -118.2437,
  },
  {
    location: "Moscow",
    latitude: 55.7558,
    longitude: 37.6176,
  },
  {
    location: "Beijing",
    latitude: 39.9042,
    longitude: 116.4074,
  },
  {
    location: "Rio de Janeiro",
    latitude: -22.9068,
    longitude: -43.1729,
  },
  {
    location: "Cairo",
    latitude: 30.0444,
    longitude: 31.2357,
  },
  {
    location: "Istanbul",
    latitude: 41.0082,
    longitude: 28.9784,
  },
  {
    location: "Mexico City",
    latitude: 19.4326,
    longitude: -99.1332,
  },
  {
    location: "Berlin",
    latitude: 52.52,
    longitude: 13.405,
  },
  {
    location: "Bangkok",
    latitude: 13.7563,
    longitude: 100.5018,
  },
  {
    location: "Mumbai",
    latitude: 19.076,
    longitude: 72.8777,
  },
  {
    location: "Rome",
    latitude: 41.9028,
    longitude: 12.4964,
  },
  {
    location: "Seoul",
    latitude: 37.5665,
    longitude: 126.978,
  },
  {
    location: "Madrid",
    latitude: 40.4168,
    longitude: -3.7038,
  },
  {
    location: "Toronto",
    latitude: 43.6511,
    longitude: -79.347,
  },
  {
    location: "Singapore",
    latitude: 1.3521,
    longitude: 103.8198,
  },
  {
    location: "Dubai",
    latitude: 25.2769,
    longitude: 55.2962,
  },
  {
    location: "Hong Kong",
    latitude: 22.3193,
    longitude: 114.1694,
  },
  {
    location: "Vienna",
    latitude: 48.2082,
    longitude: 16.3738,
  },
  {
    location: "Athens",
    latitude: 37.9838,
    longitude: 23.7275,
  },
  {
    location: "San Francisco",
    latitude: 37.7749,
    longitude: -122.4194,
  },
  {
    location: "Lisbon",
    latitude: 38.7223,
    longitude: -9.1393,
  },
  {
    location: "Amsterdam",
    latitude: 52.3676,
    longitude: 4.9041,
  },
  {
    location: "Stockholm",
    latitude: 59.3293,
    longitude: 18.0686,
  },
  {
    location: "Kuala Lumpur",
    latitude: 3.139,
    longitude: 101.6869,
  },
  {
    location: "Hanoi",
    latitude: 21.0278,
    longitude: 105.8342,
  },
  {
    location: "Prague",
    latitude: 50.0755,
    longitude: 14.4378,
  },
  {
    location: "Buenos Aires",
    latitude: -34.6037,
    longitude: -58.3816,
  },
  {
    location: "Budapest",
    latitude: 47.4979,
    longitude: 19.0402,
  },
  {
    location: "Warsaw",
    latitude: 52.2297,
    longitude: 21.0122,
  },
  {
    location: "Copenhagen",
    latitude: 55.6761,
    longitude: 12.5683,
  },
  {
    location: "Dublin",
    latitude: 53.3498,
    longitude: -6.2603,
  },
  {
    location: "Bangalore",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  {
    location: "Osaka",
    latitude: 34.6937,
    longitude: 135.5023,
  },
  {
    location: "Munich",
    latitude: 48.1351,
    longitude: 11.582,
  },
  {
    location: "Saint Petersburg",
    latitude: 59.9343,
    longitude: 30.3351,
  },
  {
    location: "Brussels",
    latitude: 50.8503,
    longitude: 4.3517,
  },
  {
    location: "Zurich",
    latitude: 47.3769,
    longitude: 8.5417,
  },
  {
    location: "Toronto",
    latitude: 43.6532,
    longitude: -79.3832,
  },
  {
    location: "Edinburgh",
    latitude: 55.9533,
    longitude: -3.1883,
  },
  {
    location: "Vancouver",
    latitude: 49.2827,
    longitude: -123.1207,
  },
  {
    location: "Washington, D.C.",
    latitude: 38.9072,
    longitude: -77.0369,
  },
  {
    location: "Montreal",
    latitude: 45.5017,
    longitude: -73.5673,
  },
  {
    location: "Manchester",
    latitude: 53.4808,
    longitude: -2.2426,
  },
  {
    location: "Barcelona",
    latitude: 41.3851,
    longitude: 2.1734,
  },
  {
    location: "Melbourne",
    latitude: -37.8136,
    longitude: 144.9631,
  },
  {
    location: "Lyon",
    latitude: 45.764,
    longitude: 4.8357,
  },
  {
    location: "Florence",
    latitude: 43.7696,
    longitude: 11.2558,
  },
];

function getLocationData() {
  return data;
}
async function getLocationByName(location: string) {
  // if (!location) return null;
  // const filtered = data.filter((item) => item.location.toLowerCase() === location.toLowerCase());
  // if (filtered.length > 0) {
  //   return filtered[0];
  // } else {
  //   const defaultLocation = {
  //     location: "",
  //     latitude: 0,
  //     longitude: 0,
  //   };
  //   return defaultLocation;
  // }
  const res = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${import.meta.env.VITE_WEATHER_API_KEY}&units=metric`);
  const data = await res.json();
  const locationDetails = {
    location: data?.name,
    latitude: data?.coord?.lat,
    longitude: data?.coord?.lon,
  };
  return locationDetails;
}
export { getLocationByName, getLocationData };
