import React from "react";
import BannerPng from "../../assets/banner2.svg";
import { FaUsers } from "react-icons/fa"; 
import { MdEvent } from "react-icons/md"; 
import { IoIosPaper } from "react-icons/io"; 
import { motion } from "framer-motion";

const ClubInvitationBanner = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            src={BannerPng}
            alt="Software Club Banner"
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
        {/* Banner Text */}
        <div className="flex flex-col justify-center">
          <div className="text-center md:text-left space-y-12">
            <motion.h1
              initial={{ opacity: 0, scale: 0.5 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 2 }}
              className="text-3xl md:text-4xl font-bold !leading-snug"
            >
              Join Our Software Club: Empowering Future Innovators
            </motion.h1>
            <div className="flex flex-col gap-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.2 }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <FaUsers className="text-2xl" />
                <p className="text-lg">500+ Active Members</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.4 }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <MdEvent className="text-2xl" />
                <p className="text-lg">Seminars & Social Events</p>
              </motion.div>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 2, delay: 0.6 }}
                className="flex items-center gap-4 p-6 bg-[#f4f4f4] rounded-2xl hover:bg-white duration-300 hover:shadow-2xl"
              >
                <IoIosPaper className="text-2xl" />
                <p className="text-lg">Certificates for Participation</p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClubInvitationBanner;
