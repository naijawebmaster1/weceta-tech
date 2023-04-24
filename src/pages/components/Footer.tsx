import React from 'react';
import { Link } from "react-router-dom";
import { routesConstants } from '../../utility/routesConstants';

function Footer() {
  return <>
    <footer className="bg-gray-700 text-black py-6 md:px-28 px-6" >
      <div className="md:flex  md:flex-wrap overflow-hidden lg:-mx-2">
        <div className="md:w-2/5 overflow-hidden mb-10 md:mb-0 md:pr-20">
          <div className="md:my-2 mt-0 overflow-hidden cursor-pointer md:hover:scale-105 transform transition duration-300 hover:bg-transparent  hover:text-black">
            <Link to="/"><img alt="" className="inline mt-0 w-3/6" src="./img/logo.svg" /></Link>
          </div>
          <h6 className="font-semibold text-lg mb-3 text-black mt-10 md:mt-6">Support</h6>


          <p className='mt-5'>
            Weceta provides an advance technology that inflows with the supply chain that facilitates seamless execution of effective traceability of edible meats (including fish and other kinds of sea food) from the farm to end user.</p>


          <div className="flex flex-wrap -mx-3 overflow-hidden pr-4 md:pr-0">
           <a
               rel="noreferrer" target="_blank" 
               href={routesConstants.PlayStore}>           <div className="my-0 px-0 overflow-hidden">
              <div className="flex flex-wrap md:justify-start my-4 bg-yellow rounded-xl mx-4 p-2 w-40 justify-center cursor-pointer md:hover:scale-105 hover:border hover:border-white transform transition duration-300 hover:bg-transparent hover:text-white hover:bg-blue-500">
                <div className="w-1/5 overflow-hidden">
                  <img alt="" className="inline mt-2" src="./assets/icons/playstore1.svg" />
                </div>
                <div className="w-4/5 overflow-hidden ">
                  <div className="text-sm font-medium text-slate-400 inline">
                    <p className='text-left text-black ml-4 font-semibold '>Download on Play Store</p>
                  </div>
                </div>
              </div>        </div></a>
            <div className="my-0 px-0 overflow-hidden">
              <a
               rel="noreferrer" target="_blank" 
               href={routesConstants.AppleStore}> <div className="flex flex-wrap md:justify-start my-4 bg-yellow rounded-xl mx-4 p-2 w-40 justify-center cursor-pointer md:hover:scale-105 hover:border-white transform transition duration-300 hover:bg-transparent hover:border hover:text-white hover:bg-blue-500">
                <div className="w-1/5 overflow-hidden">
                  <img alt="" className="inline mt-2" src="./assets/icons/applestore1.svg" />
                </div>
                <div className="w-4/5 overflow-hidden">
                  <div className="text-sm font-medium text-slate-400 inline">
                    <p className='text-left text-black ml-4 font-semibold'>Download on Apple Store</p>
                  </div>
                </div>

              </div> </a>
            </div>
          </div>
        </div>
        <div className="md:w-1/5 overflow-hidden lg:my-2 lg:px-2 mb-8">
          <h6 className="font-semibold text-lg mb-3 text-black">Explore</h6>
          <Link to={routesConstants.HOME}>  <p className="mb-1">Home</p> </Link>
          <Link to={routesConstants.CONTACT}>  <p>Contacts</p> </Link>
        </div>
        <div className="md:w-1/5 overflow-hidden lg:my-2 lg:px-2 mb-8">
          <h6 className="font-semibold text-lg mb-3 text-black">Info</h6>
          <Link to={routesConstants.ABOUT}>    <p className="mb-1">About Us</p></Link>
          <Link to={routesConstants.SERVICES}>    <p>servces</p></Link>
        </div>
        <div className="md:w-1/5 overflow-hidden lg:my-2 lg:px-2 mb-8">
          <h6 className="font-semibold text-lg mb-3 text-black">Contact</h6>
          <Link to="">  <p className="mb-6">47, Isaac John St,
            GRA Ikeja, Lagos Nigeria.</p> </Link>
          <a href={routesConstants.EMAIL}>  <p className="mb-4">info@weceta.ng
          </p> </a>
          <a href={routesConstants.TEL}> <p className="mb-1">0818 838 3838</p> </a>
          <div className="flex mt-5">
            <Link to="">    <img alt="" className="inline mr-1 cursor-pointer md:hover:scale-105  transform transition duration-300 hover:bg-transparent hover:text-black" src="./assets/icons/socialmedia/Instagram.svg" /> </Link>
            <Link to="">    <img alt="" className="inline mr-1 cursor-pointer md:hover:scale-105  transform transition duration-300 hover:bg-transparent hover:text-black" src="./assets/icons/socialmedia/Twitter.svg" /> </Link>
            <Link to="">    <img alt="" className="inline mr-1 cursor-pointer md:hover:scale-105  transform transition duration-300 hover:bg-transparent hover:text-black" src="./assets/icons/socialmedia/LinkedIn.svg" /> </Link>
            <Link to="">    <img alt="" className="inline cursor-pointer md:hover:scale-105  transform transition duration-300 hover:bg-transparent hover:text-black" src="./assets/icons/socialmedia/Facebook.svg" /> </Link>
          </div>
        </div>
      </div>
    </footer>
    <footer className="bg-gray-700 text-black py-6 md:px-28 px-6 border-t border-gray-100">
      <div className="md:flex justify-between md:flex-wrap overflow-hidden lg:-mx-2 ">
        <p className='md:mt-5 text-center m-auto'>All Rights Reserved ©Weceta Technologies Limited</p>
      </div>
    </footer>
  </>
}
export default Footer;
