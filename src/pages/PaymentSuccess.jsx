import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";

const PaymentSuccess = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="min-h-[80vh] flex items-center justify-center bg-white px-4"
    >
      <div className="max-w-md w-full bg-white border border-gray-200 shadow-lg rounded-2xl p-8 text-center">
        <motion.div
          initial={{ scale: 0.6 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.2 }}
          className="flex justify-center mb-6"
        >
          <CheckCircle className="text-green-500 w-16 h-16" />
        </motion.div>

        <h2 className="text-2xl font-bold text-gray-800 mb-2">
          Payment Successful!
        </h2>
        <p className="text-gray-600 mb-6">
          Thank you for your purchase. Your transaction was completed
          successfully.
        </p>

        <Link
          to="/dashboard"
          className="inline-block bg-[#fd390e] hover:bg-[#e03100] text-white text-sm font-medium px-5 py-2.5 rounded-lg transition duration-300"
        >
          View Orders
        </Link>
      </div>
    </motion.div>
  );
};

export default PaymentSuccess;
