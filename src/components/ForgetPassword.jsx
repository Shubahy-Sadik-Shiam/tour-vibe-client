import Toast from "../hooks/Toast";
import useAuth from "../hooks/useAuth";

const ForgetPassword = () => {
  const { passwordReset } = useAuth();
  const handleForgetPassword = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    passwordReset(email)
      .then((res) => {
        e.target.reset();
        Toast.fire({
          icon: "success",
          title: "Check your email to reset password",
        });
      })
      .catch((error) => {
        Toast.fire({
          icon: "error",
          title: "Something went wrong",
        });
      });
  };
  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}
      {/* <button
        className="btn"
        onClick={() => document.getElementById("my_modal_5").showModal()}
      >
        open modal
      </button> */}
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
          <form method="dialog">
            {/* if there is a button in form, it will close the modal */}
            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          </form>
          <h3 className="font-bold text-2xl text-center text-info my-3">
            Send a password reset email
          </h3>
          <form
            onSubmit={handleForgetPassword}
            className="flex flex-col items-center"
          >
            <input
              name="email"
              type="email"
              placeholder="Type your email here"
              required
              className="input mb-3 input-bordered input-info w-full max-w-xs"
            />
            <input
              className="btn w-80 text-white btn-info"
              type="submit"
              value="Send Email"
            />
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default ForgetPassword;
