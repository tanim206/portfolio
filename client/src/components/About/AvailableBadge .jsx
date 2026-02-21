import { GiFlatStar } from "react-icons/gi";

const AvailableBadge = () => {
  return (
    <div className="mb-4 flex">
      <p className="rounded-full flex items-center gap-3 border py-1 px-6 sm:px-10 border-[#0b4357] bg-[#0e2638] text-[#64e2f5]">
        <GiFlatStar />
        <span>About me</span>
      </p>
    </div>
  );
};

export default AvailableBadge;