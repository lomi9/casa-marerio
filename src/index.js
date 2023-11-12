import React, { useEffect } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";
import "./styles/utilities.scss";
import "./styles/reset.scss";
import { router } from "./router"; // Importez le routeur à partir du fichier correct

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
    });
  }, []);

  // Créer un routeur avec le bon chemin de base
  const routerInstance = createBrowserRouter(router, {
    basename: process.env.PUBLIC_URL, // Utilisez PUBLIC_URL pour le chemin de base
  });

  return <RouterProvider router={routerInstance} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
