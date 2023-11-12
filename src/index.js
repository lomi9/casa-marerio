import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./i18n";
import AOS from "aos";
import "aos/dist/aos.css";
import "./styles/main.scss";
import "./styles/utilities.scss";
import "./styles/reset.scss";
import router from "./pages/router";

function App() {
  React.useEffect(() => {
    AOS.init({
      duration: 1000, // Durée de l'animation en ms
    });
  }, []);

  return <RouterProvider router={router} />;
}

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
