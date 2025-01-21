import { Link, NavLink, useLocation } from "react-router-dom";
import logo from "../assets/logo.png";
import useAuth from "../hooks/useAuth";
import Swal from "sweetalert2";
import Toast from "../hooks/Toast";

const Navbar = () => {
  const { user, logOut } = useAuth();
  const location = useLocation();
  const isNotHomePage = location.pathname !== "/";
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
        className={`navbar w-10/12 fixed z-10 lg:left-32 md:left-16 left-9 text-white py-4 border-b ${
          isNotHomePage ? "bg-blue-500" : "bg-transparent"
        }`}
      >
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
                  className="dropdown-content  bg-black bg-opacity-20 backdrop-blur-lg rounded-box z-[1] w-52 p-2 shadow"
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
                    <a>Dashboard</a>
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
