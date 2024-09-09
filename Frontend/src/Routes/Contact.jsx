import React from 'react';
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useForm } from 'react-hook-form';

function Contact() {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm()
    const onSubmit = (data) => console.log(data);
  return (
    <div className='font-serif'>
      <Navbar />
      <div className='bg-slate-200 flex flex-col min-h-screen justify-center items-center'>
              <h1 className='text-5xl font-bold'>Contact Us</h1>
              <div className='w-full md:w-[800px]'>
                  <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text font-bold">Name</span>
                          </label>
                          <input type="text" placeholder="Full name" className="input input-bordered" required 
                          {...register("name", {required: true})}
                          />
                      </div>
                      <div className="md:flex md:flex-row md:gap-5">
                          <div className='form-control'>
                            <label className="label">
                              <span className="label-text font-bold">Email</span>
                            </label>
                            <input type="email" placeholder="Your Email address" className="input input-bordered md:w-[360px]" required 
                            {...register("email", {required: true})}
                            />
                          </div>
                          <div className='form-control'>
                            <label className="label">
                                  <span className="label-text font-bold">Phone</span>
                            </label>
                            <input type="tel" placeholder="Your telephone" className="input input-bordered md:w-[355px]" required 
                            {...register("phone", {required: true})}
                            />
                          </div>
                      </div>
                      <div className="form-control">
                          <label className="label">
                              <span className="label-text font-bold">Message</span>
                          </label>
                          <input type="text" placeholder="Your Message" className="input input-bordered h-24 " required 
                          {...register("message", {required: true})}
                          />
                      </div>
                      <div className="form-control mt-6">
                          <button className="btn bg-black btn-primary hover:bg-white hover:text-black hover:border-2 hover:border-black">Send Message</button>
                      </div>
                  </form>
              </div>  
      </div>
      <Footer />
    </div>
  )
}

export default Contact;
