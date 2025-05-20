import React, { useState, useEffect } from "react";

const testimonials = [
  {
    id: 1,
    name: "Tania Akter",
    role: "Tenant, Mirpur",
    photo: "https://randomuser.me/api/portraits/women/68.jpg",
    feedback:
      "Finding a flat in Mirpur was so easy with this platform. The listings were up-to-date and the landlords were genuine. I moved in within a week!",
  },
  {
    id: 2,
    name: "Rezaul Karim",
    role: "Landlord, Uttara",
    photo: "https://randomuser.me/api/portraits/men/45.jpg",
    feedback:
      "I posted my apartment in Uttara and got 3 responses the same day. The entire process of screening and finalizing a tenant was seamless.",
  },
  {
    id: 3,
    name: "Farzana Yasmin",
    role: "Tenant, Dhanmondi",
    photo: "https://randomuser.me/api/portraits/women/21.jpg",
    feedback:
      "I was able to compare rent prices across Dhanmondi and quickly found a place that matched my budget and preferences. Highly recommended!",
  },
];

const Testimonials = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const { name, role, photo, feedback } = testimonials[current];

  return (
    <div className="py-8 bg-[#f9f9f9] transition-all duration-500">
      <div className="container mx-auto px-4 text-center max-w-xl">
        <h2 className=" mb-6 text-3xl sm:text-5xl text-center font-bold text-[#091E22]">
          What Our Clients Say
        </h2>
        <div className="bg-white rounded-lg shadow p-6 transition duration-500 ease-in-out">
          <p className="text-[#091E22] italic mb-6">{`“${feedback}”`}</p>
          <div className="flex justify-center items-center">
            <img
              src={photo}
              alt={name}
              className="w-12 h-12 rounded-full object-cover mr-4"
            />
            <div className="text-left">
              <p className="text-[#fd390e] font-semibold">{name}</p>
              <p className="text-[#091E22] text-sm">{role}</p>
            </div>
          </div>
        </div>
        {/* Manual Controls (Optional) */}
        <div className="flex justify-center mt-4 space-x-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              className={`w-3 h-3 rounded-full ${
                idx === current ? "bg-[#fd390e]" : "bg-gray-300"
              }`}
              onClick={() => setCurrent(idx)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
