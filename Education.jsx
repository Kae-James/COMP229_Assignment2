import React from 'react';
/* My college */
export default function Education() {
  const educationList = [
    {
      id: 1,
      institution: 'Centennial College, Toronto, ON',
      degree: 'Software Engineering Technology - Artificial Intelligence (Advanced Diploma)',
      date: 'Sept 2025 - Present',
      details: 'GPA: 4.3 / 4.5 (A)',
      courses: 'Relevant Courses: Web Application Development, Web Interface Design, Client-Side Web Development, Java Programming, C# Programming, Unix/Linux OS, AI Foundation, AI Systems Design, Software Requirements Engineering.'
    }
  ];

  /* My certificates */
  const certifications = [
    { id: 1, name: 'Quality Assurance (QA) Techniques & Methodologies', issuer: 'Alison (Online)', status: 'In Progress' },
    { id: 2, name: 'Problem Solving, Python Programming & Video Games', issuer: 'Coursera (Online)', status: 'In Progress' },
    { id: 3, name: 'B1 French DELF(Diplôme d’Études en Langue Française)', issuer: 'French Ministry of Education', status: 'Certified - 2025' },
    { id: 4, name: 'Standard First Aid CPR/AED Level C', issuer: 'Action First Aid', status: 'Completed - 2024' },
    { id: 5, name: 'Manufacturing Subject Award', issuer: 'Bishop Tonnos Catholic Secondary School', status: 'Certified - 2025'},
    { id: 6, name: 'Arts & Culture SHSM (Specialist High Skills Major)', issuer: 'Bishop Tonnos Catholic Secondary School', status: 'Certified - 2025'}
  ];

  return (
    <div className="page-container education-page">
      <h2>Education & Qualifications</h2>
      
      <div className="education-list">
        {educationList.map((item) => (
          <div key={item.id} className="education-card">
            <h3>{item.degree}</h3>
            <h4>{item.institution}</h4>
            <span className="education-date">{item.date}</span>
            <p><strong>{item.details}</strong></p>
            <p>{item.courses}</p>
          </div>
        ))}
      </div>

      <h3 className="sub-heading">Certifications, Awards, & Professional Development</h3>
      <ul className="certifications-list">
        {certifications.map((cert) => (
          <li key={cert.id}>
            <strong>{cert.name}</strong> — {cert.issuer} ({cert.status})
          </li>
        ))}
      </ul>
    </div>
  );
}