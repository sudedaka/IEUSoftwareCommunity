import React from "react";
import { motion } from "framer-motion";

const AboutUsData = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "Students whose aim is to learn software or improve their current knowledge in this field; to gain software awareness both theoretically and practically, together with dynamic work teams, to bring together our members with experts in their fields, to transfer their experience and work experiences, to be an intermediary for our members in finding internship and job opportunities, and to carry out all kinds of activities that support their personal development in the socio-cultural sense, and to provide motivation by raising their goals to the highest.",
    delay: 0.2,
    direction: "left", // Soldan gelsin
  },
  {
    id: 2,
    title: "Our Vision",
    description:
      "To create a bridge between business life and IEU Software Community, while supporting both our community and our members to take part in all kinds of activities in the software world that is advancing day by day, and to be a community that supports our members with training and contributes to their academic development by following the developing technology together with these technologies and developments.",
    delay: 0.3,
    direction: "right", // Sağdan gelsin
  },
];

const SlideUp = (delay, direction) => ({
  initial: {
    opacity: 0,
    x: direction === "left" ? -100 : 100, // Soldan -100, sağdan 100
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 2,  // 2 saniye süresince animasyon
      delay: delay,
      ease: "easeInOut",
    },
  },
});

const AboutUs = () => {
  return (
    <section id="about-us" className="bg-white py-20">
      <div className="container">
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-left pb-16"
        >
          <h1 className="text-4xl font-bold">About Us</h1>
          <p className="text-lg text-dark2 mt-4">
            Learn more about our mission and vision at IEU Software Community.
          </p>
        </motion.div>

        {/* Feature Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {AboutUsData.map((feature) => (
            <motion.div
              key={feature.id}
              variants={SlideUp(feature.delay, feature.direction)}
              initial="initial"
              animate="animate"
              className="bg-[#f4f4f4] p-6 rounded-2xl flex flex-col justify-between items-center hover:bg-secondary hover:text-white hover:scale-105 duration-300 hover:shadow-xl h-full"
            >
              <h2 className="text-xl font-semibold">{feature.title}</h2>
              <p className="text-lg mt-3 text-left flex-grow">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
