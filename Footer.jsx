import React from 'react';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="footer-content">
        <p>&copy; {new Date().getFullYear()} Copyright Kaelyn James - COMP229 - Fall 2026</p>
        <div className="footer-links">
          <a 
            href="https://linkedin.com/in/kaelyn-james" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <span>|</span>
          <a 
            href="https://github.com/Kae-James/COMP229_Assignment1" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
      </div>
    </footer>
  );
}