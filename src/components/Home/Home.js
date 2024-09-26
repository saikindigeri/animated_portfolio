import React from 'react';
import './Home.css';
import deva from '../../saik.resume.pdf'

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
        <div className="profile-wrapper">
          <div className="profile-image-container">
            <img
              src="https://res.cloudinary.com/dyjmh036b/image/upload/v1724694358/WhatsApp_Image_2024-08-08_at_8.11.51_PM_tpbzls.png"
              alt="Sai Kumar Kindigeri"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <h1 className="name">Sai Kumar Kindigeri</h1>
            <p className="subtitle">BSc MPCS Graduate | Full Stack Developer</p>
            <a href={deva} download="Sai_Kumar_Resume" className="resume-button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
