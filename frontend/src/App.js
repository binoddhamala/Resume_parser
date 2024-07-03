import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Home";
import Login from "./Components/authenticate/Login.jsx";
import Register from "./Components/authenticate/Register.jsx";
import Jobseeker from "./Components/Dashboard/Jobseeker.jsx";
import Recruiter from "./Components/Dashboard/Recruiter.jsx";
import Viewjob from "./Components/Dashboard/Viewjob.jsx";
import Ranking from "./Components/Dashboard/Ranking.jsx";
import ForgotPassword from "./Components/authenticate/ForgetPassword.jsx";
import ResetPassword from "./Components/authenticate/ResetPassword.jsx";
import Logout from "./Components/authenticate/logout.jsx";


const App = () => {
  return (
    <div className="app">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/register" element={<Register/>} />
          <Route path="/jobseeker" element={<Jobseeker/>} />
          <Route path="/recruiter" element={<Recruiter/>} />
          <Route path="/viewjob" element={<Viewjob/>} />
          <Route path="/ranking" element={<Ranking/>} />
          <Route path="/logout" element={<Logout/>} />
          <Route path="/forget-password" element={<ForgotPassword/>} />
          <Route path="reset-password/:uid/:token" element={<ResetPassword/>}/>



        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
