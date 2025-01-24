import { useQuery } from "@tanstack/react-query";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import { MdCancel } from "react-icons/md";
import Swal from "sweetalert2";

const MyBookings = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  const { data: bookings = [], refetch } = useQuery({
    queryKey: ["bookings", user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(`/bookings/${user?.email}`);
      console.log(res.data);
      return res.data;
    },
  });

  const handleCancelBooking = (item) => {
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
        const res = await axiosSecure.delete(`/bookings/${item._id}`);
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          Swal.fire({
            title: "Deleted!",
            text: `Booking for ${item?.packageName} has been cancelled`,
            icon: "success",
          });
          refetch();
        }
      }
    });
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center my-10 bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent">My Upcoming Tours</h2>

      <div className="w-10/12 mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg bg-accent text-white">
              <tr>
                <th></th>
                <th>Package Name</th>
                <th>Guide Name</th>
                <th>Tour Date</th>
                <th>Price</th>
                <th>Status</th>
                <th>Payment</th>
                <th>Cancel</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((item, index) => (
                <tr key={item._id} className="bg-base-200">
                  <th>{index + 1}</th>
                  <td>{item.packageName}</td>
                  <td>{item.guide}</td>
                  <td>{item.date}</td>
                  <td>BDT {item.price}</td>
                  <td>{item.status}</td>
                  <td>
                    <button className="btn btn-accent btn-sm text-white">Pay</button>
                  </td>
                  <td>
                    {
                        item.status === "pending" && <button onClick={()=>handleCancelBooking(item)} className="btn btn-circle btn-sm "><MdCancel className="text-2xl text-red-500"/>
                    </button>
                    }
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

export default MyBookings;
