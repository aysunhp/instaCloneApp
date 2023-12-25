import "./App.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { routes } from "./router/router";

const router = createBrowserRouter(routes);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
