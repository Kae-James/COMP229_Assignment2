import React from 'react';
import profilePic from '../assets/profile.png';

export default function About() {
  return (
    <div className="page-container about-page">
      <h2>About Me</h2>
      <img src={profilePic} alt="Kaelyn James" className="profile-img" />
      
      <h3>Kaelyn James</h3>
      <p>
        I am a student in the Software Engineering Technology - Artificial Intelligence program 
        at Centennial College. I have a strong understanding of machine learning concepts, algorithms, 
        data structures, and object-oriented programming. 
      </p>
      <p>
        In my free time, I enjoy drawing, painting, learning languages, and watching movies with my family and friends.
      </p>

      <div className="resume-link">
        {/* Directly serves the file located in public/resume.pdf */}
        <a href="/Kaelyn_James_Resume.pdf" download="Kaelyn_James_Resume.pdf" className="btn">
          Download Resume (PDF)
        </a>
      </div>
    </div>
  );
}