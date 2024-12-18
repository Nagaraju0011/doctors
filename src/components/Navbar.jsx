import { Link, NavLink, useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";
import { useState } from "react";
function Navbar() {
  const navigate = useNavigate();
  //const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [token, setToken] = useState(true);
  return (
    <div className="flex items-center justify-between text-sm py-4 mb-5 border-b border-b-gray-300">
      <Link to="/">
        <img src={assets.logo} alt="logo" className="w-40 cursor-pointer" />
      </Link>
      <ul className="hidden md:flex">
        <li className="mx-3">
          <NavLink to="/">
            Home{" "}
            <hr className="border-b-2 border-primary bg-primary m-auto hidden" />
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/doctors">
            All Doctors{" "}
            <hr className="border-b-2 border-primary bg-primary m-auto hidden" />
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/about">
            About{" "}
            <hr className="border-b-2 border-primary bg-primary m-auto hidden" />
          </NavLink>
        </li>
        <li className="mx-3">
          <NavLink to="/contact">
            Contact{" "}
            <hr className="border-b-2 border-primary bg-primary m-auto hidden" />
          </NavLink>
        </li>
      </ul>
      <div className="flex items-center gap-4">
        {token ? (
          <div className="flex items-center gap-2 cursor-pointer group relative">
            <img
              src={assets.profile_pic}
              className="w-8 rounded-full outline-1"
            />
            <div className="bg-slate-300 py-2 px-3 rounded-[8px] absolute top-8 right-0 w-44 shadow-lg hidden group-hover:block">
              <p
                className="py-1 text-slate-700 hover:bg-slate-900 hover:text-white hover:px-2"
                onClick={() => navigate("/my-profile")}
              >
                My Profile
              </p>
              <p
                className="py-1 text-slate-700 hover:bg-slate-900 hover:text-white hover:px-2"
                onClick={() => navigate("/my-appointment")}
              >
                My Appointments
              </p>
              <p
                className="py-1 text-slate-700 hover:bg-slate-900 hover:text-white hover:px-2"
                onClick={() => setToken(false)}
              >
                Logout
              </p>
            </div>
          </div>
        ) : (
          <button
            className="bg-primary px-8 py-3 rounded-full font-light hidden md:block text-white"
            onClick={() => navigate("/login")}
          >
            Create Account
          </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
