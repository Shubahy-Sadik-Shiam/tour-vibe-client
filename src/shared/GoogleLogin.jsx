import { FcGoogle } from "react-icons/fc";
import useAuth from "../hooks/useAuth";
import Toast from "../hooks/Toast";

const GoogleLogin = () => {
  const { googleLogin } = useAuth();

  const handleGoogleLogin = () => [
    googleLogin()
      .then((res) => {
        Toast.fire({
          icon: "success",
          title: "Google login successful",
        });
      })
      .catch((error) => {
        console.log(error);
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
