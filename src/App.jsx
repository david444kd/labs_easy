import { useState, useRef } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Zapros from "./pages/forma";
import Admin from "./pages/admin";
import Login from "./pages/login";
import Signin from "./pages/signin";

function App() {
  return (
    <div className="home">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/forma" element={<Zapros />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
      </Routes>
    </div>
  );
}

export default App;
