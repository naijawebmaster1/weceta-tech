import React, { useState } from 'react';
import { Footer, Navbar, Testimonials } from './components';
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";
import { routesConstants } from '../utility/routesConstants';
import { Link } from 'react-router-dom';
import Certificates from './components/Certificates';
import WhoWeAre from './components/WhoWeAre';
import { Button, Modal } from 'antd';
import ReportCertificates from './components/ReportCertificates';

function Home() {
  const [isModalOpen, setIsModalOpen] = useState(true);
  const [open, setOpen] = useState(true);

  const showModall = () => {
    setIsModalOpen(true);
  };

  const handleOk = () => {
    setIsModalOpen(false);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  const [showModal, setShowModal] = React.useState(false);

  return (
    <div className="App">
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
        <Navbar />
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
                          'Trace The Origin of Your Protein',
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
                    <a href={routesConstants.AppleStore} target="_blank" rel="noreferrer" className="store">
                      <img
                        className="appstore-original"
                        src="images/store_badges/appstore.png"
                        width={160}
                        height={50}
                        alt="appstore-logo"
                      />
                    </a>
                    {/* Google Play */}
                    <a href={routesConstants.PlayStore} target="_blank" rel="noreferrer" className="store">
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
                    // width="120%"
                    // src="img/large/mockup-featuring-two-iphones-x.png"
                    src="img/large/Pixel-True-Mockup-2.png"
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
                  When animals pass through the stages of inspection, they are usually issued some form of legal pass which traditionally happens in the form of a certificate (handled by the merchants) or some kind of body marking or a combination of either of these to varying degrees depending on jurisdiction. Wecetatech automates these into a seamless one-stop process having the following effect among other things
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
                <Carousel className='' autoplay dots={true}>
                  <div className='m-auto ' >
                    <img alt="" className="inline rounded-5xl md:w-5/6 rounded-e-10" width="100%" src="/img/large/slider-bg-1.jpeg" />
                  </div>
                  <div className='m-auto'>
                    <img alt="" className="inline rounded-5xl md:w-5/6 rounded-e-10" width="100%" src="/img/large/slider-bg-2.jpeg" />
                  </div>
                  <div className='m-auto'>
                    <img alt="" className="inline rounded-5xl md:w-5/6 rounded-e-10" width="100%" src="/img/large/weceta-bg-3.png" />
                  </div>
                  <div className='m-auto'>
                    <img alt="" className="inline rounded-5xl md:w-5/6 rounded-e-10" width="100%" src="/img/large/slider-bg-3.jpeg" />
                  </div>
                </Carousel>

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
                    The Wecetatech Idea
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
                    Wecetatech is a tech-enabled startup established originally with a view to sanitizing the red meat value chain in Africa by facilitating and strengthening due diligence in the systems that transfer edible meat and its byproducts from farm to fork.
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
                      width="110%"
                      // src="img/large/protein-trail-slider.png"
                      src="img/large/Pixel-True-Mockup-3.png"
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
                      <a href={routesConstants.AppleStore} target="_blank" rel="noreferrer" className="store">
                        <img
                          className="appstore-grey"
                          src="images/store_badges/appstore-grey.png"
                          width={158}
                          height={50}
                          alt="appstore-logo"
                        />
                      </a>
                      {/* Google Play */}
                      <a href={routesConstants.PlayStore} target="_blank" rel="noreferrer" className="store">
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
                <img src="img/screenshots/Image-1.jpeg" width="100%" alt="screenshot" />
              </div>
              {/* Screen #2 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-2.jpeg" width="100%" alt="screenshot" />
              </div>
              {/* Screen #3 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-3.jpeg" width="100%" alt="screenshot" />
              </div>
              {/* Screen #4 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-4.png" width="100%" alt="screenshot" />
              </div>
              {/* Screen #5 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-5.png" width="100%" alt="screenshot" />
              </div>
              {/* Screen #6 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-2.jpeg" width="100%" alt="screenshot" />
              </div>
              {/* Screen #7 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-3.jpeg" width="100%" alt="screenshot" />
              </div>
              {/* Screen #8 */}
              <div className="carousel-item">
                <img src="img/screenshots/Image-1.jpeg" width="100%" alt="screenshot" />
              </div>
            </div>
          </div>{" "}
          {/* END SCREENSHOTS CAROUSEL */}
        </section>{" "}
        {/* END SCREENSHOTS-2 */}
        {/* VIDEO-3

			============================================= */}
        <Certificates />
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
                            <h4 className="h4-xl text-center center">Wecetatech is duly licenced by protein trail</h4>
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
                            <img
                              className="img-fluid"
                              // width="100%"
                              src="img/large/Pixel-True-Mockup-4.png"
                              // src="img/large/IMG_9676.png"
                              alt="download-image"
                            />
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

        <WhoWeAre />

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

        <Footer />

      </div>

      <div >
        <Button type="primary" onClick={() => setOpen(true)}>
          Open Modal of 1000px width
        </Button>

        <Modal
          style={{ top: 20 }}
          open={open}
          onOk={() => setOpen(false)}
          onCancel={() => setOpen(false)}
          width={700}
        >
          <ReportCertificates onCancel={() => setOpen(false)}
          />

        </Modal>
      </div>
    </div>
  );
}
export default Home;
