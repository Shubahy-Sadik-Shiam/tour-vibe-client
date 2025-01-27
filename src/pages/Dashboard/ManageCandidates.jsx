import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import Swal from "sweetalert2";

const ManageCandidates = () => {
  const axiosSecure = useAxiosSecure();
  const { data: applications = [], refetch } = useQuery({
    queryKey: ["applications"],
    queryFn: async () => {
      const res = await axiosSecure.get("/application");
      return res.data;
    },
  });

  const handleAccept = (item) => {
    axiosSecure
      .patch(`/changeRole/${item.email}`, { role: "guide" })
      .then((res) => {
        if (res.data.modifiedCount > 0) {
          axiosSecure.delete(`/application/${item._id}`).then((res) => {
            if (res.data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Application has been deleted",
                icon: "success",
              });
              refetch();
            }
          });
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
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(`/application/${item._id}`);
        // console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: "Application has been deleted",
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent my-10">
        Manage Candidates
      </h2>

      <div className="w-10/12 mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg bg-accent text-white">
              <tr>
                <th></th>
                <th>User Email</th>
                <th>CV</th>
                <th>Role</th>
                <th>Accept</th>
                <th>Reject</th>
              </tr>
            </thead>
            <tbody>
              {applications.map((item, index) => (
                <tr key={item._id} className="bg-teal-100">
                  <th>{index + 1}</th>
                  <td>{item.email}</td>
                  <td>{item.cv}</td>
                  <td>{item.role}</td>
                  <td>
                    <button
                      onClick={() => handleAccept(item)}
                      className="btn btn-sm text-white btn-success"
                    >
                      Accept
                    </button>
                  </td>
                  <td>
                    <button
                      onClick={() => handleReject(item)}
                      className="btn btn-sm text-white btn-error"
                    >
                      Reject
                    </button>
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

export default ManageCandidates;
