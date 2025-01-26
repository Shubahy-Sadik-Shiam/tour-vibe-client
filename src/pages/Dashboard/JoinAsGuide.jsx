import Swal from "sweetalert2";
import Toast from "../../hooks/Toast";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const JoinAsGuide = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const reason = form.reason.value;
    const cv = form.cv.value;
    const application = {
      reason,
      cv,
      email: user.email,
      role: "tourist",
    };

    const res = await axiosSecure.post("/application", application);
    if (res.data.insertedId) {
        Swal.fire({
            title: "Successful!",
            text: "Your application is successful",
            icon: "success"
          });
      form.reset();
    }
  };
  return (
    <div>
      <form
        onSubmit={handleSubmit}
        className="bg-teal-100 w-1/2 mx-auto p-10 my-10 rounded-xl"
      >
        <p className="text-3xl font-bold text-center mb-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
          Join As a Tour Guide
        </p>
        <p className="mb-2">Why wants to be a Tour Guide?</p>
        <textarea
          required
          name="reason"
          className="textarea h-28 textarea-accent mb-4 w-full"
          placeholder="write here..."
        ></textarea>
        <p className="mb-2">CV Link</p>
        <input
          required
          type="url"
          name="cv"
          className="input input-accent w-full mb-5"
          placeholder="drop your cv link here"
        />
        <div className="flex justify-center">
          <button className="btn btn-accent w-52 text-white" type="submit">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default JoinAsGuide;
