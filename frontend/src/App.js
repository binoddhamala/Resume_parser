import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import Login from "./Login";
import Register from "./Register";
import Jobseeker from "./Dashboard/Jobseeker";
import Recruiter from "./Dashboard/Recruiter";
import Viewjob from "./Dashboard/Viewjob";
import Ranking from "./Dashboard/Ranking";

const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/jobseeker" element={<Jobseeker />} />
          <Route path="/recruiter" element={<Recruiter />} />
          <Route path="/viewjob" element={<Viewjob />} />
          <Route path="/ranking" element={<Ranking />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
