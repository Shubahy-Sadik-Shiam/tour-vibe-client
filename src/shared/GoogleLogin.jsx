import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Toast from "../hooks/Toast";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useLocation, useNavigate } from "react-router-dom";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const location = useLocation();
  const navigate = useNavigate();
  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogin = () => [
    googleLogin()
      .then((res) => {
        navigate(from, {replace: true})
        const userInfo = {
          email: res.user?.email,
          name: res.user?.displayName,
          photo: res.user?.photoURL,
          role: "tourist"
        };
        axiosPublic.post("/users", userInfo).then((res) => {
          // console.log(res.data);
          if (res.data.insertedId) {
            Toast.fire({
              icon: "success",
              title: "Google login successful",
            });
          }
        });
      })
      .catch((error) => {
        // console.log(error);
        Toast.fire({
          icon: "error",
          title: "Login failed!",
        });
      }),
  ];
  return (
    <button onClick={handleGoogleLogin} className="btn text-3xl px-6">
      <FcGoogle />
    </button>
  );
};

export default GoogleLogin;
