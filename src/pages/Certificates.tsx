import React from 'react';
import { Footer, Navbar } from './components';
import Certificates from './components/Certificates';
import ReportCertificates from './components/ReportCertificates';

function Certificate() {
  return (
    <div className="App">
      <Navbar />
      <br /><br /><br /><br /><br />
      <Certificates />
      <ReportCertificates />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Certificate;
