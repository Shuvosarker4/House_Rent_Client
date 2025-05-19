import { Link } from "react-router-dom";

const ThankYouPage = () => {
  return (
    <div className="max-w-xl mx-auto p-6 mt-20 bg-white shadow-md rounded-xl text-center">
      <h1 className="text-4xl font-bold mb-4 text-[#fd390e]">Thank You!</h1>
      <p className="text-lg mb-6">
        Your booking has been successfully completed.
      </p>
      <Link
        to="/"
        className="inline-block px-6 py-3 border border-[#fd390e] text-[#fd390e] rounded-md hover:bg-[#fd390e] hover:text-white transition duration-300"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default ThankYouPage;
