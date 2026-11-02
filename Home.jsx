import React from 'react';
import { Link } from 'react-router-dom';

export default function Home() {
  return (
    <div className="page-container home-page">
      <h1>Welcome to Kaelyn James' Portfolio</h1>
      <h2>Artificial Intelligence - Software Engineering Technology Student</h2>
      
      <p className="mission-statement">
        <strong>Mission Statement:</strong> I strive to be healthy, happy, and successful in all that I do. I stay driven by an analytical mind and detail-oriented approach to building fabulous web applications, object-oriented software, and intelligent data solutions using current technologies.
      </p>

      <div className="cta-buttons">
        <Link to="/about" className="btn">Learn More About Me</Link>
        <Link to="/projects" className="btn btn-secondary">View My Projects</Link>
      </div>
    </div>
  );
}