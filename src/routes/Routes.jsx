import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Authentication/Login";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";
import JobDetails from "../pages/JobDetails";
import AddJob from "../pages/AddJob";
import MyPostedJobs from "../pages/MyPostedJobs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        index: true,
        element: <Home></Home>
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "register",
        element: <Register></Register>,
      }, 
       {
        path: "/job/:id",
        element: <JobDetails></JobDetails>,
        loader:({params})=>fetch(`${import.meta.env.VITE_APP_URL}/job/${params.id}`)
      },
      {
        path:'/add-job',
        element:<AddJob></AddJob>
      }, 
       {
        path:'/my-posted-jobs',
        element:<MyPostedJobs></MyPostedJobs>
      },
    ],
  },
]);

export default router;
