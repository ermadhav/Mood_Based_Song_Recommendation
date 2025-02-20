import React from "react";
import ReactDOM from "react-dom/client"; // ✅ Use ReactDOM from "react-dom/client"
import "./styles/index.css";
import Home from "./pages/Home";
import { ThemeProvider } from "./context/ThemeContext";

// ✅ Create root and render properly
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider>
      <Home />
    </ThemeProvider>
  </React.StrictMode>
);
