import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';
import { useLocation, useNavigate } from 'react-router-dom';

function Signup() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            fullname: data.fullname,
            email: data.email,
            password: data.password
        }
        await axios
        .post("http://localhost:3000/user/signup", userInfo)
        .then((res) => {
            console.log(res.data)
            if(res.data){
                toast.success("Signup Successfully");
                navigate(from, { replace: true });
            }
            localStorage.setItem("Users", JSON.stringify(res.data.user)); 
        }).catch((err)=>{
            if(err.response){
                console.log(err);
                toast.error(err.response.data.message);
            }
        });
    }; 
  return (
      <>
          <Navbar />
          <div style={{
              display: 'grid',
              placeItems: 'center',
              height: '100vh',
              background: 'url(./slide2.jpg)',
              backgroundSize: 'cover',
              textAlign: 'center'
          }}>
              <div id="my_modal_4" className='text-center'>
                  <div className="modal-box w-96 md:w-[600px]">
                      <h3 className="font-bold text-4xl text-center">Sign Up</h3>
                      <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Name</span>
                              </label>
                              <input type="text" placeholder="Enter your Full Name" className="input input-bordered" required {...register("fullname", { required: true })}/>
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Email</span>
                              </label>
                              <input type="email" placeholder="Enter your email" className="input input-bordered" required {...register("email", { required: true })}/>
                          </div>
                          <div className="form-control">
                              <label className="label">
                                  <span className="label-text">Password</span>
                              </label>
                              <input type="password" placeholder="Password" className="input input-bordered" required {...register("password", { required: true })}/>
                          </div>
                          <div className="form-control mt-6">
                              <button className="btn btn-primary bg-black text-white font-bold hover:bg-slate-900">Sign Up</button>
                          </div>
                      </form>
                  </div>
              </div>
          </div>
          <Footer />
          <Toaster />
      </>
  )
}

export default Signup;
