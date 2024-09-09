import React from 'react';
import { useAuth } from '../context/AuthProvider';
import toast from "react-hot-toast";
import { Link } from 'react-router-dom';

function Logout() {
    const [authUser, setAuthUser] = useAuth();
    const handleLogout=()=>{
        try {
            setAuthUser({
                ...authUser,
                user:null,
            });
            toast.success("Logout Successfully");
            setTimeout(()=>{
                localStorage.removeItem("Users");
                window.location.reload();
            }, 1000);
        } catch (error) {
            toast.error("Error:"+error.message);
            setTimeout(() => {}, 2000)
        }
    }
    return (
      <div className="navbar-end">
          <Link to="/cart" className="border-2 border-black text-black rounded-md hover:bg-black hover:text-white hover:border-0 duration-300 px-3 py-1.5 hover:py-2 cursor-pointer hover:outline-2 w-20 text-center font-bold text-nowrap">Cart</Link>
          <button className="text-white bg-red-600 rounded-md hover:bg-red-700 duration-300 px-3 py-2 cursor-pointer hover:outline-2 w-20 text-center text-nowrap mx-1" onClick={handleLogout}>Logout</button>
      </div>
    )
}

export default Logout;
