import React from 'react';
import Services from '../Services/Services';
import ClubInvitationBanner from '../ClubInvitationBanner/ClubInvitationBanner';
import AboutUs from '../AboutUs/AboutUs';
import ImageSlider from '../ImageSlider/ImageSlider';
import OurTeam from '../OurTeam/OurTeam';
import JoinUs from '../JoinUs/JoinUs';
import Feedback from '../Feedback/Feedback';
import ContactUs from '../ContactUs/ContactUs';
import Events from '../Events/Events';
const Home = () => {
  return (
    <div id = "home">
      <ImageSlider autoPlay={true} interval={4000} />
      <JoinUs/>
      <Events/>
      <OurTeam/>
      <Services />
      <AboutUs/>
      <ClubInvitationBanner />
      <Feedback/>
      <ContactUs/>
    </div>
  );
};

export default Home;
