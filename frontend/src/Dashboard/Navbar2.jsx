import React from "react";
import { Link } from "react-router-dom";

const Navbar2 = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Logo</h1>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>

          <li>
            <Link to="/ranking">Ranking</Link>
          </li>
          <li>
            <Link to="" className="signin">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar2;
