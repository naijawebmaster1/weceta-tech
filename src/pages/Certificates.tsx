import React from 'react';
import { Footer, Navbar } from './components';
import Certificates from './components/Certificates';

function Certificate() {
  return (
    <div className="App">
      <Navbar />
      <br /><br /><br /><br /><br />
      <Certificates />
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default Certificate;
