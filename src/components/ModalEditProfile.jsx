import Toast from "../hooks/Toast";
import useAuth from "../hooks/useAuth";
import useAxiosSecure from "../hooks/useAxiosSecure";

const ModalEditProfile = ({userInfo, refetch}) => {
  const {updateUserInfo, user} = useAuth();
  const axiosSecure = useAxiosSecure();

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const updateInfo = {name, photo};

        updateUserInfo(name, photo).then(res=>{
          axiosSecure.patch(`/users/${user?.email}`, updateInfo)
          .then(res=>{
            if(res.data.modifiedCount){
              refetch();
              Toast.fire({
                icon: "success",
                title: "Your profile is updated",
              });
            }
          })
        })
    }
  return (
    <div>
      <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
            {/* if there is a button in form, it will close the modal */}
            <button  onClick={() => document.getElementById("my_modal_5").close()} className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
              ✕
            </button>
          <h3 className="font-bold text-lg text-center mb-4">Update Your Information!</h3>
         <form onSubmit={handleUpdate} className="w-10/12 mx-auto border-2 p-6 border-accent rounded-xl">
         {/* name */}
            <p className="mb-1">Name</p>
            <input defaultValue={userInfo?.name} className="input w-full input-bordered input-accent" type="text" name="name"/>
         {/* photo */}
            <p className="mb-1">Photo</p>
            <input defaultValue={userInfo?.photo} className="input w-full input-bordered input-accent" type="url" name="photo"/>
         {/* email */}
            <p className="mb-1">Email</p>
            <input readOnly value={userInfo?.email} className="input w-full input-bordered input-accent" type="email" name="email"/>
         {/* role */}
            <p className="mb-1">Role</p>
            <input readOnly value={userInfo?.role} className="input w-full input-bordered input-accent" type="text" name="role"/>
            {/* submit button */}

            <input className="btn btn-block btn-accent mt-3 text-white" type="submit" value="Update Information" />
         </form>
        </div>
      </dialog>
    </div>
  );
};

export default ModalEditProfile;
