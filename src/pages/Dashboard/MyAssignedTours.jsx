import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";
import Toast from "../../hooks/Toast";

const MyAssignedTours = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: assignedTours = [], refetch } = useQuery({
    queryKey: ["assignedTours", user?.displayName],
    queryFn: async () => {
      const res = await axiosSecure.get(`/myAssignedTours/${user.displayName}`);
      return res.data;
    },
  });

  const handleAccept = (item) => {
    axiosSecure
      .patch(`/status/${item._id}`, { status: "accepted" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          Toast.fire({
            icon: "success",
            title: "Tour has been accepted successfully",
          });
          refetch();
        }
      });
  };
  const handleReject = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure
          .patch(`/status/${item._id}`, { status: "rejected" })
          .then((res) => {
            if (res.data.modifiedCount > 0) {
              Toast.fire({
                icon: "success",
                title: "Tour has been rejected",
              });
              refetch();
            }
          });
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">
        My Assigned Tours
      </h2>
      <div className="w-10/12 mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg bg-accent text-white">
              <tr>
                <th></th>
                <th>Package Name</th>
                <th>Tourist Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {assignedTours.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.packageName}</td>
                  <td>{item.touristName}</td>
                  <td>{item.date}</td>
                  <td>BDT {item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    <button
                      onClick={() => handleAccept(item)}
                      disabled={item.status !== "in review"}
                      className="btn btn-accent btn-sm text-white"
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    {item.status === "pending" && (
                      <button
                        onClick={() => handleReject(item)}
                        className="btn btn-error text-white btn-sm "
                      >
                        Reject
                      </button>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default MyAssignedTours;
