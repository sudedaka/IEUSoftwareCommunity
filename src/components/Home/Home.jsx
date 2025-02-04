import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ImageSlider from '../ImageSlider/ImageSlider';
import OurTeam from '../OurTeam/OurTeam';
const Home = () => {
  return (
    <div id = "home">
      <ImageSlider autoPlay={true} interval={4000} />
      <OurTeam/>
      <Services />
      <AboutUs/>
      <Banner />
    </div>
  );
};

export default Home;
