import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";



function About() {
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
                      'About Us'
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

        <div className=" grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-0 mt-0 px-6 md:px-0 ">

          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl transform transition duration-500 ">
            <div className="md:px-24 py-16 flex flex-col pt-10">
              <div className="md:my-2 mt-16  text-center  overflow-hidden flex justify-center" style={{ backgroundImage: 'url("./assets/background/Pattern4.svg")' }}>
                {/* <img alt="" className="inline w-2/3 rounded-full" src="./img/large/100guarantee-300x280-1-(1).svg" /> */}
                <div className='md:w-4/6 m-auto'>
                  <p className=' mb-6'>
                    Our aim is to sanitize the protein value chain in Africa using class A abattoirs via our protein trail technology, guaranteeing traceability and thereby increasing corporate investments in class A slaughterhouses on the continent.
                    <br /> <br />
                    Weceta is a first-of-its-kind agritech startup in Nigeria We are equiped with technologies and infrastructures to facilitate the traceability of locally sourced meat (incuding fish and other kind of seafood) from farm to fork.
                    <br /> <br />
                    Our effort enable the standardization of food/products tracking during the production and distribution within first class supply chain of meats in Nigeria
                    <br /> <br />
                    With the exclusive right to operate our fully patented technology (Protein Trail) across the country, our solution is an effective and seamless monitoring process for stakeholders and vetrinary authorities in each state, government inspectors, meet distributors, meat recipients (food business, etc), and end consumers.


                  </p>
                </div>

              </div>
            </div>
          </div>
          {/* Card 1 */}
          {/* <div className="flex flex-col rounded-3xl bg-transparent md:d-none">
            <div className="p-0 flex flex-col pt-0">
              <img alt="" className="inline w-6/6" src="./img/large/Beef-Meat-Transparent-PNG-2.svg" />
            </div>
          </div> */}
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
<Testimonials pt={"pt-64"} />

      <br />
      <br />
      <Footer />
    </div>
  );
}
export default About;
