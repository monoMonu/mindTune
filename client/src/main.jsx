import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import App from "./app";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <BrowserRouter>
    <Routes>
      
      <Route path="/" element={<App />} />
      <Route path="/chat" element={<div>chat</div>} />
    </Routes>
  </BrowserRouter>
);