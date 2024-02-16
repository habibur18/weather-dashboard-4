import { useContext } from "react";
import { FavouriteContext, LocationContext } from "../../context";

interface LocationDetails {
  location: string;
  latitude: number;
  longitude: number;
}

export default function FavoriteListModal() {
  const { favourite } = useContext(FavouriteContext);
  const { setSelectedLocation } = useContext(LocationContext);

  // The type of `item` inferred by TypeScript will now be `LocationDetails`
  const changeLocation = (item: LocationDetails) => {
    setSelectedLocation({ ...item }); // Remove unnecessary latitude and longitude assignment
    console.log(item);
  };

  return (
    <div className="max-w-xs py-4 bg-white rounded-md border-gray-500 absolute right-0 top-16 text-black shadow-lg ">
      <h3 className="text-lg font-bold px-4">Favourite Locations</h3>
      <ul className="space-y-2 mt-4 *:py-2 *:px-4 *:cursor-pointer">
        {favourite.length > 0 ? (
          favourite.map((item) => (
            <li onClick={() => changeLocation(item)} key={item.location} className="hover:bg-gray-200">
              {item.location}
            </li>
          ))
        ) : (
          <li>No favourite locations</li>
        )}
      </ul>
    </div>
  );
}
