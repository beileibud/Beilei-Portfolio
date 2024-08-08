// FoldedHero.jsx
import React, { useEffect, useRef, useState } from 'react';
import './FoldedHero.css';

const FoldedHero = ({ children }) => {
  const heroRef = useRef(null);
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMouse({
        x: (e.clientX / window.innerWidth) * 2 - 1,
        y: (e.clientY / window.innerHeight) * 2 - 1
      });
    };

    const handleScroll = () => {
      setScroll(window.scrollY);
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const foldStyle = {
    transform: `translate3d(${mouse.x * 30}px, ${mouse.y * 30}px, 0) rotateX(${mouse.y * 10}deg) rotateY(${-mouse.x * 10}deg)`
  };

  const contentStyle = {
    transform: `translateY(${-scroll * 0.5}px)`
  };

  return (
    <div className="folded-hero" ref={heroRef}>
      <div className="fold" style={foldStyle}>
        <div className="fold-content" style={contentStyle}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default FoldedHero;