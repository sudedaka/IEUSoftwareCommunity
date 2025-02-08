import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { motion } from "framer-motion";

import member1 from "../../assets/members/idil.png";
import member2 from "../../assets/members/sezin.jpeg";
import member3 from "../../assets/members/umit.jpeg";
import member4 from "../../assets/members/zehra.jpeg";
import member5 from "../../assets/members/eray.jpeg";
import member6 from "../../assets/members/sude.png";
import member7 from "../../assets/members/efecaliskan.jpeg";
import member8 from "../../assets/members/onat.png";
import member9 from "../../assets/members/ramazan.jpeg";
import member10 from "../../assets/members/efe_sonmez.jpg";

const teamMembers = [
  { id: 1, name: "İdil Buse Zengin", position: "President", image: member1 },
  { id: 2, name: "Sezin Kızılcık", position: "Vice President", image: member2 },
  { id: 3, name: "Ümit Can Altundağ", position: "Audit Committee", image: member3 },
  { id: 4, name: "Zehra Tilki", position: "Audit Committee", image: member4 },
  { id: 5, name: "Eray Kaytancı", position: "Career Development", image: member5 },
  { id: 6, name: "Sude Teslime Daka", position: "Career Development", image: member6 },
  { id: 7, name: "Efe Çalışkan", position: "Career Development", image: member7 },
  { id: 8, name: "Onat Erdem Muratlı", position: "Social Event", image: member8 },
  { id: 9, name: "Ramazan Karakaş", position: "Social Event", image: member9 },
  { id: 10, name: "Efe Sönmez", position: "Social Event", image: member10 },
];

const OurTeam = () => {
  return (
    <section className="py-20 bg-gray-100" id="our-team">
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold mb-8">Meet Our Team</h2>

        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          navigation={{
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
          }}
          pagination={{
            clickable: true,
            renderBullet: (index, className) => (
              `<span class="${className} swiper-pagination-bullet"></span>`
            ),
          }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          className="w-full max-w-4xl mx-auto"
        >
          {teamMembers.map((member) => (
            <SwiperSlide key={member.id} className="p-4">
              <motion.div
                className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center"
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, ease: "easeOut" }}
              >
                <motion.img
                  src={member.image}
                  alt={member.name}
                  className="w-40 h-40 rounded-full object-cover mb-4"
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                />
                <motion.h3
                  className="text-xl font-semibold"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {member.name}
                </motion.h3>
                <motion.p
                  className="text-gray-600"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                >
                  {member.position}
                </motion.p>
              </motion.div>
            </SwiperSlide>
          ))}

          {/* Swiper Ok Düğmeleri */}
          <div className="swiper-button-next absolute top-1/2 right-4 transform -translate-y-1/2 text-[#f08127] hover:text-[#00bcd4] cursor-pointer"></div>
          <div className="swiper-button-prev absolute top-1/2 left-4 transform -translate-y-1/2 text-[#f08127] hover:text-[#00bcd4] cursor-pointer"></div>
        </Swiper>
      </div>

      {/* Pagination (sayfa gezintisi) stilini değiştirme */}
      <style jsx>{`
        .swiper-pagination-bullet {
          background-color: #bbb; /* İnaktif durum rengi */
          transition: background-color 0.3s;
        }

        .swiper-pagination-bullet-active {
          background-color:#f08127; /* Aktif durum rengi */
        }

        .swiper-pagination-bullet:hover {
          background-color: #00bcd4; /* Hover durumu */
        }
      `}</style>
    </section>
  );
};

export default OurTeam;
