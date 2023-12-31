import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import "./index.css";
import { RouterProvider, createHashRouter } from "react-router-dom";
import Home, { loader as homeLoader } from "./components/pages/home/Home";
import Products from "./components/pages/Products/Products";
import Register from "./components/features/Authentication/Register/Register";
import Login , {action as loginAction} from "./components/features/Authentication/Login/Login";

const router = createHashRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: homeLoader,
      },
      { path: "/products", element: <Products /> },
      { path: "/register", element: <Register /> },
      { path: "/login", element: <Login /> , action:loginAction },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
