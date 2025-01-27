import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import ManageProfile from "./ManageProfile";

const AdminProfile = () => {
    const axiosSecure = useAxiosSecure();
    const { data: stats = {} } = useQuery({
      queryKey: ["stats"],
      queryFn: async () => {
        const res = await axiosSecure.get("/adminStats");
        return res.data;
      },
    });
  return (
    <div>
      <ManageProfile></ManageProfile>
     <div className="w-10/12 mx-auto my-10">
     <div className="stats stats-vertical lg:stats-horizontal shadow w-full bg-teal-200">
        <div className="stat">
          <div className="stat-title text-lg font-semibold">Total Payment</div>
          <div className="stat-value">{stats.revenue} BDT</div>
          <div className="stat-desc">Jan 1st - Feb 1st</div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg font-semibold">Total Tour Guides</div>
          <div className="stat-value">{stats.guides}</div>
          <div className="stat-desc">↗︎ 400 (22%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg font-semibold">Total Packages</div>
          <div className="stat-value">{stats.packages}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg font-semibold">Total Clients</div>
          <div className="stat-value">{stats.tourists}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>

        <div className="stat">
          <div className="stat-title text-lg font-semibold">Total Stories</div>
          <div className="stat-value">{stats.stories}</div>
          <div className="stat-desc">↘︎ 90 (14%)</div>
        </div>
      </div>
     </div>
    </div>
  );
};

export default AdminProfile;
