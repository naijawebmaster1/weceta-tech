import React from 'react';
import { Footer, Navbar, Testimonials } from './components';
import { Link } from "react-router-dom";
import Typewriter from 'typewriter-effect';
import { Carousel } from 'antd';
import WecetaCarousel from "./components/carousel/Carousel";
import { routesConstants } from '../utility/routesConstants';
import { useFormik } from 'formik';


function Contact() {
  const formik = useFormik({
    initialValues: {
      fullName: '',
      subject: '',
      message: '',
      email: '',
    },
    onSubmit: values => {
      // alert(JSON.stringify(values, null, 2));

      const { fullName, email, message, subject } = values;
      const _subject = `New Message from ${fullName} with subject ${subject}`;
      const body = `Name: ${fullName}\n\nEmail: ${email}\n\nMessage: ${message}`;
      window.location.href = `mailto:info@wecetatech.com?subject=${encodeURIComponent(
        _subject,
      )}&body=${encodeURIComponent(body)}`;


    },
  });

  return (
    <div className="App">
      <Navbar />

      <section
        id="contacts-1"
        className="bg-fixed bg-lightgrey wide-30 contacts-section division mt-10"
      >

        <br /><br /><br /><br /><br /><br />
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div className="col-md-10 offset-md-1 section-title">
              {/* Title 	*/}
              <h2 className="h2-lg">Looking For Support?</h2>
              {/* Text */}
              <p>
                Got a Question? We'd love to hear from you. Send us a message and we
                will respond you as soon as possible
              </p>
            </div>
          </div>{" "}
          {/* END SECTION TITLE */}
          {/* CONTACT FORM */}
          <div className="row">
            <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
              <div className="form-holder">
                <form
                  name="contactform"
                  className="row contact-form"
                  onSubmit={formik.handleSubmit}
                >
                  {/* Contact Form Input */}
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="fullName"
                      className="form-control name"
                      placeholder="Your Name*"
                      onChange={formik.handleChange}
                      value={formik.values.fullName}
                      required
                    />
                  </div>
                  <div className="col-lg-6">
                    <input
                      type="text"
                      name="email"
                      className="form-control email"
                      placeholder="Email Address*"
                      onChange={formik.handleChange}
                      value={formik.values.email}
                      required

                    />
                  </div>
                  {/* Form Select */}
                  <div className="col-md-12 input-subject">
                    <input
                      type="text"
                      name="subject"
                      className="form-control subject"
                      placeholder="Subject"
                      onChange={formik.handleChange}
                      value={formik.values.subject}
                      required

                    />
                  </div>
                  <div id="input-message" className="col-lg-12 input-message">
                    <textarea
                      className="form-control message"
                      name="message"
                      rows={6}
                      placeholder="Your Message ..."
                      defaultValue={""}
                      onChange={formik.handleChange}
                      value={formik.values.message}
                      required

                    />
                  </div>
                  {/* Contact Form Button */}
                  <div className="col-lg-12 m-top-15 form-btn text-right">
                    <button type="submit" className="btn btn-lightblue">
                      Send Your Message
                    </button>
                  </div>
                  {/* Contact Form Message */}
                  <div className="col-lg-12 contact-form-msg">
                    <span className="loading" />
                  </div>
                </form>
              </div>
            </div>
          </div>{" "}
          {/* END CONTACT FORM */}
        </div>{" "}
        {/* End container */}
      </section>










      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Contact;
