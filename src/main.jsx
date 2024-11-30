import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { BrowserRouter } from "react-router-dom";
import MainLayout from "./layout/main.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter basename="/MyPortfolio">
    <MainLayout>
      <App />
    </MainLayout>
  </BrowserRouter>
);
