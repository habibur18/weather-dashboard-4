import favourite from "../../assets/heart.svg";
export default function Favourite({ onShowModal }) {
  return (
    <div onClick={onShowModal} className="p-2 hover:bg-black/30 cursor-pointer flex gap-2 items-center rounded-md transition-all">
      <img src={favourite} alt="" />
      <span>Favourite Locations</span>
    </div>
  );
}
