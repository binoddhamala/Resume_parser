import React from "react";
import { Link } from "react-router-dom";

const Navbar1 = () => {
  return (
    <>
      <nav className="navbar">
        <h1>Logo</h1>
        <ul>s
          <li>
            <Link to="/jobseeker">Resume Upload</Link>
          </li>

          <li>
            <Link to="/viewjob">ViewJob</Link>
          </li>
          <li>
             <Link to={"/logout"} className="signin">
              Logout
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Navbar1;
