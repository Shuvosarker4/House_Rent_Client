import { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import apiClient from "../services/api-client";
import imageUrl from "../assets/images/slide_1.jpeg";
import useAuthContext from "../components/hooks/useAuthContext";
import AdvertisementSection from "../components/Advertisement/AdvertisementSection";

const ProductDetails = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(false);
  const { productId } = useParams();
  const { user } = useAuthContext();

  useEffect(() => {
    setLoading(true);
    apiClient
      .get(`/advertisements/${productId}/`)
      .then((res) => {
        setProduct(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [productId]);

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!product) return <p className="text-center py-10">Product not found.</p>;

  const { title, location, price, description, category } = product;

  return (
    <div>
      <div className="max-w-5xl mx-auto p-6 my-8 bg-white rounded-2xl shadow-md mt-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
          <img
            src={imageUrl}
            alt={title}
            className="rounded-xl w-full h-60 md:h-[28rem] object-cover"
          />

          <div className="flex flex-col justify-between h-60 md:h-[28rem]">
            <div>
              <h2 className="text-3xl font-bold mb-2">{title}</h2>
              <p className="text-xl text-gray-600 mb-2">Location:{location}</p>
              <p className="text-xl font-bold text-blue-600 mb-2">
                ${price} / month
              </p>
              <p className="text-xl font-semibold text-green-600 mb-2">
                Category: {category}
              </p>
              <p className="text-gray-700 mb-4">{description}</p>
            </div>

            {user ? (
              <Link
                to={`/booking/${productId}`}
                className="btn text-xl border-[#fd390e] text-[#fd390e] hover:bg-[#fd390e] hover:text-white transition-all duration-300 text-center w-full block"
              >
                BOOK NOW
              </Link>
            ) : (
              <Link
                to="/login"
                className="btn text-xl border-[#fd390e] text-[#fd390e] hover:bg-[#fd390e] hover:text-white transition-all duration-300 text-center w-full block"
              >
                LOGIN BEFORE BOOKING
              </Link>
            )}
          </div>
        </div>
      </div>
      <AdvertisementSection />
    </div>
  );
};

export default ProductDetails;
