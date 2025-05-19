import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);

  useEffect(() => {
    const data = sessionStorage.getItem("bookingInfo");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handlePayment = () => {
    alert("Payment successful!");
    sessionStorage.removeItem("bookingInfo");
    navigate("/thank-you");
  };

  if (!bookingData) return <p className="text-center py-10">Loading...</p>;

  const { name, phone, address, message, amount } = bookingData;

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4 text-[#fd390e]">Confirm & Pay</h2>

      <div className="mb-6">
        <p>
          <strong>Name:</strong> {name}
        </p>
        <p>
          <strong>Phone:</strong> {phone}
        </p>
        <p>
          <strong>Address:</strong> {address}
        </p>
        <p>
          <strong>Message:</strong> {message}
        </p>
        <p className="text-xl font-bold mt-4">
          Total Amount: <span className="text-[#fd390e]">৳{amount}</span>
        </p>
      </div>

      <button
        onClick={handlePayment}
        className="w-full py-2 text-xl font-semibold border border-[#fd390e] text-[#fd390e] hover:bg-[#fd390e] hover:text-white transition-all duration-300 rounded-md"
      >
        Pay Now
      </button>
    </div>
  );
};

export default PaymentPage;
