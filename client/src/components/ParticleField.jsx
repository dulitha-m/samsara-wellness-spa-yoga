import React, { useEffect, useRef } from 'react';
import './ParticleField.css';

const ParticleField = ({ count = 18, color = 'rgba(197,168,128,0.35)' }) => {
  const particles = Array.from({ length: count }, (_, i) => ({
    id: i,
    size: Math.random() * 6 + 3,
    x: Math.random() * 100,
    y: Math.random() * 100,
    duration: Math.random() * 20 + 15,
    delay: Math.random() * -20,
    depth: Math.random() * 60 + 20, // z-depth 20–80px
    drift: (Math.random() - 0.5) * 40,
  }));

  return (
    <div className="particle-field" aria-hidden="true">
      {particles.map(p => (
        <span
          key={p.id}
          className="particle"
          style={{
            width: p.size,
            height: p.size,
            left: `${p.x}%`,
            top: `${p.y}%`,
            background: color,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
            '--drift': `${p.drift}px`,
            '--depth': `${p.depth}px`,
          }}
        />
      ))}
    </div>
  );
};

export default ParticleField;
