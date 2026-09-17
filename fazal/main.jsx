import React from "react";
import ReactDOM from "react-dom/client";
import LinksPage from "../src/LinksPage.jsx";
import { team } from "../src/team.js";
import "../src/index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <LinksPage {...team.fazal} />
  </React.StrictMode>
);
