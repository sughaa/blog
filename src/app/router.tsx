import { createBrowserRouter } from "react-router-dom";

import Layout from "../components/layout/Layout";
import Home from "../pages/Home";
import Posts from "../pages/Posts";
import About from "../pages/About";
import NotFound from "../pages/NotFound";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "posts",
        element: <Posts />,
      },
      {
        path: "about",
        element: <About />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);