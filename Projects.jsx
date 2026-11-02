import React from 'react';
import proj1 from '../assets/project1.jpg';
import proj2 from '../assets/project2.jpg';
import proj3 from '../assets/project3.jpg';

export default function Projects() {
  const projectList = [
    {
      /* First project, from Client-Side Web Development */
      id: 1,
      title: 'Restaurant Online Ordering Platform',
      image: proj1,
      technologies: 'HTML, CSS, JavaScript',
      role: 'Frontend Developer',
      outcome: 'Designed and built a responsive web application for a restaurant to display menus and capture digital dish orders. Implemented client-side validation and responsive image galleries. Ordering Page is pictured above.'
    },
    {
      /* Second project, from Introduction to Database Concepts */
      id: 2,
      title: 'Retail Inventory Database System',
      image: proj2,
      technologies: 'SQL, Relational Databases',
      role: 'Team Lead & Database Developer',
      outcome: 'Co-developed an SQL database for store managers to update and track inventory across departments. Led a group of 3, tracking Agile milestones and executing QA testing. Entity-Relationship diagram is pictured above.'
    },
    {
      /* Third project, from Software Requirements Engineering */
      id: 3,
      title: 'Pet Rescue & Adoption Platform (SRS)',
      image: proj3,
      technologies: 'Agile, UML, System Architecture',
      role: 'Software Requirements Specialist',
      outcome: 'Collaborated in an Agile team to author a complete Software Requirements Specification (SRS) document, defining structural UML diagrams and functional requirements. Sequence diagram is pictured above.'
    }
  ];

  return (
    <div className="page-container projects-page">
      <h2>Academic Projects</h2>
      <div className="projects-grid">
        {projectList.map((project) => (
          <div key={project.id} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <p><strong>Technologies:</strong> {project.technologies}</p>
            <p><strong>Role:</strong> {project.role}</p>
            <p><strong>Outcome:</strong> {project.outcome}</p>
          </div>
        ))}
      </div>
    </div>
  );
}