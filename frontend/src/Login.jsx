import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from 'axios';
import Layout from "./Layout";

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const client = axios.create({
    baseURL: ""
  });

  function submitLogin(e) {
    e.preventDefault();
    client.post(
      "/api/login/",
      {
        email,
        password
      }
    ).then(function(res) {
      navigate('/');
      // Handle successful login
    }).catch(function(error) {
      console.error("Login error:", error);
      // Handle login error
    });
  }

  return (
    <>
    <Layout>
      <div className="login">
        <div className="login_container">
          <h1>Login</h1>
          <form className="login_form" onSubmit={submitLogin}>
            <div className="login_form_content">
              <input
                type="email"
                name="email"
                placeholder="Email"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              <input
                type="password"
                name="password"
                placeholder="Password"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              <button type="submit"><Link to="/jobseeker">Sign in</Link></button>
              <p>
                Don't have an account? <Link to="/register">Register Now</Link>
              </p>
            </div>
          </form>
        </div>
      </div>
      </Layout>
    </>
  );
};

export default Login;
