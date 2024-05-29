import React from "react";
import { Link } from "react-router-dom";

const Recruitment = () => {
  return (
    <>
      <div className="parser">
      <div className="parsing_container">
        <h1 data-aos="fade-right">
          Start Using Our <span className="gradient-text">Service</span>
        </h1>
        <div className="parsing_container_content" data-aos="fade-left">
          <h1>Recruitment</h1>
          <form>
            <label>Upload job description:</label>
            <input type="file" id="resume" accept=".pdf,.doc,.docx" />
            <button type="submit"><Link to="/login">Upload</Link></button>
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Recruitment;
