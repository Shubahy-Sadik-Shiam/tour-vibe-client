import img from "../assets/register.webp";
import { FaFacebook, FaGithub } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import GoogleLogin from "../shared/GoogleLogin";
import Toast from "../hooks/Toast";
import { useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import useAxiosPublic from "../hooks/useAxiosPublic";
const Register = () => {
  const { updateUserInfo, createUser } = useAuth();
  const axiosPublic= useAxiosPublic();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    createUser(data.email, data.password).then((result) => {
      updateUserInfo(data.name, data.photo)
        .then(() => {
          // save user info in the database
          const userInfo = {
            name: data.name,
            email: data.email,
            photo: data.photo,
            role: "tourist"
          };
          axiosPublic.post("/users", userInfo).then((res) => {
            console.log(res.data);
            if (res.data.insertedId) {
              Toast.fire({
                icon: "success",
                title: "Account created successfully",
              });
              navigate("/");
            }
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: "Something went wrong. Please try later!",
          });
        });
    });
  };

  return (
    <div className="lg:flex lg:hero lg:h-[728px]">
      <Helmet>
        <title>Sign up - TourVibe</title>
      </Helmet>
      <div className="lg:w-1/2">
        <h2 className="text-5xl font-bold text-center text-accent">
          New at TourVibe?
        </h2>
        <p className="text-center mt-2">Sign Up with Email</p>
        <form onSubmit={handleSubmit(onSubmit)} className="w-1/2 mx-auto mt-4">
          {/* Name */}
          <div>
            <label className="label">
              <span className="label-text text-accent font-semibold">
                User Name
              </span>
            </label>
            <label className="input input-bordered input-accent flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6ZM12.735 14c.618 0 1.093-.561.872-1.139a6.002 6.002 0 0 0-11.215 0c-.22.578.254 1.139.872 1.139h9.47Z" />
              </svg>
              <input
                {...register("name")}
                type="text"
                required
                className="grow"
                placeholder="Username"
              />
            </label>
          </div>
          {/* Photo */}
          <div>
            <label className="label">
              <span className="label-text text-accent font-semibold">
                Image
              </span>
            </label>
            <label className="input input-bordered input-accent flex items-center gap-2">
              <input
                {...register("photo")}
                type="url"
                required
                className="grow"
                placeholder="User Image"
              />
            </label>
          </div>
          {/* Email */}
          <div>
            <label className="label">
              <span className="label-text text-accent font-semibold">
                Email
              </span>
            </label>
            <label className="input input-bordered input-accent flex items-center gap-2">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="h-4 w-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                {...register("email")}
                type="email"
                required
                className="grow"
                placeholder="Email"
              />
            </label>
          </div>
          {/* Password */}
          <div>
            <label className="label">
              <span className="label-text text-accent font-semibold">
                Password
              </span>
            </label>
            <label className="input input-bordered input-accent flex items-center gap-2">
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
                {...register("password", {
                  minLength: 6,
                  pattern: /(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&])(?=.*[0-9])/,
                })}
                type="password"
                required
                className="grow"
                placeholder="Type your password here"
              />
            </label>
            {errors.password?.type === "minLength" && (
              <span className="text-sm text-red-500">
                Password must be at least 6 characters
              </span>
            )}
            {errors.password?.type === "pattern" && (
              <span className="text-sm text-red-500">
                Password must have at least one uppercase, one lowercase, one
                number and one special character!
              </span>
            )}
          </div>
          <button
            type="submit"
            className="btn my-3 btn-block btn-accent text-white"
          >
            Sign Up
          </button>
        </form>
        <div className="divider w-1/3 mx-auto">OR</div>
        <div className="flex justify-center gap-3">
          <GoogleLogin></GoogleLogin>
          <button className="btn text-3xl px-6">
            <FaGithub />
          </button>
          <button className="btn text-3xl px-6 text-blue-600">
            <FaFacebook />
          </button>
        </div>
        <p className="text-center mt-4">
          Already have an account?
          <Link to="/login">
            <span className="font-bold text-accent"> Login Now</span>
          </Link>
        </p>
      </div>
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
    </div>
  );
};

export default Register;
