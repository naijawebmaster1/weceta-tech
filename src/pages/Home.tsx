import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";
import { routesConstants } from '../utility/routesConstants';
import { Link } from 'react-router-dom';


function Home() {
  return (
    <div className="App">
      <>
        {/* PRELOADER
		============================================= */}
        {/* <div id="loader-wrapper">
          <div id="loader">
            <ul className="cssload-flex-container">
              <li>
                <span className="cssload-loading" />
              </li>
            </ul>
          </div>
        </div> */}
        {/* PAGE CONTENT
		============================================= */}
        <div id="page" className="page">
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
          <section id="hero-5" className="bg-fixed hero-section division">
            <div className="container">
              {/* HERO CONTENT */}
              <div className="row d-flex align-items-center">
                {/* HERO TEXT */}
                <div className="col-md-6 col-lg-6">
                  <div className="hero-txt text-center">


                    <h2
                      className="h2-lg animated"
                      data-animation="fadeInUp"
                      data-animation-delay={300}
                    >


                      <Typewriter
                        //@ts-ignore
                        class="h2-lg animated"
                        options={{
                          strings: [
                            'Trace The Oigin of Your Protein',
                            'Sanitize The Protein Value Chain in Africa',
                            'Guaranteed Trace Back Mechanism',
                          ],
                          autoStart: true,
                          loop: true
                        }} />                    </h2>



                    {/* Title */}


                    {/* Text */}
                    <p
                      className="p-lg animated"
                      data-animation="fadeInUp"
                      data-animation-delay={400}
                    >
                      Guaranteeing protein traceability, Sanitize the protein value chain in Africa, Increasing corporate investments in mechanised and semi-mechanised abattoirs
                    </p>
                    {/* HERO STORE BADGES */}
                    <div
                      className="hero-stores-badge animated"
                      data-animation="fadeInUp"
                      data-animation-delay={500}
                    >
                      {/* AppStore */}
                      <a href="#" className="store">
                        <img
                          className="appstore-original"
                          src="images/store_badges/appstore.png"
                          width={160}
                          height={50}
                          alt="appstore-logo"
                        />
                      </a>
                      {/* Google Play */}
                      <a href="#" className="store">
                        <img
                          className="googleplay-original"
                          src="images/store_badges/googleplay.png"
                          width={171}
                          height={50}
                          alt="googleplay-logo"
                        />
                      </a>
                      {/* Aamazon Market 
									<a href="#" class="store">
										<img class="amazon-original" src="images/store_badges/amazon.png" width="158" height="50" alt="amazon-logo" />
									</a>  */}
                      {/* Windows Market  
									<a href="#" class="store">
										<img class="windows-original" src="images/store_badges/windows.png" width="164" height="50" alt="windows-logo" />
									</a> */}
                      {/* OS Prerequisite */}
                      <span className="os-version">* Requires iOS 7.0 or higher</span>
                    </div>{" "}
                    {/* End Store Badges */}
                  </div>
                </div>{" "}
                {/* END HERO TEXT */}
                {/* HERO IMAGE */}
                <div
                  className="col-md-6 animated"
                  data-animation="fadeInRight"
                  data-animation-delay={500}
                >
                  <div className="hero-img">
                    <img
                      className="img-fluid"
                      src="images/hero-5-img.png"
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>{" "}
            </div>{" "}
          </section>{" "}




          <section
            id="features-3"
            className="bg-fixed wide-30 featuress-section division"
            style={{
              backgroundImage: "url(images/tra-waves.png)",
              backgroundPosition: "center bottom"
            }}
          >
            <div className="container">
              {/* SECTION TITLE 	*/}
              <div className="row">
                <div className="col-md-12 section-title">
                  {/* Title 	*/}
                  <h2 className="h2-lg">Ante-Mortem & Post-Mortem Inspection</h2>
                  {/* Text */}
                  <p>
                    When animals pass through the stages of inspection, they are usually issued some form of legal pass which traditionally happens in the form of a certificate (handled by the merchants) or some kind of body marking or a combination of either of these to varying degrees depending on jurisdiction. Weceta automates these into a seamless one-stop process having the following effect among other things
                  </p>
                </div>
              </div>{" "}
              {/* END SECTION TITLE */}
              <div className="row">
                {/* FEATURE BOX #1 */}
                <div
                  className="col-md-6 col-lg-3 animated"
                  data-animation="fadeInUp"
                  data-animation-delay={300}
                >
                  <div className="fbox-3 box-icon-lg green-hover">
                    <div className="box-line" />
                    {/* Icon */}
                    <span className="pe-7s-share" />
                    {/* Title */}
                    <h5 className="h5-md">Central Database</h5>
                    {/* Text */}
                    <p className="grey-color">
                      Centralizing a high-security database for use in policymaking, epidemiological studies etc.                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #2 */}
                <div
                  className="col-md-6 col-lg-3 animated"
                  data-animation="fadeInUp"
                  data-animation-delay={400}
                >
                  <div className="fbox-3 box-icon-lg green-hover">
                    <div className="box-line" />
                    {/* Icon */}
                    <span className="pe-7s-vector" />
                    {/* Title */}
                    <h5 className="h5-md">Traceback
                    </h5>
                    {/* Text */}
                    <p className="grey-color">
                      Assisting traceback in the event of food borne disease outbreaks especially when there is a need for recalls.                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #3 */}
                <div
                  className="col-md-6 col-lg-3 animated"
                  data-animation="fadeInUp"
                  data-animation-delay={500}
                >
                  <div className="fbox-3 box-icon-lg green-hover">
                    <div className="box-line" />
                    {/* Icon */}
                    <span className="pe-7s-target" />
                    {/* Title */}
                    <h5 className="h5-md">Auditing
                    </h5>
                    {/* Text */}
                    <p className="grey-color">
                      Enhance the auditing and investigation processes during HACCP-related investigations.                    </p>
                  </div>
                </div>
                {/* FEATURE BOX #4 */}
                <div
                  className="col-md-6 col-lg-3 animated"
                  data-animation="fadeInUp"
                  data-animation-delay={600}
                >
                  <div className="fbox-3 box-icon-lg green-hover">
                    <div className="box-line" />
                    {/* Icon */}
                    <span className="pe-7s-edit" />
                    {/* Title */}
                    <h5 className="h5-md">Consumer Confidence</h5>
                    {/* Text */}
                    <p className="grey-color">
                      Enhance the investigation processes during HACCP-related investigations.                    </p>
                  </div>
                </div>

              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}























          <section
            id="content-4"
            className="bg-scroll wide-60 content-section division"
          >
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* CONTENT IMAGE */}
                <div
                  className="col-md-6 animated"
                  data-animation="fadeInRight"
                  data-animation-delay={500}
                >
                  <div className="content-img">
                    <img
                      className="img-fluid"
                      src="images/image-06.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* CONTENT TEXT */}
                <div className="col-md-6">
                  <div className="content-txt ind-45">
                    {/* Title */}
                    <h2
                      className="h2-xs animated"
                      data-animation="fadeInLeft"
                      data-animation-delay={300}
                    >
                      The Weceta Idea
                    </h2>
                    {/* Text */}
                    {/* Title */}
                    <h5
                      className="h5-md animated"
                      data-animation="fadeInLeft"
                      data-animation-delay={500}
                    >
                      Shedding light on protein value chain in Africa
                    </h5>
                    <p
                      className=" animated"
                      data-animation="fadeInLeft"
                      data-animation-delay={400}
                    >
                      Weceta is a tech-enabled startup established originally with a view to sanitizing the red meat value chain in Africa by facilitating and strengthening due diligence in the systems that transfer edible meat and its byproducts from farm to fork.
                    </p>

                    <h6

                      className=" animated text-red-200"
                      data-animation="fadeInLeft"
                      data-animation-delay={700}
                    >
                      MANY DEATHS IN NIGERIA CAN BE TRACED DIRECTLY TO CONTAMINATED OR POORLY PREPARED FOODS, WHOSE SOURCE IS UNKNOWN
                    </h6>
                    <img alt="" className="inline w-2/3" src="./img/medium/dlf-2.png" />

                    <p
                      className=" animated"
                      data-animation="fadeInLeft"
                      data-animation-delay={800}
                    >
                      The modus operandi is to take advantage of advances in information and communication technology including artificial intelligence to digitalize and coordinate the various systems in the farming, production, distribution, and supply within the value chain.
                    </p>
                  </div>
                </div>{" "}
                {/* END CONTENT TEXT */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-4 */}
          {/* CONTENT-5
			============================================= */}














          {/* DOWNLOAD-3
			============================================= */}
          <section id="download-3" className="wide-50 download-section">
            <div className="bg-scroll bg-inner bg-dark division">
              <div className="container white-color">
                <div className="row d-flex align-items-center">
                  {/* DOWNLOAD IMAGE */}
                  <div
                    className="col-md-5 col-lg-4 animated"
                    data-animation="fadeInRight"
                    data-animation-delay={500}
                  >
                    <div className="download-3-img text-center ind-15">
                      <img
                        className="img-fluid"
                        src="images/image-05.png"
                        alt="download-image"
                      />
                    </div>
                  </div>
                  {/* DOWNLOAD TXT */}
                  <div className="col-md-7 col-lg-7 offset-lg-1">
                    <div className="download-txt ind-30">
                      {/* Title */}
                      <h2
                        className="h2-xs animated"
                        data-animation="fadeInLeft"
                        data-animation-delay={300}
                      >
                        Do even more with the Proteintrail App
                      </h2>
                      {/* Text */}
                      <p
                        className="p-lg animated"
                        data-animation="fadeInLeft"
                        data-animation-delay={400}
                      >
                        Download Protein Trail on Android Google play store and iOS app store.
                      </p>
                      {/* HERO STORE BADGES */}
                      <div
                        className="stores-badge animated"
                        data-animation="fadeInLeft"
                        data-animation-delay={500}
                      >
                        {/* AppStore */}
                        <a href="#" className="store">
                          <img
                            className="appstore-grey"
                            src="images/store_badges/appstore-grey.png"
                            width={158}
                            height={50}
                            alt="appstore-logo"
                          />
                        </a>
                        {/* Google Play */}
                        <a href="#" className="store">
                          <img
                            className="googleplay-grey"
                            src="images/store_badges/googleplay-grey.png"
                            width={168}
                            height={50}
                            alt="googleplay-logo"
                          />
                        </a>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END DOWNLOAD TXT */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End Inner Background */}
          </section>{" "}
          {/* END DOWNLOAD-3 */}
          {/* FAQs-1
			============================================= */}






















          {/* END CONTENT-5 */}
          {/* SCREENSHOTS-2
			============================================= */}
          <section id="screens-2" className="no-bg wide-100 screens-section division">
            {/* SECTION TITLE */}
            <div className="container">
              <div className="row">
                <div className="col-md-10 offset-md-1 section-title">
                  {/* Title 	*/}
                  <h2 className="h2-lg">Unique App Screens</h2>
                  {/* Text */}
                  <p>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                    primis libero tempus, tempor posuere ligula varius
                  </p>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* END SECTION TITLE */}
            {/* SCREENSHOTS CAROUSEL */}
            <div className="screenshots-wrap">
              <div className="screens-carousel">
                {/* Screen #1 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-1.jpg" alt="screenshot" />
                </div>
                {/* Screen #2 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-2.jpg" alt="screenshot" />
                </div>
                {/* Screen #3 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-3.jpg" alt="screenshot" />
                </div>
                {/* Screen #4 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-4.jpg" alt="screenshot" />
                </div>
                {/* Screen #5 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-5.jpg" alt="screenshot" />
                </div>
                {/* Screen #6 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-6.jpg" alt="screenshot" />
                </div>
                {/* Screen #7 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-7.jpg" alt="screenshot" />
                </div>
                {/* Screen #8 */}
                <div className="carousel-item">
                  <img src="images/portfolio/screen-8.jpg" alt="screenshot" />
                </div>
              </div>
            </div>{" "}
            {/* END SCREENSHOTS CAROUSEL */}
          </section>{" "}
          {/* END SCREENSHOTS-2 */}
          {/* VIDEO-3
			============================================= */}
          <section id="video-3" className="bg-scroll bg-dark video-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-md-10 offset-md-1 white-color section-title">
                  {/* Title 	*/}
                  <h2 className="h2-lg">Generated certificate</h2>
                  {/* Text */}
                  <p>
                    Weceta provides an advanced technology that flows from farm to fork within the supply chain and facilitates seamless execution of effective traceable edible meats (including fish and other kinds of sea food).
                  </p>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END SECTION TITLE */}
              <div className="row">
                <div className="video-inner-bg">
                  <div className="col-xl-10 offset-xl-1">

                    <div className="video-content">
                      <div className="row d-flex align-items-center">
                        <img alt="" width="100%" className="inline md:w-2/3 rounded-md m-auto" src="./img/certificates/Lagos-State.png" />

                      </div>{" "}
                      {/* End row */}
                    </div>{" "}
                    {/* End video-content */}
                  </div>{" "}
                  {/* END CONTENT TEXT */}
                </div>{" "}
                {/* End Inner Background */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END VIDEO-3 */}



          <section id="content-5" className=" content-section">
            <div className="bg-scroll p-top-100 bg-inner bg-grey division">
              <div className="container">
                <div className="row d-flex align-items-center">
                  {/* CONTENT TXT */}
                  <div className="col-md-6">
                    <div className="content-txt ind-45">
                      {/* Title */}
                      <h2
                        className="h2-xs animated"
                        data-animation="fadeInRight"
                        data-animation-delay={300}
                      >
                        Our Technology
                      </h2>
                      {/* Text */}
                      <p
                        className=" animated"
                        data-animation="fadeInRight"
                        data-animation-delay={400}
                      >
                        Our techlology protein trail is a fully developed and patented mobile app designed for efficient tracking of the origin, safety and transport of meat as they follow the production, distribution and supply of protein in Nigeria.
                        <br /><br />
                        Protein Trail is an easy to use solution with provision for database management and querying system traceabiity and document verification systems which have been specifically adapted for use in the meat supply chain.
                        <br /><br />
                        Protein Trail is accessable to the every day consumer of meats, food businesses , suppliers, distributors, government inspectors and veterinary authorities.
                      </p>
                      {/* APP DEVICES */}
                      <div
                        className="app-devices clearfix animated"
                        data-animation="fadeInRight"
                        data-animation-delay={500}
                      >
                        {/* Icons */}
                        <i className="fas fa-tablet-alt f-tablet" />
                        <i className="fas fa-mobile-alt f-phone" />
                        {/* Text */}
                        <div className="app-devices-desc">
                          <p className="p-small">
                            Available on iPhone, iPad and all Android devices from 5.5
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END CONTENT TXT */}
                  {/* CONTENT IMAGE */}
                  <div className="col-md-6">
                    <div
                      className="content-5-img text-center ind-15 animated"
                      data-animation="fadeInLeft"
                      data-animation-delay={500}
                    >
                      <img alt="" className="inline w-2/3 rounded-full text-center m-auto img-fluid" width="80%" src="./img/large/pngegg-2022-03-16T152357-1.svg" />

                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </div>{" "}
            {/* End Inner Background */}
          </section>{" "}







          <>
            {/* VIDEO-3
			============================================= */}
            <section id="video-3" className="bg-scroll bg-dark video-section division">
              <div className="container">
                {/* SECTION TITLE */}
                <div className="row">
                  <div className="col-md-10 offset-md-1 white-color section-title">
                    {/* Title 	*/}
                    {/* <h2 className="h2-lg">Weceta is duly licenced by protein trail</h2> */}
                    {/* Text */}
                    {/* <p>
                      Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                      primis libero tempus, tempor posuere ligula varius
                    </p> */}
                  </div>{" "}
                  {/* End row */}
                </div>{" "}
                {/* END SECTION TITLE */}
                <div className="row">
                  <div className="video-inner-bg">
                    <div className="col-xl-10 offset-xl-1">
                      <div className="video-content">
                        <div className="row d-flex align-items-center">
                          {/* VIDEO TEXT */}
                          <div className="col-md-7">
                            <div className="video-txt p-right-30">
                              {/* Title */}
                              <h4 className="h4-xl text-center center">Weceta is duly licenced by protein trail</h4>
                              <div className="center text-center">                              <img alt="" width="80%" className=" text-center center m-auto inline w-2/3  text-center m-auto" src="./img/icons/logo-wide.svg" />
                              </div>

                              {/* Text */}
                              {/* <p>
                                Gravida donec integer ipsum porta justo at velna vitae
                                auctor integer magna at risus auctor purus rutrum primis
                                ultrice ligula luctus impedit magna dolor vitae risus
                                auctor purus pretium
                              </p> */}
                              {/* Text  */}
                              {/* <p>
                                Donec enim ipsum porta justo integer at velna vitae auctor
                                integer congue magna at risus auctor purus unt pretium
                                ligula rutrum sapien ultrice eros dolor luctus odio
                                placerat massa magna cursus
                              </p> */}
                              {/* Button */}
                              <div className="center text-center">
                                <a href={routesConstants.ProteinTrail} target="_blank" rel="noreferrer" className="btn btn-lightgreen">
                                  Discover More on Protein Trail
                                </a></div>

                            </div>
                          </div>{" "}
                          {/* END VIDEO TEXT */}
                          {/* VIDEO PREVIEW */}
                          <div className="col-md-5">
                            <div className="video-preview text-center">
                              {/* Change the link HERE!!! */}
                              <a
                                className="video-popup"
                                href="https://www.youtube.com/watch?v=kuceVNBTJio"
                              >
                                {/* Play Icon */}
                                <div className="video-block-wrapper">
                                  <div className="play-icon-green" />
                                </div>
                                {/* Preview Image */}
                                <img
                                  className="img-fluid"
                                  src="images/video-3-img.png"
                                  alt="video-preview"
                                />
                              </a>
                            </div>
                          </div>{" "}
                          {/* END VIDEO PREVIEW */}
                        </div>{" "}
                        {/* End row */}
                      </div>{" "}
                      {/* End video-content */}
                    </div>{" "}
                    {/* END CONTENT TEXT */}
                  </div>{" "}
                  {/* End Inner Background */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* End container */}
            </section>{" "}
            {/* END VIDEO-3 */}
          </>








          <section id="faqs-1" className="bg-fixed wide-80 faqs-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-md-10 offset-md-1 section-title">
                  {/* Title 	*/}
                  <h2 className="h2-lg">Who We Are</h2>
                  {/* Text */}
                  {/* <p>
                    Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                    primis libero tempus, tempor posuere ligula varius
                  </p> */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END SECTION TITLE */}
              <div className="row">
                {/* QUESTIONS HOLDER */}
                <div className="col-lg-6">
                  <img alt="" className="inline w-5/6" src="./img/large/Screenshot-2022-07-17-094508.png" />

                </div>{" "}
                {/* END QUESTIONS HOLDER */}
                {/* QUESTIONS HOLDER */}
                <div className="col-lg-6">
                  <div className="questions-holder ind-30 mt-5">
                    {/* QUESTION #5 */}
                    Our aim is to sanitize the protein value chain in Africa using class A abattoirs via our protein trail technology, guaranteeing traceability and thereby increasing corporate investments in class A slaughterhouses on the continent.
                    <br /><br />
                    Weceta is a first-of-its-kind agritech startup in Nigeria We are equiped with technologies and infrastructures to facilitate the traceability of locally sourced meat (incuding fish and other kind of seafood) from farm to fork.
                    <br /><br />
                    Our effort enable the standardization of food/products tracking during the production, distribution and supply chain of red meat in Nigeria
                    <br /><br />
                    With the exclusive right to operate our fully patented technology (Protein Trail) across the country, our solution is an effective and seamless monitoring process for stakeholders and vetrinary authorities in each state, government inspectors, meet distributors, meat recipients (food business, etc), and end consumers.
                  </div>
                </div>{" "}
                {/* END  QUESTIONS HOLDER */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}







          <section id="reviews-1" className="wide-50 reviews-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div className="col-md-10 offset-md-1 section-title">
                  {/* Title 	*/}
                  <h2 className="h2-lg">Our Solutions</h2>
                  {/* Text */}
                </div>
              </div>{" "}
              {/* END SECTION TITLE */}

              {/* TESTIMONIALS CAROUSEL */}
              <div className="reviews-carousel">
                <div className="center slider">
                  {/* TESTIMONIAL #1 */}
                  <WecetaCarousel />
                </div>
              </div>{" "}
              {/* TESTIMONIALS CAROUSEL */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TESTIMONIALS-1 */}
          {/* STATISTIC-2
			============================================= */}




          <section
            id="newsletter-1" className="bg-scroll bg-green newsletter-section division"
          >
            <div className="container white-color">
              <div className="row">
                <div className="col-lg-12">
                  <div className="newsletter-txt text-center">
                    {/* Title */}
                    <h3 className="h3-xl">
                      Keep in touch with us for existing offer. Subscribe for
                      Newsletter
                    </h3>
                    {/* HERO NEWSLETTER FORM */}
                    <form className="newsletter-form">
                      <div className="input-group">
                        <input
                          type="email"
                          className="form-control"
                          placeholder="Your email address"
                          required
                          id="s-email"
                        />
                        <span className="input-group-btn">
                          <button type="submit" className="btn">
                            <i className="fas fa-arrow-right" />
                          </button>
                        </span>
                      </div>
                      {/* Newsletter Form Notification */}
                      <label htmlFor="s-email" className="form-notification" />
                    </form>
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END NEWSLETTER-1 */}
          {/* FOOTER-2
			============================================= */}
          <footer id="footer-2" className="wide-60 footer division">
            <div className="container">
              {/* FOOTER CONTENT */}
              <div className="row d-flex align-items-center">
                {/* FOOTER ABOUT */}
                <div className="col-md-8 col-lg-7">
                  <div className="footer-info p-right-30 m-bottom-40">
                    {/* Footer Logo */}
                    {/* For Retina Ready displays take a larger image, with double the amount of pixels that your image will be displayed (e.g 346 x 80 pixels) */}
                    <img
                      src="./img/logo.svg"
                      width={183}
                      height={50}
                      alt="footer-logo"
                    />
                    {/* Text */}
                    <p>
                      Weceta provides an advance technology that inflows with the supply chain that facilitates seamless execution of effective traceability of edible meats (including fish and other kinds of sea food) from the farm to end user.
                    </p>
                  </div>
                </div>
                {/* FOOTER SOCIAL LINKS */}
                <div className="col-md-4 col-lg-4 offset-lg-1">
                  <div className="footer-socials-links text-right m-bottom-25">
                    {/* Social Links */}
                    <h6 className="font-semibold text-lg mb-3 text-black">Contact</h6>
                    <Link to="">  <p className="mb-6">47, Isaac John St,
                      GRA Ikeja, Lagos Nigeria.</p> </Link>

                    <a href={routesConstants.EMAIL}>  <p className="mb-4">info@weceta.ng
                    </p> </a>

                    <h5 className="h5-sm">
                      <a href={routesConstants.TEL}> <p className="mb-1">0818 838 3838</p> </a>

                    </h5>

                  </div>
                </div>
              </div>{" "}
              {/* END FOOTER CONTENT */}
              {/* BOTTOM FOOTER */}
              <div className="bottom-footer">
                <div className="row">
                  {/* FOOTER COPYRIGHT */}
                  <div className="col-md-5">
                    <div className="footer-copyright">
                      <p>
                        © 2023 <span>WecetaTech</span> All Rights Reserved
                      </p>
                    </div>
                  </div>
                  {/* FOOTER LINKS */}
                  <div className="col-md-7">
                    <div className="footer-links text-right">
                      <ul className="foo-links clearfix">
                        <li>
                          <a href={routesConstants.HOME}>Home</a>
                        </li>
                        <li>
                          <a href={routesConstants.ABOUT}>About</a>
                        </li>
                        <li>
                          <a href={routesConstants.CERTIFICATES}>Digital Certificate</a>
                        </li>
                        <li>
                          <a href={routesConstants.CONTACT}>Contact</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END BOTTOM FOOTER */}
            </div>{" "}
            {/* End container */}
          </footer>{" "}
          {/* END FOOTER-2 */}
          {/* BOTTOM QUICK FORM
			============================================= */}
          <div id="quick-form">
            <div className="bottom-form">
              {/* QUICK FORM HEADER */}
              <div className="bottom-form-header">
                <span className="pe-7s-chat" />
                <p>Quick Contact Form</p>
              </div>
              {/* QUICK FORM */}
              <div className="bottom-form-holder">
                <form name="contactform" className="quick-contact-form">
                  {/* Contact Form Input */}
                  <div id="bottom-input-name">
                    <input
                      type="text"
                      name="name"
                      className="bottom-form-control bname"
                      placeholder="Your Name*"
                    />
                  </div>
                  <div id="bottom-input-email">
                    <input
                      type="text"
                      name="email"
                      className="bottom-form-control bemail"
                      placeholder="Email Address*"
                    />
                  </div>
                  <div id="bottom-input-message">
                    <textarea
                      className="bottom-form-control bmessage"
                      name="message"
                      rows={4}
                      placeholder="Your Message ..."
                      defaultValue={""}
                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="m-top-15 form-btn text-right">
                    <button type="submit" className="btn btn-lightgreen submit">
                      Send
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* END BOTTOM QUICK FORM */}
        </div>{" "}
        {/* END PAGE CONTENT */}
        {/* EXTERNAL SCRIPTS
		============================================= */}
        {/* Custom Script */}
        {/* HTML5 shim, for IE6-8 support of HTML5 elements. All other JS at the end of file. */}
        {/* [if lt IE 9]>
			
			
		<![endif] */}
        {/* Google Analytics: Change UA-XXXXX-X to be your site's ID. Go to http://www.google.com/analytics/ for more information. */}
        {/*
		
		*/}
      </>

    </div>
  );
}
export default Home;
