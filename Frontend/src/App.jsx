import React from 'react';
//import { Route, BrowserRouter as Router, Routes, useRoutes } from "react-router-dom";
import {Navigate, Route, Routes} from "react-router-dom";
import Store from './Routes/Store';
import Home from './Routes/Home';
import Signup from './Routes/Signup';
import Contact from './Routes/Contact';
import GadgetStore from './Routes/GadgetStore';
import { Toaster } from 'react-hot-toast';
import Cart from './Routes/cart';
import {  useAuth } from "./context/AuthProvider";

// const Routes = () => {
//   let element = useRoutes([
//     { path: '/', element: <Home />},
//     { path: '/store', element: <Store />},
//     { path: '/signup', element: <Signup />},
//     {path: '/contact', element: <Contact />},
//     {path: '/gadget', element: <GadgetStore />},
//   ]);
//   return element;
// };

function App() {
  const [authUser, setAuthUser] = useAuth();
  return (
    <>
      {/* <Router>
        <Routes />
      </Router>
      <Toaster /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/store" element={<Store />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/gadget" element={<GadgetStore />} />
        <Route path="/cart" element={authUser?<Cart />:<Navigate to="/signup" />} />
      </Routes>
      <Toaster />
    </>
  )
}

export default App;
