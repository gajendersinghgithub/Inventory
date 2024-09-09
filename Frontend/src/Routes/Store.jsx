import React from 'react';
import Navbar from '../../src/components/Navbar.jsx';
import Tshirts from '../components/Tshirts.jsx';
import Footer from '../../src/components/Footer.jsx';


function Store() {
  return (
    <div>
      <Navbar />
      <Tshirts />
      <Footer />
    </div>
  )
}

export default Store;