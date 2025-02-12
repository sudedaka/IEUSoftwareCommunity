import React from 'react';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';
import ImageSlider from '../ImageSlider/ImageSlider';
import OurTeam from '../OurTeam/OurTeam';
import JoinUs from '../JoinUs/JoinUs';
import Feedback from '../Feedback/Feedback';
import ContactUs from '../ContactUs/ContactUs';

const Home = () => {
  return (
    <div id = "home">
      <ImageSlider autoPlay={true} interval={4000} />
      <JoinUs/>
      <OurTeam/>
      <Services />
      <AboutUs/>
      <Banner />
      <Feedback/>
      <ContactUs/>
    </div>
  );
};

export default Home;
