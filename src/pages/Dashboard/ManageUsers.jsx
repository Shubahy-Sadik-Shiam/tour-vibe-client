import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useState } from "react";

const ManageUsers = () => {
  const axiosSecure = useAxiosSecure();
  const axiosPublic = useAxiosPublic();
  const [users, setUsers] = useState([]);
  const { data: allUsers = [], refetch } = useQuery({
    queryKey: ["allUsers"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      setUsers(res.data);
      return res.data;
    },
  });

  const handleSearch = async (e) => {
    e.preventDefault();
    const query = e.target.query.value;
    const response = await axiosPublic.get(`/search?query=${query}`);
    setUsers(response.data);
    console.log(response.data);
    return response.data;
  };
  return (
    <div>
      <h2 className="text-4xl font-bold text-center bg-gradient-to-r from-black to-teal-400 bg-clip-text text-transparent my-10">
        Manage Users{" "}
      </h2>
      <div className="flex justify-between w-10/12 mx-auto">
        <div>
          <form onSubmit={handleSearch}>
            <input
              name="query"
              className="input input-accent rounded-r-none"
              placeholder="search by name/email"
              type="text"
            />
            <button
              type="submit"
              className="btn rounded-l-none btn-accent text-white"
            >
              Search
            </button>
          </form>
        </div>
        <div>
          <select className="select select-accent">
            <option disabled selected>
              Filter by role
            </option>
            <option>Admin</option>
            <option>Tour Guide</option>
            <option>Tourist</option>
          </select>
        </div>
      </div>
      <div className="w-10/12 mx-auto my-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead className="text-lg bg-accent text-white">
              <tr>
                <th></th>
                <th>User Name</th>
                <th>User Email</th>
                <th>Role</th>
              </tr>
            </thead>
            <tbody>
              {users.map((item, index) => (
                <tr key={item._id} className="bg-teal-100">
                  <th>{index + 1}</th>
                  <td>{item.name}</td>
                  <td>{item.email}</td>
                  <td>{item.role}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default ManageUsers;
