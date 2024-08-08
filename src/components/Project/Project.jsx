import React, { useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import HoverEffect from 'hover-effect';
import displacementImage from '../../../public/overlay.png'; // Ensure the path is correct

import './Project.css';

const Project = ({ projectImg, hoverImg, projectTitle, projectCategory }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    if (containerRef.current) {
      new HoverEffect({
        parent: containerRef.current,
        intensity: 0.3,
        image1: projectImg,
        image2: projectImg, 
        displacementImage,
        speedIn: 2,
        speedOut: 5,
        easing: 'Expo.easeOut'
      });
    }
  }, [projectImg, hoverImg]);

  return (
<div className="project">
  <Link to="/work/sample-project">
    <div className="project-img" ref={containerRef}>
      <img src={projectImg} alt={projectTitle} className="static-img" />
    </div>
    <div className="project-title">
      <p>{projectTitle}</p>
    </div>
    <div className="project-category">
      <p>{projectCategory}</p>
    </div>
  </Link>
</div>
  );
};

export default Project;
