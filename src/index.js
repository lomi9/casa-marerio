import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";
import "./styles/utilities.scss";
import "./styles/reset.scss";
import routes from "./pages/router"; // Assurez-vous que l'importation est correcte

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
    });
  }, []);

  // Créer un routeur avec le bon chemin de base
  const router = React.useMemo(
    () =>
      createBrowserRouter(routes, {
        basename: "/casa-marerio",
      }),
    []
  );

  return <RouterProvider router={router} />;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
