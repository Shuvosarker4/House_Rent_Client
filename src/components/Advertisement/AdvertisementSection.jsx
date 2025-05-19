import Advertisement from "./Advertisement";
import ErrorAlert from "../ErrorAlert";
import useFetchAdvertise from "../hooks/useFetchAdvertise";

const AdvertisementSection = () => {
  const { advertisements, isLoading, error } = useFetchAdvertise();
  return (
    <div className="p-5">
      <h1 className=" mb-6 text-center text-3xl sm:text-5xl font-bold text-[#091E22]">
        Featured More Properties
      </h1>
      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner loading-xl text-[#fd390e]"></span>
        </div>
      )}

      {error && <ErrorAlert error={error} />}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-4">
        {!isLoading &&
          !error &&
          advertisements.length > 0 &&
          advertisements.map((ads, idx) => (
            <Advertisement key={idx} ads={ads} />
          ))}

        {!isLoading && !error && advertisements.length === 0 && (
          <h1 className=" text-2xl sm:text-3xl font-bold text-[#091E22]">
            No Advertisements Available
          </h1>
        )}
      </div>
    </div>
  );
};

export default AdvertisementSection;
