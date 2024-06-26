import React, { useState, useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import { useNavigate } from "react-router-dom";
import Footer from "../Footer";
import Navbar2 from "./Navbar2";


const Recruiter = () => {
  const [uploadSuccess, setUploadSuccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    Aos.init({ duration: 2000, once: true });
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    const file = formData.get('job_description');
    if (file) {
    
      setUploadSuccess(true); // Set success message
    }

    setTimeout(() => {
      navigate("/ranking");
    }, 2000); 
  };

  return (
    <>
    <Navbar2/>
    <div className="parser">
      <div className="parsing_container">
        <h1 data-aos="fade-right">
          Start Using Our <span className="gradient-text">Service</span>
        </h1>
        <div className="parsing_container_content" data-aos="fade-left">
          <h1>Job Description</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="resume">Upload Job Description</label>
            <input type="file" id="job_description" name="job_description" accept=".pdf,.doc,.docx" required />
            <button type="submit">Upload</button>
          </form>
          {uploadSuccess && <p>File successfully uploaded!</p>}
        </div>
      </div>
    </div>
    <Footer/>
    </>
  );
};

export default Recruiter;
