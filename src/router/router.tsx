import Login from "../pages/Login";
import Register from "../pages/Register";
import UserRoot from "../components/UserRoot";
import Home from "../pages/Home";
import NotificationsPage from "../pages/NotificationsPage";
import Direct from "../pages/Direct";
import SearchPage from "../pages/SearchPage";
import Creat from "../pages/Creat";
import Profile from "../pages/Profile";

export const routes = [
  {
    path: "/",
    element: <UserRoot />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/register",
        element: <Register />,
      },
      {
        path: "/notifications",
        element: <NotificationsPage />,
      },
      {
        path: "/direct",
        element: <Direct />,
      },
      {
        path: "/create",
        element: <Creat />,
      },
      {
        path: "/profile",
        element: <Profile />,
      },
      {
        path: "/search",
        element: <SearchPage />,
      },
    ],
  },
];
