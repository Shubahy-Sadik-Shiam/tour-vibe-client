import { FcGoogle } from "react-icons/fc";
import img from "../assets/login.webp";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link } from "react-router-dom";
const Login = () => {
  return (
    <div className="lg:flex lg:hero lg:h-[728px]">
      <div
        style={{
          backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.3)), url(${img})`,
        }}
        className="lg:w-1/2 min-h-screen flex flex-col justify-center items-center"
      >
        <div>
          <h2 className="text-6xl text-white font-bold text-center mb-4 font-serif">
            Tour Vibe
          </h2>
          <p className="text-xl text-white text-center font-serif">
            Travel is the only purchase that enriches you <br /> in ways beyond
            material wealth
          </p>
        </div>
      </div>
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-bold text-center text-info">
          Welcome
        </h2>
        <p className="text-center mt-2">Login with Email</p>
        <form className="w-1/2 mx-auto mt-4">
          <div>
            <label className="label">
              <span className="label-text text-info font-semibold">
                Email
              </span>
            </label>
            <label className="input input-bordered input-info flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input type="text" className="grow" placeholder="Email" />
            </label>
          </div>
          <div>
            <label className="label">
              <span className="label-text mt-3 text-info font-semibold">
                Password
              </span>
            </label>
            <label className="input input-bordered input-info flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                className="grow"
                placeholder="Type your password here"
              />
            </label>
            <label className="label">
              <a
                href="#"
                className="label-text-alt link link-hover text-info font-semibold"
              >
                Forgot password?
              </a>
            </label>
          </div>
          <button type="submit" className="btn my-3 btn-info btn-block text-white">
            Login
          </button>
        </form>
        <div className="divider w-1/3 mx-auto">OR</div>
        <div className="flex justify-center gap-3">
          <button className="btn text-3xl px-6">
            <FcGoogle />
          </button>
          <button className="btn text-3xl px-6">
            <FaGithub />
          </button>
          <button className="btn text-3xl px-6 text-blue-600">
            <FaFacebook />
          </button>
        </div>
        <p className="text-center mt-4">
          Don't have an account?
          <Link to="/register"><span className="font-bold text-info"> Register Now</span></Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
