import { useFormik } from 'formik';
import React from 'react';
import { Link } from "react-router-dom";
import { routesConstants } from '../../utility/routesConstants';

function Footer() {

  const formik = useFormik({
    initialValues: {
      fullName: '',
      message: '',
      email: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));

      const { fullName, email, message } = values;
      const _subject = `New Message from ${fullName}`;
      const body = `Name: ${fullName}\n\nEmail: ${email}\n\nMessage: ${message}`;
      window.location.href = `mailto:${routesConstants.EMAIL}?subject=${encodeURIComponent(
        _subject,
      )}&body=${encodeURIComponent(body)}`;

    },
  });

  const now = new Date();
  const year = now.getFullYear();

  return <>
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
                Weceta Technologies limited provides technology that inflows with the food supply chain and facilitates a seamless execution of effective traceability and validation of edible meats, including fish and other kinds of sea foods from the farm to the end user              </p>
            </div>
          </div>
          {/* FOOTER SOCIAL LINKS */}
          <div className="col-md-4 col-lg-4 offset-lg-1">
            <div className="footer-socials-links text-right m-bottom-25">
              {/* Social Links */}
              <h6 className="font-semibold text-lg mb-3 text-black">Contact</h6>
              <Link to="">  <p className="mb-6">47, Isaac John St,
                GRA Ikeja, Lagos Nigeria.</p> </Link>

              <a href={routesConstants.EMAIL}>  <p className="mb-4">info@wecetatech.com
              </p> </a>

              <h5 className="h5-sm">
                <a href={routesConstants.TEL2}> <p className="mb-1">0818 688 8882</p> </a>

              </h5>
              <h5 className="h5-sm">
                <a href={routesConstants.TEL1}> <p className="mb-1">0818 688 8881</p> </a>

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
                  © {year} <span>WecetaTech</span> All Rights Reserved
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
          <form name="contactform" className="quick-contact-form" onSubmit={formik.handleSubmit}
          >
            {/* Contact Form Input */}
            <div id="bottom-input-name">
              <input
                type="text"
                name="fullName"
                className="bottom-form-control bname"
                placeholder="Your Name*"
                onChange={formik.handleChange}
                value={formik.values.fullName}
                required
              />
            </div>
            <div id="bottom-input-email">
              <input
                type="text"
                name="email"
                className="bottom-form-control bemail"
                placeholder="Email Address*"
                onChange={formik.handleChange}
                value={formik.values.email}
                required
              />
            </div>
            <div id="bottom-input-message">
              <textarea
                className="bottom-form-control bmessage"
                name="message"
                rows={4}
                placeholder="Your Message ..."
                defaultValue={""}
                onChange={formik.handleChange}
                value={formik.values.message}
                required
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
  </>
}
export default Footer;
