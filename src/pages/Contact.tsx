import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";
import { routesConstants } from '../utility/routesConstants';



const contentStyle: React.CSSProperties = {
  height: '160px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};
function Contact() {
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
                      'Contact Us',
                      'Send us a message',
                      'Make inquiry',
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

      <section className={` py-0 md:px-0 m-auto`} style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-0 mt-0 px-6 md:px-0 ">

          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl transform transition duration-500 ">
            <div className="md:px-24 py-16 flex flex-col pt-10">
              <div className="md:my-2 mt-16  text-center  overflow-hidden flex justify-center" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
                {/* <img alt="" className="inline w-2/3 rounded-full" src="./img/large/100guarantee-300x280-1-(1).svg" /> */}
                <div className='md:w-4/6'>
                  <p className='font-semibold text-xl mb-6'>
                    Have Question
                  </p>
                  <p className='font-bold text-5xl mb-6'>
                    Write us a message
                  </p>

                              <a href={routesConstants.EMAIL}>
                  <button className="mt-6 h-11 px-6 font-semibold rounded-md bg-yellow text-black text-md transform transition duration-500  hover:bg-blue-900 hover:text-white hover:border hover:border-white" type="submit">
                    Send us a message
                  </button>
                  </a>
                </div>

              </div>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-transparent md:d-none">
            <div className="p-0 flex flex-col pt-0">
              <img alt="" className="inline w-6/6" src="./img/large/Beef-Meat-Transparent-PNG-2.svg" />
            </div>
          </div>
          {/* Card 1 */}
          {/* <div className="flex flex-col rounded-3xl bg-white transform transition duration-300 hover:bg-transparent hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10">
              <img alt="" className="inline w-10" src="./assets/icons/EasyIcon.svg" />
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto">Consumer Confidence</h4>
              <p className="text-blue-300 mt-2 m-auto">Enhance the auditing and investigation processes during HACCP-related investigations.</p>
            </div>
          </div> */}
        </div>

      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Contact;
