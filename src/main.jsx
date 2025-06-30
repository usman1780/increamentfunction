import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
// import FethcingApi from './fetchingapi.jsx'
import MyApp from "./App.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <MyApp />
  </StrictMode>
);
