import { Children, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import CreateList from "./pages/CreateList";
import HomePage from "./pages/HomePage";
import MainPage from "./pages/MainPage";
import Login from "./pages/Login";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "homepage",
        element: <HomePage />,
      },
      {
        path: "createlist",
        element: <CreateList />,
      },
      {
        path: "mainpage",
        element: <MainPage />
      },
    ]
  },

  {
    path: "login",
    element: <Login />
  },

]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
