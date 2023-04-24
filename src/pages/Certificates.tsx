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
function Certificates() {
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
                      'Certificates',
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

        <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-16 px-6 md:px-16 ">
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 m-auto text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Abia-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 text-center">Abia State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Abuja-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Abuja State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Anambra-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Anambra State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Delta-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Delta State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Kaduna-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Kaduna State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Lagos-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Lagos State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Ondo-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Ondo State</h4>
            </div>
          </div>
          {/* Card 1 */}
          <div className="flex flex-col rounded-3xl bg-white transform transition duration-500 hover:bg-white hover:text-white border border-gray-200">
            <div className="p-6 flex flex-col pt-10 text-center">
              <div className='flex justify-center'>
                <img alt="" className="inline w-6/6" src="./img/certificates/Oyo-State.png" />
              </div>
              <h4 className="text-xl font-semibold text-blue-900 mt-5 m-auto text-center">Oyo State</h4>
            </div>
          </div>
        </div>


      </section>
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Certificates;
