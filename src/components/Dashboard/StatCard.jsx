import { motion } from "framer-motion";

const StatCard = ({ icon: Icon, title, value }) => {
  return (
    <motion.div
      whileHover={{
        scale: 1.04,
        boxShadow: "0 8px 20px rgba(253, 57, 14, 0.15)",
      }}
      className="card bg-white shadow-sm hover:shadow-md transition-shadow duration-300 cursor-pointer rounded-lg"
    >
      <div className="card-body p-5 sm:p-6">
        <div className="flex items-center gap-3">
          <div className="bg-[#fd390e]/20 p-2 rounded-full">
            <Icon className="h-5 w-5 text-[#fd390e]" />
          </div>
          <h3 className="text-sm font-semibold text-gray-700">{title}</h3>
        </div>
        <motion.p
          initial={{ opacity: 0, y: 6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-4 text-3xl font-extrabold text-gray-900"
        >
          {value}
        </motion.p>
      </div>
    </motion.div>
  );
};

export default StatCard;
