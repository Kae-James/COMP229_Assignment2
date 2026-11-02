import React from 'react';

// Imports images from assets folder
import webDevImg from '../assets/web-dev.png';
import oopImg from '../assets/oop.png';
import dbImg from '../assets/database.png';
import agileImg from '../assets/agile.png';

export default function Services() {
  const servicesList = [
    {
      /* Service based on Web Application Development class */
      id: 1,
      image: webDevImg,
      title: 'Web Application Development',
      description: 'Designing and building responsive, user-centered websites and web interfaces using HTML, CSS, JavaScript, and MERN technologies.'
    },
    {
      /* Service based on Programming 1 and 2 and Java classes */
      id: 2,
      image: oopImg,
      title: 'Object-Oriented Programming',
      description: 'Developing structured, modular software applications using Python, Java, C#, and modern software engineering practices.'
    },
    {
      /* Service based on Intro to Databased Concepts class */
      id: 3,
      image: dbImg,
      title: 'Database Schema Design & SQL',
      description: 'Constructing relational database models, writing complex SQL queries, and managing data integrity for web and enterprise systems.'
    },
    {
      /* Service based on Software Requirements Engineering class */
      id: 4,
      image: agileImg,
      title: 'Requirements Engineering & Agile Management',
      description: 'Assisting in software specification development, creating UML architecture diagrams, and facilitating student Agile workflows.'
    }
  ];

  return (
    <div className="page-container services-page">
      <h2>Services Offered</h2>
      <div className="services-grid">
        {servicesList.map((service) => (
          <div key={service.id} className="service-card">
            <h3>
              <img 
                src={service.image} 
                alt={service.title} 
                className="service-title-img" 
              />
              {service.title}
            </h3>
            <p>{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}