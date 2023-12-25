import Login from "../pages/Login";
import Register from "../pages/Register";
import UserRoot from "../components/UserRoot";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
    ],
  },
];
