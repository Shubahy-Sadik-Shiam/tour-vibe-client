import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import Toast from "../hooks/Toast";
import useAdmin from "../hooks/useAdmin";
import { useEffect, useState } from "react";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDark, setIsDark] = useState(
    localStorage.getItem("theme") === "dark"
  );

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
      <li>
        <label className="flex cursor-pointer gap-2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="5" />
            <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
          </svg>
          <input
            type="checkbox"
            value="dark"
            checked={isDark}
            onChange={() => setIsDark(!isDark)}
            className="toggle theme-controller"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
          </svg>
        </label>
      </li>
    </>
  );

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add("dark");
      document.body.style.backgroundColor = "black";
      localStorage.setItem("theme", "dark");
    } else {
      document.documentElement.classList.remove("dark");
      document.body.style.backgroundColor = "#FFFFF0";
      localStorage.setItem("theme", "light");
    }
  }, [isDark]);

  useEffect(() => {
    if(isNotHomePage) return;
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then((res) => {
          Toast.fire({
            icon: "success",
            title: "See you again soon!",
          });
        });
      }
    });
  };
  return (
    <div>
      <div
        className={`navbar md:px-10 fixed z-10 text-white p-4  ${
          isNotHomePage ? "bg-gradient-to-br from-teal-900 via-teal-500 to-teal-700 " : `bg-transparent ${isScrolled ? "bg-gradient-to-br from-teal-900 via-teal-500 to-teal-700" : ""}`
        }`}
      >
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-7 w-7"
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
              className="menu menu-sm dropdown-content bg-white rounded-box z-[1] text-black mt-3 w-52 p-2 shadow"
            >
              {links}
            </ul>
          </div>
          <div>
            <div className="flex">
              <Link to="/" className="text-4xl font-bold">TourVibe</Link>
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
              <div className="dropdown dropdown-hover dropdown-bottom dropdown-end">
                <div tabIndex={0} role="button" className=" m-1">
                  <img
                    className="w-14 h-14 mr-2 rounded-full object-cover"
                    src={user?.photoURL}
                    alt=""
                  />
                </div>
                <ul
                  tabIndex={0}
                  className="dropdown-content  bg-black bg-opacity-70 mt-5 backdrop-blur-lg  rounded-box z-[1] w-52 p-2 shadow"
                >
                  <div className="flex flex-col items-center">
                    <img
                      className="w-20 h-20 my-2 rounded-full object-cover"
                      src={user?.photoURL}
                      alt=""
                    />
                    <p className="text-lg font-bold">{user?.displayName}</p>
                    <p className="">{user?.email}</p>
                  </div>
                  <li className="btn btn-block btn-xs my-2">
                    <a onClick={handleLogOut}>Log out</a>
                  </li>
                  <li className="btn btn-block btn-xs mb-2">
                    <Link to={isAdmin?"/dashboard/adminProfile":"/dashboard/manageProfile" }>Dashboard</Link>
                  </li>
                </ul>
              </div>
            </>
          ) : (
            <>
              <Link className="mr-1 font-semibold underline" to="/login">
                Login
              </Link>{" "}
              /
              <Link className="ml-1 underline font-semibold" to="/register">
                {" "}
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
