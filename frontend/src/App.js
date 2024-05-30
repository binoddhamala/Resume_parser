import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Navbar from "./Navbar";
import Parser from "./Parser";
import Login from "./Login";
import Register from "./Register";
import Footer from "./Footer";
import Recruitment from "./Recruitment";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/parser" element={<Parser />} />
          <Route path="/recruitment" element={<Recruitment />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
