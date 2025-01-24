import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { FaUserEdit } from "react-icons/fa";
import ModalEditProfile from "../../components/ModalEditProfile";

const ManageProfile = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: userInfo = {}, refetch } = useQuery({
    queryKey: ["userInfo", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/${user?.email}`);
      return res.data;
    },
  });
  return (
    <div className="w-10/12 mx-auto mb-10">
      <p className="mt-5 mb-10 text-xl font-bold">
        Welcome, <span className="text-2xl text-accent">{userInfo?.name}!</span>{" "}
        <br /> Your Dashboard is ready—time to shine!
      </p>
      <div className="flex flex-col justify-center items-center pt-10 gap-3 bg-teal-100 rounded-t-lg">
        <div className="bg-white rounded-full p-4">
          <img
            className="w-60 h-60 rounded-full object-cover"
            src={userInfo?.photo}
            alt=""
          />
          <div className="relative">
            <FaUserEdit
              onClick={() => document.getElementById("my_modal_5").showModal()}
              className="absolute bottom-2 -right-1 bg-gray-300 rounded-full p-3 border-4 btn btn-circle btn-lg"
            />
          </div>
        </div>
        <h2 className="text-4xl text-white font-bold text-center">
          {userInfo?.name}
        </h2>
        <p className="text-gray-100 text-lg">{userInfo?.email}</p>
        <p className="text-gray-100 text-lg">Role: {userInfo?.role}</p>
      </div>
      <div className="bg-accent min-h-64 -mt-60 rounded-b-lg"></div>
      <div className=" flex justify-center">
        <button className="btn btn-accent mt-3 text-white w-64">
          Apply For Tour Guide
        </button>
      </div>
      <ModalEditProfile
       userInfo={userInfo}
       refetch={refetch}></ModalEditProfile>
    </div>
  );
};

export default ManageProfile;
