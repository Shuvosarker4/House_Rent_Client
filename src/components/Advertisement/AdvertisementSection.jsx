import { useState } from "react";
import Advertisement from "./Advertisement";
import ErrorAlert from "../ErrorAlert";
import useFetchAdvertise from "../hooks/useFetchAdvertise";

const AdvertisementSection = () => {
  const { advertisements, isLoading, error } = useFetchAdvertise();
  const [visibleCount, setVisibleCount] = useState(6);
  const isAllVisible = visibleCount >= advertisements.length;

  const handleToggle = () => {
    if (isAllVisible) {
      setVisibleCount(6); // Show less
    } else {
      setVisibleCount((prev) => prev + 6); // Show more
    }
  };

  return (
    <div className="p-5">
      <h1 className=" text-center text-3xl sm:text-5xl font-bold text-[#091E22]">
        Our Featured Properties
      </h1>

      {isLoading && (
        <div className="flex justify-center items-center py-10">
          <span className="loading loading-spinner loading-xl text-[#fd390e]"></span>
        </div>
      )}

      {error && <ErrorAlert error={error} />}

      <div className="grid grid-cols-1 mt-12 sm:grid-cols-2 lg:grid-cols-3 gap-6 place-items-center my-4">
        {!isLoading &&
          !error &&
          advertisements
            .slice(0, visibleCount)
            .map((ads, idx) => <Advertisement key={idx} ads={ads} />)}

        {!isLoading && !error && advertisements.length === 0 && (
          <h1 className="text-2xl sm:text-3xl font-bold text-[#091E22]">
            No Advertisements Available
          </h1>
        )}
      </div>

      {/* Toggle Button */}
      {!isLoading && !error && advertisements.length > 6 && (
        <div className="text-center mt-6">
          <button
            onClick={handleToggle}
            className="px-6 py-2 bg-[#fd390e] text-white rounded-md font-semibold hover:bg-[#e6360c] transition duration-200"
          >
            {isAllVisible ? "Show Less" : "Show More"}
          </button>
        </div>
      )}
    </div>
  );
};

export default AdvertisementSection;
