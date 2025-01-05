import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import MainApp from "./app.jsx"; // Asegúrate de que esta ruta sea correcta
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
        <MainApp />
    </React.StrictMode>
);