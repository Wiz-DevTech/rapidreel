import React, { useState } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import toast from "react-hot-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.error("Please fill in all required fields");
      return;
    }
    toast.success("Message sent successfully! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  return (
    <>
      <Head>
        <title>Contact Us - RapidReel</title>
        <meta name="description" content="Get in touch with the RapidReel team" />
      </Head>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="flex flex-col items-center justify-center min-h-screen bg-white p-8"
      >
        <div className="max-w-2xl w-full">
          <h1 className="text-4xl font-bold mb-2 text-center text-gray-800">Contact Us</h1>
          <p className="text-center text-gray-600 mb-12">Have questions? We'd love to hear from you!</p>

          <form onSubmit={handleSubmit} className="bg-gray-50 p-8 rounded-lg shadow-md">
            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Name *</label>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Your name"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Email *</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="your@email.com"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Subject</label>
              <input
                type="text"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="What is this about?"
              />
            </div>

            <div className="mb-6">
              <label className="block text-gray-700 font-bold mb-2">Message *</label>
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-red-500"
                placeholder="Your message here..."
              />
            </div>

            <button
              type="submit"
              className="w-full bg-red-500 hover:bg-red-600 text-white font-bold py-3 px-8 rounded-lg transition"
            >
              Send Message
            </button>
          </form>

          <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Email</h3>
              <p className="text-gray-600">contact@wizdevtech.com</p>
            </div>
            <div className="text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-2">Follow Us</h3>
              <p className="text-gray-600">@RapidReelOfficial</p>
            </div>
          </div>

          <div className="mt-12 text-center">
            <a href="/" className="bg-gray-300 hover:bg-gray-400 text-gray-800 font-bold py-3 px-8 rounded-lg transition">
              Back to Home
            </a>
          </div>
        </div>
      </motion.div>
    </>
  );
};

export default Contact;
