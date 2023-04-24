import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";




const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};



function Services() {
  return (
    <div className="App">
      <section className="bg-white md:p-4 p-0 ">
        <section className="bg-gray-700 rounded-lg h-full pb-20 mb-20" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
          <Navbar imgSrc={"./img/logo.svg"} textColor={"text-black"} btnBgColor={"bg-gray-100"} btnTextColor={"text-blue-900"} hoverBtnBgColor={"text-gray-300"} hoverBtnTextColor={"text-gray-300"} />
          <div className="md:flex md:flex-wrap text-center bg-blue-200 rounded-3xl md:text-left all ign-center overflow-hidden mx-10">
            <div className="md:w-2/2 overflow-hidden text-white md:px-20 m-auto my-16 text-center flex justify-center">
              <h1 className="text-5xl font-semibold text-black  mb-6">

                <Typewriter
                  //@ts-ignore
                  class="typewrite"
                  options={{
                    strings: [
                      'Our Services',
                    ],
                    autoStart: true,
                    loop: true
                  }} />

              </h1>
              {/* <p className="mt-6 text-lg text-gray-300">Get your commissions immediately when you trade your giftcards with Boon. Pay your bills with Boon and experience swift result times.</p> */}
            </div>

          </div>









          {/* <div id="contain-circle">
            <img alt="" className="inline w-6 arrow anim" src="./img/icons/floating-icons/1.svg" />
            <img alt="" className="inline w-6 arrow-1 anim-1" src="./img/icons/floating-icons/2.svg" />
            <img alt="" className="inline w-6 arrow-2 anim-2" src="./img/icons/floating-icons/3.svg" />
            <img alt="" className="inline w-6 arrow-3 anim-3" src="./img/icons/floating-icons/4.svg" />
          </div> */}

        </section>
      </section>

      <WecetaCarousel />
      <Testimonials pt={"pt-64"} />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Services;
