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
      // admin routes
      {
        path: "manageProfile",
        element: <ManageProfile></ManageProfile>,
      },
    ],
  },
]);
export default router;
