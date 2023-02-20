import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import Vista2 from './components/Vista2'
import Vista3 from './components/Vista3'
import Vista4 from './components/Vista4'
import Vista5 from './components/Vista5'
import "./index.css";

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Link,
} from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <Link to="/">vista 1</Link>
      <Link to="/v2">vista 2</Link>
      <Link to="/v3">vista 3</Link>
      <Link to="/v4">vista 4</Link>
      <Link to="/v5">vista 5</Link>
    </div>
  );
};

const HeaderLayout = () => (
  <>
    <header>
      <Navbar />
    </header>

    <Outlet />
  </>
);

const router = createBrowserRouter([
  {
    element: <HeaderLayout />,
    children: [
      {
        path: "/",
        element: <App />,
      },
      {
        path: "/v2",
        element: <Vista2 />,
      },
      {
        path: "/v3",
        element: <Vista3 />,
      },
      {
        path: "/v4",
        element: <Vista4 />,
      },
      {
        path: "/v5",
        element: <Vista5 />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
