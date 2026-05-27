import React, { useRef, useCallback } from 'react';

/**
 * Wraps children in a div that applies a gentle 3D tilt on mouse move.
 * Props:
 *   max      – max tilt degrees (default 12)
 *   scale    – scale on hover (default 1.03)
 *   glare    – show glare overlay (default false)
 *   className – extra class names
 */
const Tilt3D = ({
  children,
  max = 12,
  scale = 1.03,
  glare = false,
  className = '',
  style = {},
}) => {
  const ref = useRef(null);
  const glareRef = useRef(null);

  const handleMove = useCallback((e) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const cx = rect.width / 2;
    const cy = rect.height / 2;
    const rotateX = ((y - cy) / cy) * -max;
    const rotateY = ((x - cx) / cx) * max;

    el.style.transform = `perspective(900px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(${scale},${scale},${scale})`;

    if (glare && glareRef.current) {
      const angle = Math.atan2(y - cy, x - cx) * (180 / Math.PI);
      glareRef.current.style.transform = `rotate(${angle}deg)`;
      glareRef.current.style.opacity = '0.15';
    }
  }, [max, scale, glare]);

  const handleLeave = useCallback(() => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = `perspective(900px) rotateX(0deg) rotateY(0deg) scale3d(1,1,1)`;
    if (glare && glareRef.current) {
      glareRef.current.style.opacity = '0';
    }
  }, [glare]);

  return (
    <div
      ref={ref}
      className={`tilt3d ${className}`}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.15s ease-out',
        willChange: 'transform',
        ...style,
      }}
    >
      {glare && (
        <div
          ref={glareRef}
          style={{
            position: 'absolute',
            inset: 0,
            borderRadius: 'inherit',
            background: 'linear-gradient(135deg, rgba(255,255,255,0.4) 0%, transparent 60%)',
            opacity: 0,
            transition: 'opacity 0.3s ease',
            pointerEvents: 'none',
            zIndex: 10,
          }}
        />
      )}
      {children}
    </div>
  );
};

export default Tilt3D;
