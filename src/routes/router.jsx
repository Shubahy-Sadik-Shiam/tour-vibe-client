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

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/tourDetails/:id",
        element: <TourDetails></TourDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/packages/${params.id}`),
      },
      {
        path: "/guideProfile/:id",
        element: <GuideProfile></GuideProfile>,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/guide/${params.id}`),
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
        path: "payment/:package",
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
    ],
  },
]);
export default router;
