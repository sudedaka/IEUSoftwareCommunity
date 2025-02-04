import React from 'react';
import ReactSlick from 'react-slick';
import { motion } from 'framer-motion';
import Slider1 from '../../assets/slider1.png';
import Slider2 from '../../assets/slider2.png';
import Slider3 from '../../assets/slider3.jpg';
import Slider4 from '../../assets/slider4.png';
import Slider5 from '../../assets/slider5.png';

// Animasyon fonksiyonu
const FadeUp = (delay) => {
  return {
    initial: {
      opacity: 0,
      y: 50,
    },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        duration: 0.5,
        delay: delay,
        ease: "easeInOut",
      },
    },
  };
};

const ImageSlider = () => {
  const settings = {
    dots: true,           // Dots göstergesini aktif tutuyoruz
    infinite: true,       // Sonsuz kaydırma
    speed: 500,           // Kaydırma hızı
    slidesToShow: 1,      // Her seferinde bir slayt göster
    slidesToScroll: 1,    // Her kaydırmada 1 slayt
    autoplay: true,       // Otomatik kaydırma aktif
    autoplaySpeed: 3000,  // Kaydırma hızı (3 saniye)
    arrows: false,        // Kullanıcı okları ile kaydırma yapmasın
    draggable: false,     // Kullanıcı kaydırmasın
    pauseOnHover: false,  // Fareyi slider üzerinde tutmak kaydırmayı durdurmasın
    centerMode: false,    // Ortada hizalama kapalı
    focusOnSelect: false, // Seçmeye dayalı odaklanma kapalı
  };

  return (
    <section className="slider-container p-0 m-0">
      <ReactSlick {...settings}>
        {/* Slider Item 1 */}
        <div className="slick-slide mx-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Slider1}
            alt="Slide 1"
            className="w-[350px] xl:w-[500px] h-auto mx-auto relative z-10 drop-shadow-md"
          />
        </div>
        {/* Slider Item 2 */}
        <div className="slick-slide mx-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Slider2}
            alt="Slide 2"
            className="w-[350px] xl:w-[500px] h-auto mx-auto relative z-10 drop-shadow-md"
          />
        </div>
        {/* Slider Item 3 */}
        <div className="slick-slide mx-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Slider3}
            alt="Slide 3"
            className="w-[350px] xl:w-[500px] h-auto mx-auto relative z-10 drop-shadow-md"
          />
        </div>
        {/* Slider Item 4 */}
        <div className="slick-slide mx-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Slider4}
            alt="Slide 4"
            className="w-[350px] xl:w-[500px] h-auto mx-auto relative z-10 drop-shadow-md"
          />
        </div>
        {/* Slider Item 5 */}
        <div className="slick-slide mx-2">
          <motion.img
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeInOut" }}
            src={Slider5}
            alt="Slide 5"
            className="w-[350px] xl:w-[500px] h-auto mx-auto relative z-10 drop-shadow-md"
          />
        </div>
      </ReactSlick>
    </section>
  );
};

export default ImageSlider;
