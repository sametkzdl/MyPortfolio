import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import CV from "./pages/cv";
import ErrorPage from "./pages/error";

function App() {
  return (
    <Routes>
      <Route path={"/"} element={<Home />} />
      <Route path={"/cv"} element={<CV />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
}

export default App;
