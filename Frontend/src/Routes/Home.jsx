import React from 'react';
import Navbar from '../../src/components/Navbar.jsx';
import Hero from '../../src/components/Hero.jsx';
import Footer from '../../src/components/Footer.jsx';
import Tshirts from '../components/Tshirts.jsx';


function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Tshirts />
      <Footer />
    </div>
  )
}

export default Home;
