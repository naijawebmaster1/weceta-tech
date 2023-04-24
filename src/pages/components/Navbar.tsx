import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { routesConstants } from "../../utility/routesConstants"

function Navbar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            <nav className=" pb-10 md:pb-0 ">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between h-16 md:hidden">
                        <div className="flex items-center ">
                            <Link to="/"> <div className="flex-shrink-0">
                                <img className="inline w-1/2" src={`${props.imgSrc}`} />
                            </div>
                            </Link>
                            <div className="hidden md:block">
                                <div className="ml-10 flex items-baseline space-x-4">
                                    <a
                                        href="#"
                                        className=" hover:bg-gray-700 text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Dashboard
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Team
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Projects
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Calendar
                                    </a>
                                    <a
                                        href="#"
                                        className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                                    >
                                        Reports
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="-mr-2 flex md:hidden">
                            <button
                                onClick={() => setIsOpen(!isOpen)}
                                type="button"
                                className="border-2 bg-transparent inline-flex items-center justify-center p-1 mr-2 rounded-md text-white hover:text-white hover:bg-blue-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:bg-blue-900 focus:ring-white"
                                aria-controls="mobile-menu"
                                aria-expanded="false"
                            >
                                <span className="sr-only">Open main menu</span>
                                {!isOpen ? (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M4 6h16M4 12h16M4 18h16"
                                        />
                                    </svg>
                                ) : (
                                    <svg
                                        className="block h-6 w-6"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 24 24"
                                        stroke="currentColor"
                                        aria-hidden="true"
                                    >
                                        <path
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M6 18L18 6M6 6l12 12"
                                        />
                                    </svg>
                                )}
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter="transition ease-out duration-400 transform"
                    enterFrom="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave="transition ease-in duration-475 transform"
                    leaveFrom="opacity-100 scale-100"
                    leaveTo="opacity-0 scale-95"
                >
                    {(ref: any) => (
                        <div className="md:hidden" id="mobile-menu">
                            <div ref={ref} className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                                <Link to={routesConstants.HOME}>   <a
                                    href="#"
                                    className="hover:bg-gray-700 text-black block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Home
                                </a>
                                </Link>
                                <Link to={routesConstants.ABOUT}>   <a
                                    href="#"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    About
                                </a>  </Link>
                                <Link to={routesConstants.SERVICES}>    <a
                                    href="#"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                    Services                               </a>  </Link>
                                <Link to={routesConstants.CERTIFICATES}>   <a
                                    href="#"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                   Certificates                             </a>  </Link>
                                <Link to={routesConstants.CONTACT}>   <a
                                    href="#"
                                    className="text-black hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                                >
                                   Contact                             </a>  </Link>
                            </div>
                        </div>
                    )}
                </Transition>
            </nav>
            {/* <header className="bg-white shadow">
                <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
                    <h1 className="text-3xl font-bold text-gray-900">Dashboard</h1>
                </div>
            </header> */}
            {/* <main>
                <div className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
                    <div className="px-4 py-6 sm:px-0">
                        <div className="border-4 border-dashed border-gray-200 rounded-lg h-96"></div>
                    </div>
                </div>
            </main> */}
            <section className=" px-16 hidden md:block py-4" >
                <header className="text-black  px-6 ">
                    <div className="flex flex-wrap py-5">
                        <div className="flex-auto font-medium text-slate-900">
                            <Link to="/">     <img alt="" className="inline w-2/6" src={`${props.imgSrc}`} /> </Link>

                        </div>
                        {/* <div className="w-full flex-none mt-2 order-1 text-3xl font-bold text-violet-600">
              $39.00
            </div> */}
                        <div className="">
                            {/* <Link to="/register">  <button className={`h-11 px-6 font-semibold rounded-3xl ${props.btnBgColor} ${props.btnTextColor} text-md mr-4  transform transition duration-300 hover:scale-105 hover:bg-blue-900 hover:text-white hover:border hover:border-white`} type="submit">
                                Get Started
                            </button></Link> */}
                            <Link to={routesConstants.HOME}>  <p className={` inline ${props.textColor} pl-16   mx-6 font-semibold`}>Home</p></Link>
                            <Link to={routesConstants.ABOUT}>  <p className={`inline ${props.textColor} px-5  mx-6 font-semibold`}>About</p></Link>
                            <Link to={routesConstants.SERVICES}>  <p className={` inline ${props.textColor}  mx-6 font-semibold`}>Services</p></Link>
                            <Link to={routesConstants.CERTIFICATES}>  <p className={`inline ${props.textColor} px-5  mx-6 font-semibold`}>Certificates</p></Link>
                            <Link to={routesConstants.CONTACT}> <p className={`inline ${props.textColor}  mx-6 font-semibold`}>Contact</p></Link>
                        </div>
                        {/* <div className="text-center mt-10">
          <button className="h-10 px-6 font-semibold rounded-xl bg-white text-blue text-sm apple-store-btn text-center border-blue" type="submit">
            Learn more about Boon
          </button>
        </div> */}
                    </div>
                </header>
            </section>
        </div>
    );
}
export default Navbar;