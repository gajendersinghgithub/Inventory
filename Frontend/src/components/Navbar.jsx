import React from 'react';
import Login from './Login';
import { Link } from 'react-router-dom';
import {    useAuth    }  from "../context/AuthProvider";
import Logout from './Logout';

function Navbar() {
    const [authUser, setAuthUser] = useAuth();
    console.log(authUser);
  return (
      <div className="container mx-auto px-0 md:px-8 font-serif">
          <div className="navbar bg-base-100">
              <div className="navbar-start">
                  <div className="dropdown">
                      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                          <svg
                              xmlns="http://www.w3.org/2000/svg"
                              className="h-5 w-5"
                              fill="none"
                              viewBox="0 0 24 24"
                              stroke="currentColor">
                              <path
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  strokeWidth="2"
                                  d="M4 6h16M4 12h8m-8 6h16" />
                          </svg>
                      </div>
                      <ul
                          tabIndex={0}
                          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-[350px] h-44 p-4 shadow">
                          <li><Link className='text-lg' to="/">Home</Link></li>
                          <li><Link className='text-lg' to="/store">Tshirt</Link></li>
                          <li><Link className='text-lg' to="/gadget">Gadgets</Link></li>
                          <li><Link className='text-lg' to="/contact">Contact Us</Link></li>
                                                    
                      </ul>
                  </div>
                  <a className="text-xl md:text-[2rem] font-bold cursor-pointer tracking-wide">INVE<span className='text-blue-500'>NTORY</span></a>
              </div>
              <div className="navbar-center hidden lg:flex">
                  <ul className="menu menu-horizontal px-1">
                        <li><Link to='/'>Home</Link></li>
                        <li><Link to='/store'>Tshirts</Link></li>
                        <li><Link to='/gadget'>Gadgets</Link></li>
                        <li><Link to="/contact">Contact Us</Link></li>

                  </ul>
              </div>

              {
                  authUser ? <Logout /> :
                      <div className="navbar-end">
                          <a className="border-2 border-black text-black rounded-md hover:bg-black hover:text-white hover:border-0 duration-300 px-3 py-1.5 hover:py-2 cursor-pointer hover:outline-2 w-20 text-center font-bold text-nowrap" onClick={() => document.getElementById('my_modal_3').showModal()}>Log In</a><Login />
                          <Link to='/signup' className="text-white bg-black rounded-md hover:bg-slate-800 duration-300 px-3 py-2 cursor-pointer hover:outline-2 w-20 text-center text-nowrap mx-1">Sign Up</Link>
                      </div>
              }
          </div>
      </div>
  )
}

export default Navbar;
