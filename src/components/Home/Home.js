import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-content">
        <div className="profile-wrapper">
          <div className="profile-image-container">
            <img
              src="https://res.cloudinary.com/dyjmh036b/image/upload/v1723150832/blue_sai_up1sy1.jpg"
              alt="Sai Kumar Kindigeri"
              className="profile-image"
            />
          </div>
          <div className="profile-details">
            <h1 className="name">Sai Kumar Kindigeri</h1>
            <p className="subtitle">BSc MPCS Graduate | Full Stack Developer</p>
            <a href="/path/to/your-resume.pdf" download="Sai_Kumar_Resume" className="resume-button">
              Download Resume
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;
