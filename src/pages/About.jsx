import { motion } from "framer-motion";
import { Link } from "react-router";

const About = () => {
  return (
    <div className="bg-white text-gray-800 px-4 md:px-8 py-10 md:py-20">
      {/* Hero Section */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center mb-12"
      >
        <h1 className="text-4xl md:text-5xl font-bold text-[#fd390e] mb-4">
          About House Rent
        </h1>
        <p className="text-lg md:text-xl text-gray-600">
          Making house renting simple, secure, and accessible for everyone.
        </p>
      </motion.div>

      {/* Mission Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#fd390e] mb-4">
            Our Mission
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            We aim to connect tenants and property owners through a seamless,
            modern platform. Our mission is to provide a safe, easy-to-use, and
            efficient service for finding and listing rental properties.
          </p>
        </motion.div>
        <motion.img
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1570129477492-45c003edd2be"
          alt="Modern rental home"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
      </div>

      {/* How It Works Section */}
      <div className="max-w-6xl mx-auto mb-20">
        <h2 className="text-2xl font-semibold text-[#fd390e] mb-6 text-center">
          How It Works
        </h2>
        <div className="grid md:grid-cols-3 gap-8 text-center">
          {[
            {
              title: "1. Browse Listings",
              desc: "Find the perfect property from a curated list of verified rental options.",
            },
            {
              title: "2. Book a Viewing",
              desc: "Schedule a visit to explore the property in person or virtually.",
            },
            {
              title: "3. Secure Your Home",
              desc: "Finalize your booking with secure online payments and easy documentation.",
            },
          ].map((item, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.05 }}
              className="p-6 border rounded-md shadow-sm hover:shadow-lg transition duration-300"
            >
              <h3 className="font-bold text-xl text-[#fd390e] mb-2">
                {item.title}
              </h3>
              <p className="text-gray-700">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Why Choose Us Section */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center mb-20">
        <motion.img
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c"
          alt="Why choose us"
          className="rounded-lg shadow-lg w-full h-auto object-cover"
        />
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-2xl font-semibold text-[#fd390e] mb-4">
            Why Choose Us
          </h2>
          <p className="text-gray-700 text-lg leading-relaxed">
            House Rent stands out by offering a user-friendly interface, strict
            verification process for listings, and end-to-end support for both
            tenants and landlords. We are committed to innovation, security, and
            trust in every transaction.
          </p>
        </motion.div>
      </div>

      {/* Contact Section */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-6xl mx-auto text-center"
      >
        <h2 className="text-2xl font-semibold text-[#fd390e] mb-4">
          Get in Touch
        </h2>
        <p className="text-gray-700 mb-6">
          Have questions or need help? We're always here to support you.
        </p>
        <Link to="/contact">
          <button className="px-6 py-2 rounded-md bg-[#fd390e] text-white hover:bg-[#e2330e] transition">
            Contact Us
          </button>
        </Link>
      </motion.div>
    </div>
  );
};

export default About;
