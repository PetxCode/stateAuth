import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/layout/Layout";
import HomeScreen from "../pages/HomeScreen";
import Register from "../pages/auth/Register";
import SignIn from "../pages/auth/SignInScreen";
import Verify from "../pages/auth/verifyScreen";
import PrivateRouter from "./PrivateRouter";
import SingleDetail from "../pages/SingleDetail";

export const mainRoute = createBrowserRouter([
  {
    path: "/",
    element: (
      <PrivateRouter>
        <Layout />
      </PrivateRouter>
    ),
    children: [
      { index: true, element: <HomeScreen /> },
      {
        index: true,
        path: `detail/:productID`,
        element: <SingleDetail />,
      },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <SignIn />,
  },
  {
    path: "/verify",
    element: <Verify />,
  },
]);
