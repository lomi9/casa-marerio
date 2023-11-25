import ScrollToTop from "../Components/ScrollToTop";

import Home from "../pages/Home/Home";
import ErrorPage from "../pages/Error/Error";
import Logement from "../pages/Logement/Logement";
import Reservation from "../pages/Reservation/Reservation";
import Blog from "../pages/Blog/Blog";
import PrivacyPolicy from "./PrivacyPolicy/PrivacyPolicy";
import TermsAndConditions from "./TermsAndConditions/TermsAndConditions";

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
    path: "/privacy-policy",
    element: (
      <>
        <ScrollToTop />
        <PrivacyPolicy />
      </>
    ),
  },
  {
    path: "/terms-and-conditions",
    element: (
      <>
        <ScrollToTop />
        <TermsAndConditions />
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
