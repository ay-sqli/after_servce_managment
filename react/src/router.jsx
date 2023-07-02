import { createBrowserRouter, Navigate } from "react-router-dom";
import DefaultLayout from "./components/DefaultLayout";
import GuestLayout from "./components/GuestLayout";
import Home from "./view/Home";
import Dashboard from "./view/Dashboard";
import Login from "./view/Login";
import Signup from "./view/signup";
import AddClaim from "./view/AddClaim";
import Claim from "./view/Claim";
import Claimdetails from "./view/Claimdetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <DefaultLayout/>,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Dashboard",
        element: <Dashboard />
      },
      {
        path: "/addClaim",
        element: <AddClaim />
      },
      {
        path: "/Claim",
        element: <Claim />
      },
      {
        path: "/Claim/Claimdetails",
        element: <Claimdetails />
      }
    ]
  },
  {
    path: "/",
    element: <GuestLayout/>,
    children: [
      {
        path: "login",
        element: <Login />
      },
      {
        path: "signup",
        element: <Signup />
      }
    ]
  }
]);

export default router;
