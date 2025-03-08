import React, { useState } from "react";
import BannerPng from "../../assets/contactus.svg"; 
import { motion } from "framer-motion"; 
import { FaSmile } from "react-icons/fa";

const Feedback = () => {
  const [status, setStatus] = useState(""); 
  const [message, setMessage] = useState(""); 

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
 
    formData.append("entry.1519331804", message); 

    try {
      await fetch(
        "https://docs.google.com/forms/d/e/1FAIpQLSdLY0DXjcZxnx8sVKyEzHLGgxDmWEQ1mGO-d9xXVhyPDe5bVg/formResponse", 
        {
          method: "POST",
          body: formData,
          mode: "no-cors", 
        }
      );

      setStatus("Message sent successfully! 🎉"); 
      setMessage(""); 

    } catch (error) {
      setStatus("An error occurred, please try again. 😢");
    }
  };

  return (
    <section id="feedback">
      <div className="container py-14 md:py-20 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12 space-y-6 md:space-y-0 md:items-center">
        
        {/* Banner Text and Form */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex flex-col justify-start text-left w-full md:w-1/2"
        >
          <div className="space-y-4 lg:max-w-[400px] mx-auto md:mx-0">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              We Value Your <span className="text-[#f08127] underline">Suggestions</span>
            </h1>
            <p className="text-dark2 text-base md:text-lg">
              Share your thoughts with us. Your feedback helps us grow!
            </p>
          </div>

          {/* Contact Form */}
          <div className="w-full max-w-lg mx-auto p-6 bg-white shadow-lg rounded-lg mt-6 md:mt-10">
            <form
              onSubmit={handleSubmit}
              method="POST"
              name="contact"
              className="flex flex-col gap-4"
            >
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Your Suggestions"
                required
                className="p-3 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500"
              />
              <button
                type="submit"
                className="bg-[#f08127] text-white py-2 rounded-md hover:bg-secondary duration-200 transition-all shadow-md"
              >
                Send <FaSmile className="inline ml-2" />
              </button>
            </form>
            {status && (
              <p className="mt-3 text-center text-gray-700 font-medium">{status}</p>
            )}
          </div>
        </motion.div>

        {/* Banner Image */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 2, ease: "easeOut" }}
          className="flex justify-center items-center"
        >
          <img
            src={BannerPng}
            alt="Feedback Banner"
            className="w-[280px] md:w-[350px] object-cover drop-shadow-md"
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Feedback;
