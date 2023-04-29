import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";
import WhoWeAre from './components/WhoWeAre';



function About() {
  return (
    <div className="App">
      <Navbar />
      <br /><br /><br /><br /><br />
      <WhoWeAre />

      <br />
      <br />
      <Footer />
    </div>
  );
}
export default About;
