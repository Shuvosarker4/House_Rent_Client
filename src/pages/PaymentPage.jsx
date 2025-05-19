import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import authApiClient from "../services/auth_api_client";

const PaymentPage = () => {
  const navigate = useNavigate();
  const [bookingData, setBookingData] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const data = sessionStorage.getItem("bookingInfo");
    if (data) {
      setBookingData(JSON.parse(data));
    } else {
      navigate("/");
    }
  }, [navigate]);

  const handlePayment = async () => {
    setLoading(true);
    try {
      const response = await authApiClient.post("/payment/initiate/", {
        amount: bookingData.amount,
      });
      console.log(response.data);

      if (response.data.payment_url) {
        setLoading(false);
        window.location.href = response.data.payment_url;
      } else {
        alert("Payment failed");
      }
    } catch (error) {
      console.log(error);
    }
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
        disabled={loading}
        className={`w-full py-2 text-xl font-semibold border border-[#fd390e] transition-all duration-300 rounded-md
            ${
              loading
                ? "bg-gray-300 text-gray-500 cursor-not-allowed"
                : "text-[#fd390e] hover:bg-[#fd390e] hover:text-white"
            }`}
      >
        {loading ? "Processing..." : `Pay $${amount}`}
      </button>
    </div>
  );
};

export default PaymentPage;
