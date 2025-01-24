import { Link, NavLink, Outlet } from "react-router-dom";
import Footer from "../shared/Footer";
import logo from "../assets/logo.png";
import { IoMdHome } from "react-icons/io";
import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import useGuide from "../hooks/useGuide";
import { Helmet } from "react-helmet-async";
import Toast from "../hooks/Toast";
import Swal from "sweetalert2";

const Dashboard = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [isGuide] = useGuide();

  const handleLogOut = () => {
    Swal.fire({
      title: "Are you sure you want to logout?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Log out",
    }).then((result) => {
      if (result.isConfirmed) {
        logOut().then((res) => {
          Toast.fire({
            icon: "success",
            title: "See you again soon!",
          });
        });
      }
    });
  };
  return (
    <div>
      <Helmet>
        <title>Dashboard - TourVibe</title>
      </Helmet>
      <div className="flex">
        <div className="w-1/5 bg-accent">
          <div className="md:flex px-2 items-center justify-center mt-6 text-white">
            <div className="max-sm:hidden">
              <h2 className="lg:text-3xl font-bold">TourVibe</h2>
              <p className="text-xs lg:ml-4">Journey Beyond Limits</p>
            </div>
            <img className="w-14" src={logo} alt="" />
          </div>

          <div className="my-10 w-8/12 mx-auto">
            <Link to="/">
              <button className="btn btn-block btn-outline text-white">
                {" "}
                <IoMdHome className="text-2xl" /> Home
              </button>
            </Link>
            <button onClick={handleLogOut} className="btn btn-outline text-white btn-block mt-4">
              Log out
            </button>
          </div>

          <ul className="menu space-y-3 mt-5 ">
            {!isAdmin && !isGuide && user && (
              <>
                <li>
                  <NavLink to="/dashboard/manageProfile">
                    Manage Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myBookings">My Bookings</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageStories">
                    Manage Stories
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addStories">Add Stories</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/joinAsGuide">
                    Join As Tour Guide
                  </NavLink>
                </li>
              </>
            )}
            {isGuide && (
              <>
                <li>
                  <NavLink to="/dashboard/manageProfile">
                    Manage Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/myAssignedTours">
                    My Assigned Tours
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addStories">Add Stories</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageStories">
                    Manage Stories
                  </NavLink>
                </li>
              </>
            )}
            {isAdmin && (
              <>
                <li>
                  <NavLink to="/dashboard/manageProfile">
                    Manage Profile
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/addPackage">Add Package</NavLink>
                </li>
                <li>
                  <NavLink to="/manageUsers">Manage Users</NavLink>
                </li>
                <li>
                  <NavLink to="/dashboard/manageCandidates">
                    Manage Candidates
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="flex-1">
          <div className="min-h-[450px]">
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
