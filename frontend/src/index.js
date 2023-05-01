import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import AppWrapper from "./layouts/AppWrapper.tsx";
import reportWebVitals from "./reportWebVitals";
import ProjectCard from "./components/ProjectCard";
import ImageCarousel from "./components/ImageCarousel";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <AppWrapper>
      <ProjectCard />
    </AppWrapper>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
