import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { useForm } from "react-hook-form";
import axios from "axios";
import toast, { Toaster } from 'react-hot-toast';

function Login() {
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/store";

    const {
        register,
        handleSubmit,
    } = useForm()
    const onSubmit = async (data) => {
        const userInfo = {
            email: data.email,
            password: data.password,
        }
        await axios
            .post("http://localhost:3000/user/login", userInfo)
            .then((res) => {
                console.log(res.data);
                if (res.data) {
                    toast.success("Hi "+res.data.user.fullname+" Welcome");
                    document.getElementById("my_modal_3").close();
                    navigate(from, { replace: true });
                    setTimeout(()=>{
                        localStorage.setItem("Users", JSON.stringify(res.data.user));
                        window.location.reload();
                    }, 1000);
                }
            })
            .catch((err) => {
                if (err.response) {
                    console.log(err);
                    toast.error(err.response.data.message);
                    setTimeout(()=>{}, 2000);
                }
            });
    };
return (
    <div>
        <dialog id="my_modal_3" className="modal">
            <div className="modal-box" style={
                {
                    background: "url(./slide2.jpg)"
                }
            }>
                <form method="dialog">
                    <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                </form>
                <h2 className="font-bold text-4xl text-center text-white">Login</h2>
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" placeholder="Enter your email" className="input input-bordered" required
                                    {...register("email", { required: true })}
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input type="password" placeholder="Password" className="input input-bordered" required
                                    {...register("password", { required: true })}
                                />
                                <label className="labelsmall md:label">
                                    <a href="#" className="label-text-alt link link-hover mt-2">Forgot password?</a>
                                    <span className='label label-text-alt mt-2'>
                                        Not Registered?
                                        <Link to="/signup" className="label-text-alt link link-hover ml-2 text-blue-700">Sign Up</Link>
                                    </span>
                                </label>
                            </div>
                            <div className="form-control mt-2">
                                <button className="btn btn-primary text-white bg-black hover:bg-slate-900 duration-200">Login</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </dialog>
        <Toaster />
    </div>
)
}

export default Login;
