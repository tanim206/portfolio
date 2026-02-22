import { GiFlatStar } from "react-icons/gi";

const AvailableBadge = () => {
  return (
    <div className="mb-4 flex max-w-5xl mx-auto">
      <p className="rounded-full flex text-xs  items-center gap-3 border py-1 px-6 sm:px-10 border-black/10 bg-white text-gray-500">
        <GiFlatStar />
        <span>About me</span>
      </p>
    </div>
  );
};

export default AvailableBadge;