import ScrollToTop from "../Components/ScrollToTop";

import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import Logement from "../pages/Logement/Logement";
import Reservation from "../pages/Reservation/Reservation";
import Blog from "../pages/Blog/Blog";

export const router = [
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
    path: "*",
    element: (
      <>
        <ScrollToTop />
        <ErrorPage />
      </>
    ),
  },
];
