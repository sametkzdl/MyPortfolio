import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";
import MainLayout from "./layout/main.jsx";

createRoot(document.getElementById("root")).render(
  <HashRouter>
    <MainLayout>
      <App />
    </MainLayout>
  </HashRouter>
);
