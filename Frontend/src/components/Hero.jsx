import React from 'react';
import { Link } from 'react-router-dom';

function Hero() {
  return (
      <div className='font-serif'>
          <div
              className="hero min-h-screen"
              style={{
                  backgroundImage: "url(./slide1.jpg)",
              }}>
              <div className="hero-overlay brightness-50"></div>
              <div className="hero-content text-neutral-content text-center">
                  <div className="">
                      <h1 className="mb-5 text-5xl font-bold text-white">Welcome to Inve<span className='text-blue-500'>ntory</span></h1>
                      <p className="mb-5 text-white">
                      Discover unique, stylish tees that elevate your everyday look effortlessly and Gadgets which makes your life easy
                      </p>
                      <Link to="/store">
                          <button className="btn btn-wide bg-white">Buy T-shirts</button>
                      </Link>
                      <Link to="/gadget">
                          <button className="btn btn-wide bg-black text-white mx-5 my-5 border-black hover:text-black">Buy Gadgets</button>
                      </Link>
                  </div>
              </div>
          </div>
      </div>
  )
}

export default Hero;
