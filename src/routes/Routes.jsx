import { createBrowserRouter } from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "./ErrorPage";
import Login from "../pages/Authentication/Login";
import Home from "../pages/Home";
import Register from "../pages/Authentication/Register";

const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
          index:true,
          element:<Home></Home>
        },
        {
          path:'/login',
          element:<Login></Login>
        },
        {
          path:'register',
          element:<Register></Register>
        },
      ]
    },
  ]);

export default router