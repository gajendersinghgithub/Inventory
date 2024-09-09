import React from 'react';
import Navbar from '../components/Navbar';
import Gadgets from '../components/Gadgets';
import Footer from '../components/Footer';

function GadgetStore() {
  return (
    <div>
      <Navbar />
      <Gadgets />
      <Footer />
    </div>
  )
}

export default GadgetStore;