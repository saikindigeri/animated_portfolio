import React from 'react';
import './Home.css';

const Home = () => {
  return (
    <section id="Home" className="home-section">
      <div className="home-container">
        <div className="text-container">
          <h1 className="animated-title">Sai Kumar Kindigeri</h1>
          <p className="animated-subtitle">BSc MPCS Graduate | Full Stack Developer</p>
          <a href="c:\Users\saiku\OneDrive\Desktop\saikumark.resume.pdf" download="Sai_Kumar_Resume" className="resume-button">
            Download Resume
          </a>
        </div>
        <div className="profile-image-container">
          <img src="https://res.cloudinary.com/dyjmh036b/image/upload/v1723150832/blue_sai_up1sy1.jpg" alt="Sai Kumar Kindigeri" className="profile-image" />
        </div>
      </div>
    </section>
  );
};

export default Home;
