import React from 'react';
import './icons.css';

function Icons({ icons = [], size = '2rem', alignment = 'flex-end' }) {
  return (
    <div className="icon-social" style={{ justifyContent: alignment }}>
      {icons && Array.isArray(icons) && icons.map((iconObj, index) => (
        <a key={index} href={iconObj.link} target='_blank' rel="noopener noreferrer">
          <i
            className={`bi bi-${iconObj.name} icon`}
            style={{
              fontSize: size,
              color: 'var(--blue)',
            }}
          />
        </a>
      ))}
      <a href="https://www.linkedin.com/in/victor-rocha-751376267/" target='_blank' rel="noopener noreferrer">
        <i className="fa-brands fa-linkedin-in icon" style={{ fontSize: size, color: 'var(--blue)' }} />
      </a>
    </div>
  );
}

export default Icons;