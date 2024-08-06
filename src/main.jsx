import "./style.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import Login from "./pages/Login.jsx";
import Signup from "./pages/Signup.jsx";
import Houses from "./pages/Houses.jsx";
import Rent from "./pages/Rent.jsx";
import Buy from "./pages/Buy.jsx";
import AddHouse from "./pages/AddHouse.jsx";
import Contact from "./pages/Contact.jsx";
import AdminLoginForm from "./components/Connection.jsx";
import SingleHouse from "./pages/SingleHouse.jsx";
import { HouseProvider } from "./context/house.context.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/houses",
    element: (
      <HouseProvider>
        <Houses />
      </HouseProvider>
    ),
  },
  {
    path: "/rent",
    element: <Rent />,
  },
  {
    path: "/houses/:id",
    element: <SingleHouse />,
  },
  {
    path: "/buy",
    element: <Buy />,
  },
  {
    path: "/addhouse",
    element: <AddHouse />,
  },
  {
    path: "/contact",
    element: <Contact />,
  },
  {
    path: "/admin",
    element: <AdminLoginForm />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
