import React from 'react';
import Hero from '../Hero/Hero';
import Services from '../Services/Services';
import Banner from '../Banner/Banner';
import AboutUs from '../AboutUs/AboutUs';

const Home = () => {
  return (
    <div id = "home">
      <Hero />
      <Services />
      <AboutUs/>
      <Banner />
    </div>
  );
};

export default Home;
