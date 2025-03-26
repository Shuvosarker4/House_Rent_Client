import Advertisement from "./Advertisement";

const AdvertisementSection = () => {
  return (
    <div className="p-5">
      <h1 className=" text-3xl sm:text-5xl font-bold text-[#091E22]">
        Featured Properties
      </h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center m-4">
        <Advertisement />
      </div>
    </div>
  );
};

export default AdvertisementSection;
