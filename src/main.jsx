import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./router/router.jsx";
import ParticlesComponent from "./particles.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router}>
    <ParticlesComponent id="particles" />
    <App />
  </RouterProvider>
);

/*
footerdagi linklarni navlink qilin to propertyga to'gri route ko'rsatilishi kk

*/
