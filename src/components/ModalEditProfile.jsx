const ModalEditProfile = ({userInfo}) => {

    const handleUpdate = e => {
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const role = form.role.value;
        console.log(name, photo, email, role);
    }
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
