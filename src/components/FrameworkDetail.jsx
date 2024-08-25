// FrameworkDetail.jsx
import React from 'react';

const FrameworkDetail = ({ framework }) => {
  return (
    <div>
      <h3>{framework.name}</h3>
      <p>
        <a href={framework.docLink} target="_blank" rel="noopener noreferrer">
          Documentation
        </a>
      </p>
      <p>Install Guide: {framework.installGuide}</p>
    </div>
  );
};

export default FrameworkDetail;