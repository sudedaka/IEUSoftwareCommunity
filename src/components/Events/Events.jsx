import React from 'react';
import { motion } from 'framer-motion';

const Events = () => {
  const event = {
    title: "Machine Learning Workshop by Burak Evrentuğ (Completed) ",
    date: "2025",
    description: "Join us for an exclusive workshop on Machine Learning, where Burak Evrentuğ will guide you through the latest advancements and practical applications.",
  };

  const cardVariants = {
    hidden: {
      opacity: 0,
      y: 50,
    },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 2,
        ease: 'easeInOut',
      },
    },
  };

  return (
    <section id="events" className="py-28 bg-white">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-10">
          Upcoming Event
        </h1>
        <motion.div
          variants={cardVariants}
          initial="hidden"
          animate="visible"
          className="max-w-3xl mx-auto bg-gray-100 shadow-lg rounded-xl p-6 md:p-8 border border-gray-200 transition-transform transform hover:scale-105 hover:shadow-2xl"
        >
          <h2 className="text-2xl font-semibold text-gray-900">{event.title}</h2>
          <p className="text-lg text-gray-600 mt-2">{event.date}</p>
          <p className="text-gray-700 mt-4">{event.description}</p>
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
