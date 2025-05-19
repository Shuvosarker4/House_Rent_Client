import { useNavigate, useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import apiClient from "../services/api-client";

const BookingPage = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const [amount, setAmount] = useState(null);

  // Fetch the product to get price
  useEffect(() => {
    apiClient
      .get(`/advertisements/${productId}/`)
      .then((res) => {
        const price = parseFloat(res.data.price);
        setAmount(price); // Save price as amount
      })
      .catch((err) => {
        console.error("Failed to fetch product", err);
      });
  }, [productId]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    const bookingData = {
      ...data,
      productId,
      amount, // include amount in the booking info
    };

    sessionStorage.setItem("bookingInfo", JSON.stringify(bookingData));
    navigate("/payment");
  };

  return (
    <div className="max-w-xl mx-auto p-6 mt-10 bg-white shadow-md rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Booking Information</h2>

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("name", { required: "Name is required" })}
          placeholder="Your Name"
          className="input input-bordered w-full mb-2"
        />
        {errors.name && (
          <p className="text-red-500 text-sm mb-2">{errors.name.message}</p>
        )}

        <input
          {...register("phone", { required: "Phone number is required" })}
          placeholder="Phone Number"
          className="input input-bordered w-full mb-2"
        />
        {errors.phone && (
          <p className="text-red-500 text-sm mb-2">{errors.phone.message}</p>
        )}

        <input
          {...register("address", { required: "Address is required" })}
          placeholder="Your Address"
          className="input input-bordered w-full mb-2"
        />
        {errors.address && (
          <p className="text-red-500 text-sm mb-2">{errors.address.message}</p>
        )}

        <textarea
          {...register("message", { required: "Message is required" })}
          placeholder="Additional Message"
          className="textarea textarea-bordered w-full mb-3"
        />
        {errors.message && (
          <p className="text-red-500 text-sm mb-2">{errors.message.message}</p>
        )}

        <button
          type="submit"
          disabled={amount === null}
          className="w-full py-2 text-xl font-semibold border border-[#fd390e] text-[#fd390e] hover:bg-[#fd390e] hover:text-white transition-all duration-300 rounded-md"
        >
          {amount !== null ? `Proceed to Payment ($${amount})` : "Loading..."}
        </button>
      </form>
    </div>
  );
};

export default BookingPage;
