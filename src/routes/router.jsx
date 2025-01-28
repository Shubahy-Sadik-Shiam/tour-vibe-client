import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/Home";
import Login from "../pages/Login";
import Register from "../pages/Register";
import TourDetails from "../pages/tourDetails/TourDetails";
import GuideProfile from "../pages/GuideProfile";
import AboutUs from "../pages/AboutUs";
import AllTours from "../pages/AllTours";
import Community from "../pages/Community";
import Dashboard from "../layout/Dashboard";
import ManageProfile from "../pages/Dashboard/ManageProfile";
import PrivateRoute from "./PrivateRoute";
import MyBookings from "../pages/Dashboard/MyBookings";
import AddStories from "../pages/Dashboard/AddStories";
import ManageStory from "../pages/Dashboard/ManageStory";
import JoinAsGuide from "../pages/Dashboard/JoinAsGuide";
import EditStory from "../pages/Dashboard/EditStory";
import MyAssignedTours from "../pages/Dashboard/MyAssignedTours";
import GuideRoutes from "./GuideRoutes";
import Payment from "../pages/Dashboard/Payment";
import AdminRoutes from "./AdminRoutes";
import ManageUsers from "../pages/Dashboard/ManageUsers";
import ManageCandidates from "../pages/Dashboard/ManageCandidates";
import AdminProfile from "../pages/Dashboard/AdminProfile";
import ErrorPage from "../pages/ErrorPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tourDetails/:id",
        element: <TourDetails></TourDetails>,
        loader: ({ params }) =>
          fetch(`https://tour-vibe-server.vercel.app/packages/${params.id}`),
      },
      {
        path: "/guideProfile/:id",
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) =>
          fetch(`https://tour-vibe-server.vercel.app/guide/${params.id}`),
      },
      {
        path: "/aboutUs",
        element: <AboutUs></AboutUs>,
      },
      {
        path: "/trips",
        element: <AllTours></AllTours>,
      },
      {
        path: "/community",
        element: <Community></Community>,
      },
    ],
  },
  {
    path: "/login",
    element: <Login></Login>,
  },
  {
    path: "/register",
    element: <Register></Register>,
  },
  {
    path: "/dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      // tourist routes
      {
        path: "manageProfile",
        element: <ManageProfile></ManageProfile>,
      },
      {
        path: "myBookings",
        element: <MyBookings></MyBookings>,
      },
      {
        path: "addStories",
        element: <AddStories></AddStories>,
      },
      {
        path: "manageStories",
        element: <ManageStory></ManageStory>,
      },
      {
        path: "joinAsGuide",
        element: <JoinAsGuide></JoinAsGuide>,
      },
      {
        path: "editStory/:id",
        element: <EditStory></EditStory>,
      },
      {
        path: "payment/:id",
        element: <Payment></Payment>,
      },
      // Guide routes
      {
        path: "myAssignedTours",
        element: (
          <GuideRoutes>
            <MyAssignedTours></MyAssignedTours>
          </GuideRoutes>
        ),
      },
      // admin route
      {
        path: "manageUsers",
        element: (
          <AdminRoutes>
            <ManageUsers></ManageUsers>
          </AdminRoutes>
        ),
      },
      {
        path: "manageCandidates",
        element: (
          <AdminRoutes>
            <ManageCandidates></ManageCandidates>
          </AdminRoutes>
        ),
      },
      {
        path: "adminProfile",
        element: (
          <AdminRoutes>
            <AdminProfile></AdminProfile>
          </AdminRoutes>
        ),
      },
    ],
  },
]);
export default router;
