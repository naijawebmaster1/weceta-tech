import React, { useState } from "react";
import { Transition } from "@headlessui/react";
import { Link } from "react-router-dom";
import { routesConstants } from "../../utility/routesConstants"

function Navbar(props: any) {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
            {/* HEADER
			============================================= */}
            <header id="header" className="header">
                <nav className="navbar fixed-top navbar-expand-lg navbar-light bg-tra">
                    <div className="container">
                        {/* LOGO IMAGE */}
                        {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 260 x 60 pixels) */}
                        <a href="#hero-5" className="navbar-brand logo-white">
                            <img
                                src="./img/logo.svg"
                                width={160}
                                height={60}
                                alt="header-logo"
                            />
                        </a>
                        <a href="#hero-5" className="navbar-brand logo-black">
                            <img
                                src="./img/logo.svg"
                                width={160}
                                height={60}
                                alt="header-logo"
                            />
                        </a>
                        {/* Responsive Menu Button */}
                        <button
                            className="navbar-toggler"
                            type="button"
                            data-toggle="collapse"
                            data-target="#navbarSupportedContent"
                            aria-controls="navbarSupportedContent"
                            aria-expanded="false"
                            aria-label="Toggle navigation"
                        >
                            <span className="navbar-toggler-icon" />
                        </button>
                        {/* Navigation Menu */}
                        <div id="navbarSupportedContent" className="collapse navbar-collapse">
                            <ul className="navbar-nav ml-auto">
                                {/* Dropdown Link */}
                                <li className="nav-item nl-simple">
                                    <a className="nav-link" href={routesConstants.HOME}>
                                        Home
                                    </a>
                                </li>
                                <li className="nav-item dropdown">
                                    <a
                                        className="nav-link"
                                        href={routesConstants.ABOUT}


                                    >
                                        About
                                    </a>
                                </li>

                                <li className="nav-item nl-simple">
                                    <a className="nav-link pre-link" href={routesConstants.CERTIFICATES}>
                                        Digital Certificates
                                        <span />
                                    </a>
                                </li>
                                <li className="nav-item nl-simple">
                                    <a className="nav-link" href={routesConstants.CONTACT}>
                                        Contact
                                    </a>
                                </li>
                            </ul>
                        </div>{" "}
                        {/* End Navigation Menu */}
                    </div>{" "}
                    {/* End container */}
                </nav>{" "}
                {/* End navbar  */}
            </header>{" "}
            {/* END HEADER */}
            {/* HERO-5
			============================================= */}
        </div>
    );
}
export default Navbar;