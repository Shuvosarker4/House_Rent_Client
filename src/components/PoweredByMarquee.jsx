import React from "react";
import Marquee from "react-fast-marquee";
import Bkash from "../../src/assets/logos/bkash.png";
import Nogad from "../../src/assets/logos/Nagad-Logo.wine.svg";
import SSL from "../../src/assets/logos/SSl.png";
import NameCheap from "../../src/assets/logos/Namecheap-Logo.wine.png";
import Meta from "../../src/assets/logos/Mets.png";
import FireBase from "../../src/assets/logos/Firebase.svg";

const PoweredByMarquee = () => {
  return (
    <div className="py-4">
      <div className="container mx-auto px-4">
        <h2 className="mb-6 text-2xl sm:text-3xl text-center font-bold text-[#091E22]">
          Powered By
        </h2>
        <div className="rounded-lg shadow p-4">
          <Marquee pauseOnHover gradient={false} speed={40}>
            <img
              src={Bkash}
              alt="Bkash"
              className="h-20 sm:h-24 mx-6 sm:mx-8"
            />
            <img
              src={FireBase}
              alt="Firebase"
              className="h-10 sm:h-14 mx-6 sm:mx-8"
            />
            <img
              src={Nogad}
              alt="Nogad"
              className="h-20 sm:h-34 mx-6 sm:mx-8"
            />
            <img src={SSL} alt="Bkash" className="h-10 sm:h-14 mx-6 sm:mx-8" />
            <img
              src={NameCheap}
              alt="Namecheap"
              className="h-20 sm:h-34 mx-6 sm:mx-8"
            />
            <img src={Meta} alt="Meta" className="h-12 sm:h-18 mx-6 sm:mx-8" />
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default PoweredByMarquee;
