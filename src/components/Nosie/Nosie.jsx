import React, { useState } from 'react';
import './Nosie.css';

const NosieEffect = () => {
    const [position, setPosition] = useState({ x: 50, y: 50 }); // Center of the container

    const handleMouseMove = (e) => {
        const { clientX, clientY } = e;
        const x = (clientX / window.innerWidth) * 100;
        const y = (clientY / window.innerHeight) * 100;
        setPosition({ x, y });
    };

    return (
        <div className="background-effect" onMouseMove={handleMouseMove}>
            <div
                className="tracking-circle"
                style={{
                    left: `${position.x}%`,
                    top: `${position.y}%`
                }}
            />
        </div>
    );
};

export default NosieEffect;
