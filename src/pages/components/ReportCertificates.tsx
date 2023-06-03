import { Carousel, Spin } from 'antd';
import React, { useState } from 'react';
import { useFormik } from 'formik';
function ReportCertificates(props: any) {
  const [isLoading, setIsLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const formik = useFormik({
    initialValues: {
      fullName: '',
      message: '',
      certificateId: '',
      email: '',
    },
    onSubmit: (values, { resetForm }) => {
      setIsLoading(true);
      // alert(JSON.stringify(values, null, 2));
      // console.log(values);
      (async function SubmitRepot(values: any) {
        try {
          const response = await fetch('https://api.example.com/reports', {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify(values)
          });
          if (response.ok) {
            const responseData = await response.json();
            console.log('Response:', responseData);
            // Process the response data as needed
          } else {
            console.error('Request failed with status:', response.status);
            // Handle the error
          }
        } catch (error) {
          console.error('An error occurred:', error);
          // Handle the error
        } finally {
          setTimeout(() => {
            setSuccess(true)
            setIsLoading(false);
            resetForm();
            if (props.onCancel) {
              setTimeout(() => {
                props.onCancel()
              }, 5000);
            }
          }, 3000);
        }
      })(values);

    },
  });
  return <>
    <>
      <Spin spinning={isLoading} size="large">
        <section
          id="contacts-2"
          className="bg-scroll bg-dark wide-80 contacts-section division"
        >
          <div className="container">
            <span>X</span>
            {/* SECTION TITLE */}
            <div className="row">
              <div className="col-md-10 md:col- offset-md-1 section-title white-color">
                {/* Title 	*/}
                {success ? <>
                  <h2 className="h2-lg">Thanks For Rerporting</h2>
                  <p>
                    Thank you for submitting the report. We will review it shortly and get back to you.                  </p></> :
                  <>
                    <h2 className="h2-lg">Report a Certificate?</h2>
                    <p>
                      Have a question or concern about a certificate? We value your feedback and are here to assist you. Please send us a message with the details of the certificate in question, and we will promptly review and respond to your inquiry.
                    </p>
                  </>
                }
              </div>
            </div>{" "}
            {/* END SECTION TITLE */}
            {/* CONTACT FORM */}
            {(success) ? <>
              {!props.onCancel && <div className="col-lg-12 m-top-15 form-btn text-center">
                <button onClick={() => setSuccess(false)} type="submit" className="btn btn-lightgreen submit">
                  Report Again?
                </button>
              </div>}
            </> : <div className="row">
              <div className="col-md-10 col-lg-8 offset-md-1 offset-lg-2">
                <div className="form-holder">
                  <form
                    name="contactform"
                    className="row contact-form"
                    onSubmit={formik.handleSubmit}
                  >
                    {/* Contact Form Input */}
                    <div id="input-name" className="col-lg-6">
                      <input
                        type="text"
                        name="fullName"
                        className="form-control name"
                        placeholder="Kindly Enter Your Full Name"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.fullName}
                      />
                    </div>
                    <div id="input-email" className="col-lg-6">
                      <input
                        type="text"
                        name="email"
                        className="form-control email"
                        placeholder="Kindly Enter Your Email Address"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.email}
                      />
                    </div>
                    <div id="input-subject" className="col-lg-12 input-subject">
                      <input
                        type="text"
                        name="certificateId"
                        className="form-control subject"
                        placeholder="Enter The Certificate ID"
                        required
                        onChange={formik.handleChange}
                        value={formik.values.certificateId}
                      />
                    </div>
                    <div id="input-message" className="col-lg-12 input-message">
                      <textarea
                        className="form-control message"
                        name="message"
                        rows={6}
                        placeholder="Kindly write us a brief report note here ..."
                        defaultValue={""}
                        required
                        onChange={formik.handleChange}
                        value={formik.values.message}
                      />
                    </div>
                    {/* Contact Form Button */}
                    <div className="col-lg-12 m-top-15 form-btn text-right">
                      <button type="submit" className="btn btn-lightgreen submit">
                        Send Message
                      </button>
                    </div>
                    {/* Contact Form Message */}
                    <div className="col-lg-12 contact-form-msg">
                      <span className="loading" />
                    </div>
                  </form>


                </div>
              </div>
            </div>}

            {/* END CONTACT FORM */}
          </div>{" "}
          {/* End container */}
        </section>
      </Spin>
    </>





  </>;
}
export default ReportCertificates;
