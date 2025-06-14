import React, { useState } from "react";
import { motion } from "framer-motion";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success("Thank you! Your message has been sent 🎉");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <>
      <motion.div
        className="w-full max-w-xl mx-auto bg-blue-700 text-white p-8 rounded-xl shadow-lg"
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        <h2 className="text-2xl font-semibold text-center mb-6">
          Contact Us
        </h2>

        <form onSubmit={handleSubmit} className="space-y-6">
          {/* Name */}
          <div>
            <label htmlFor="name" className="block mb-2 text-lg">Name</label>
            <input
              type="text"
              name="name"
              id="name"
              required
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-blue-900 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block mb-2 text-lg">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              required
              value={formData.email}
              onChange={handleChange}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-blue-900 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:outline-none"
            />
          </div>

          {/* Message */}
          <div>
            <label htmlFor="message" className="block mb-2 text-lg">Message</label>
            <textarea
              name="message"
              id="message"
              rows="5"
              required
              value={formData.message}
              onChange={handleChange}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-blue-900 text-white placeholder-white/70 focus:ring-2 focus:ring-white focus:outline-none resize-none"
            />
          </div>

          {/* Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="w-full py-3 bg-white text-blue-700 font-semibold rounded-lg transition duration-300 hover:bg-gray-200"
          >
            Send Message
          </motion.button>
        </form>
      </motion.div>

      <ToastContainer position="top-right" autoClose={3000} />
    </>
  );
};

export default ContactForm;