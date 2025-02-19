import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <footer className="footer footer-center bg-gradient-to-tl from-teal-900 via-teal-500 to-teal-700 text-white rounded p-10">
      <nav className="grid grid-flow-col gap-4">
        <Link to="/" className="link link-hover">Home</Link>
        <Link to="/aboutUs" className="link link-hover">About us</Link>
        <Link to="/trips" className="link link-hover">Trips</Link>
        <Link to="/community" className="link link-hover">Community</Link>
      </nav>
      <nav className="md:flex md:gap-10 gap-5">
        <div className="grid grid-flow-col gap-4">
          <a
            href="https://github.com/Shubahy-Sadik-Shiam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.207 11.385.6.113.793-.258.793-.577v-2.234c-3.338.724-4.042-1.416-4.042-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.091-.745.083-.729.083-.729 1.205.085 1.84 1.24 1.84 1.24 1.07 1.835 2.809 1.304 3.495.997.108-.775.419-1.305.762-1.605-2.665-.303-5.467-1.333-5.467-5.93 0-1.31.469-2.38 1.235-3.22-.123-.303-.536-1.523.117-3.176 0 0 1.008-.322 3.3 1.23.957-.266 1.983-.398 3.003-.402 1.02.004 2.047.136 3.005.402 2.29-1.552 3.297-1.23 3.297-1.23.655 1.653.242 2.873.12 3.176.77.84 1.233 1.91 1.233 3.22 0 4.609-2.807 5.625-5.48 5.921.43.372.814 1.103.814 2.222v3.293c0 .322.192.694.8.576 4.765-1.587 8.2-6.084 8.2-11.385 0-6.627-5.373-12-12-12z"></path>
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/shubahy-sadik-shiam/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.761 0 5-2.239 5-5v-14c0-2.761-2.239-5-5-5zm-11 19h-3v-10h3v10zm-1.5-11.433c-.966 0-1.75-.784-1.75-1.75s.784-1.75 1.75-1.75 1.75.784 1.75 1.75-.784 1.75-1.75 1.75zm13.5 11.433h-3v-5.5c0-1.381-1.119-2.5-2.5-2.5s-2.5 1.119-2.5 2.5v5.5h-3v-10h3v1.539c.838-1.288 2.647-1.539 3.5-1.539 2.481 0 4.5 2.019 4.5 4.5v5.5z"></path>
            </svg>
          </a>

          <a
            href="https://web.facebook.com/shorgo.shiam"
            target="_blank"
            rel="noopener noreferrer"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              className="fill-current"
            >
              <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path>
            </svg>
          </a>
        </div>
        <div className="flex items-center">
          <div>
            <Link to="/" className="text-4xl font-bold">TourVibe</Link>
            <p className="text-xs ml-8 font-semibold">Journey Beyond Limits</p>
          </div>
          <img className="w-20 object-cover" src={logo} alt="" />
        </div>
      </nav>
      <aside>
        <p>
          Copyright © {new Date().getFullYear()} - All right reserved by ACME
          Industries Ltd
        </p>
      </aside>
    </footer>
  );
};

export default Footer;
