import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";
import "./styles/utilities.scss";
import "./styles/reset.scss";
import { router } from "./pages/router";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
    });
  }, []);

  const routerInstance = createBrowserRouter(router, {
    basename: process.env.PUBLIC_URL,
  });

  return (
    <HelmetProvider>
      <RouterProvider router={routerInstance} />
    </HelmetProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
