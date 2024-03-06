import { useContext, useState } from "react";
import search from "../../assets/search.svg";
import { LocationContext } from "../../context";
import { getLocationByName } from "../../data/location-data";
import { useDebounch } from "../../hoooks";
export default function Search() {
  const [searchTerm, setSearchTerm] = useState("");

  const { setSelectedLocation } = useContext(LocationContext);
  // const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  //   e.preventDefault();
  //   const fetchdLocation = getLocationByName(searchTerm);
  //   setSelectedLocation({ ...fetchdLocation });
  // };
  const doSearch = useDebounch((term: string) => {
    const fetchdLocation = getLocationByName(term);
    if (fetchdLocation && fetchdLocation.location && fetchdLocation.latitude !== undefined && fetchdLocation.longitude !== undefined) {
      setSelectedLocation(fetchdLocation);
    }
  }, 500);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setSearchTerm(value);
    doSearch(value);
  };
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <div className="flex items-center space-x-2 py-2 px-3 group focus-within:bg-black/30 transition-all border-b border-white/50 focus-within:border-b-0 focus-within:rounded-md">
        <input value={searchTerm} onChange={handleChange} className="bg-transparent  placeholder:text-white text-white w-full text-xs md:text-base outline-none border-none" type="search" placeholder="Search Location" required />
        <button type="submit">
          <img src={search} alt="" />
        </button>
      </div>
    </form>
  );
}
