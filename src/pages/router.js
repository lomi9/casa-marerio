import ScrollToTop from "../Components/ScrollToTop";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import Logement from "../pages/Logement/Logement";
import Reservation from "./Reservation/Reservation";
import Blog from "./Blog/Blog";

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <>
        <ScrollToTop />
        <Home />
      </>
    ),
    errorElement: <ErrorPage />,
  },
  {
    path: "/logement",
    element: (
      <>
        <ScrollToTop />
        <Logement />
      </>
    ),
  },
  {
    path: "/reservation",
    element: (
      <>
        <ScrollToTop />
        <Reservation />
      </>
    ),
  },
  {
    path: "/blog",
    element: (
      <>
        <ScrollToTop />
        <Blog />
      </>
    ),
  },
  {
    path: "/error",
    element: <ErrorPage />,
  },
  {
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <ErrorPage />
      </>
    ),
  },
]);

export default router;
