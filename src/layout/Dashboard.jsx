import { NavLink, Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import logo from "../assets/logo.png";
import { IoMdHome } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useGuide from "../hooks/useGuide";

const Dashboard = () => {
  const { user } = useAuth();
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();
  return (
    <div>
      <div className="flex">
        <div className="w-1/5 bg-slate-100 min-h-screen">
          <div className="md:flex px-2 items-center justify-center mt-4">
            <div className="max-sm:hidden">
              <h2 className="lg:text-3xl font-bold">TourVibe</h2>
              <p className="text-xs lg:ml-4">Journey Beyond Limits</p>
            </div>
            <img className="w-14" src={logo} alt="" />
          </div>

          <ul className="menu space-y-3 mt-5 ">
            <li>
              <NavLink to="/">
                {" "}
                <IoMdHome className="text-2xl" /> Home
              </NavLink>
            </li>
            {
                !isAdmin && !isGuide && user && <>
                <li>
                    <NavLink to="/manageProfile">Manage Profile</NavLink>
                </li>
                <li>
                    <NavLink to="">My Bookings</NavLink>
                </li>
                <li>
                    <NavLink to="">Manage Stories</NavLink>
                </li>
                <li>
                    <NavLink to="">Add Stories</NavLink>
                </li>
                <li>
                    <NavLink to="">Join As Tour Guide</NavLink>
                </li>
                </>
            }
            {
                isGuide && <>
                <li>
                    <NavLink to="">Manage Profile</NavLink>
                </li>
                <li>
                    <NavLink to="">My Assigned Tours</NavLink>
                </li>
                <li>
                    <NavLink to="">Add Stories</NavLink>
                </li>
                <li>
                    <NavLink to="">Manage Stories</NavLink>
                </li>
                </>
            }
            {
                isAdmin && <>
                <li>
                    <NavLink to="/dashboard/manageProfile">Manage Profile</NavLink>
                </li>
                <li>
                    <NavLink to="/addPackage">Add Package</NavLink>
                </li>
                <li>
                    <NavLink to="/manageUsers">Manage Users</NavLink>
                </li>
                <li>
                    <NavLink to="/manageCandidates">Manage Candidates</NavLink>
                </li>
                </>
            }
          </ul>
        </div>
        <div>
          <Outlet></Outlet>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Dashboard;
