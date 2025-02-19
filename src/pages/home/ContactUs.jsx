import Lottie from "lottie-react";
import data from "../../assets/lottie2.json";
import { FaFacebook, FaGithub, FaLinkedinIn } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
const ContactUs = () => {
  return (
    <div className="w-10/12 mx-auto my-24">
      <h2 className="lg:text-5xl md:text-4xl text-3xl font-semibold text-center mb-16 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        Contact Us
      </h2>
      <div className="md:flex gap-10 items-center">
        <div className="md:w-1/2">
          <Lottie animationData={data}></Lottie>
        </div>
        <div className="md:w-1/2">
          <div className="bg-teal-100 rounded-lg flex flex-col items-center pt-5 pb-10">
            <p className="text-lg"> Email: shorgoshiam@gmail.com</p>
            <p className="text-lg">Phone: 01317129812</p>
            <div className="text-lg w-80 mx-auto rounded-md bg-teal-200 mt-5 px-10 py-5">
              <p className="text-2xl text-center mb-5 font-semibold">Let's Connect</p>
              <a
                href="https://www.linkedin.com/in/shubahy-sadik-shiam-63044834b/"
                target="_blank"
              >
                <button className="btn btn-accent btn-block text-lg">
                  LinkedIn
                  <FaLinkedinIn className="text-3xl text-white bg-blue-400 p-1" />
                </button>
              </a>
              <a href="https://github.com/Shubahy-Sadik-Shiam" target="_blank">
                <button className="btn text-lg btn-accent btn-block my-3">
                  Github <FaGithub className="text-3xl" />
                </button>
              </a>
              <a href="https://web.facebook.com/shorgo.shiam" target="_blank">
                <button className="btn text-lg btn-block text-white btn-accent">
                  Facebook{" "}
                  <CiFacebook className="text-3xl text-white rounded-full" />
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
