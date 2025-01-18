import { Link, NavLink } from "react-router-dom";
import logo from "../assets/logo.png"


const Navbar = () => {
  const user = false;
    const links = (
        <>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <li>
            <NavLink to="/community">Community</NavLink>
          </li>
          <li>
            <NavLink to="/aboutUs">About Us</NavLink>
          </li>
          <li>
            <NavLink to="/trips">Trips</NavLink>
          </li>
        </>
      );
    return (
        <div>
        <div className="navbar w-10/12 fixed z-10  lg:left-32 md:left-16 left-9 text-white py-4">
          <div className="navbar-start">
            <div className="dropdown">
              <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] text-black mt-3 w-52 p-2 shadow"
              >
                {links}
              </ul>
            </div>
            <div>
            <div className="flex">
            <a className="text-4xl font-bold">TourVibe</a>
            <img className="w-10 object-cover" src={logo} alt="" />
            </div>
            <p className="text-xs ml-10">Journey Beyond Limits</p>
            </div>
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{links}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <img
                  className="w-12 h-12 mr-2 rounded-full object-cover"
                  src={user?.photoURL}
                  alt=""
                />
                <button onClick={logOut} className="btn">
                  LogOut
                </button>
              </>
            ) : (
              <Link to="/login" className="btn">
                Login
              </Link>
            )}
          </div>
          {/* <div className="navbar-end">
            <button className="btn text-white btn-outline">Login</button>
          </div> */}
        </div>
      </div>
    );
};

export default Navbar;