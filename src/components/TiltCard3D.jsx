import React, { useRef, useState } from 'react';

export default function TiltCard3D({
  children,
  className = '',
  maxTilt = 9,
  glowColor = 'rgba(56, 189, 248, 0.25)',
  onClick,
}) {
  const cardRef = useRef(null);
  const [style, setStyle] = useState({
    transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
    glareX: 50,
    glareY: 50,
    isHovered: false,
  });

  const handleMouseMove = (e) => {
    const el = cardRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / centerY) * -maxTilt;
    const rotateY = ((x - centerX) / centerX) * maxTilt;

    setStyle({
      transform: `perspective(1000px) rotateX(${rotateX.toFixed(2)}deg) rotateY(${rotateY.toFixed(2)}deg) scale3d(1.02, 1.02, 1.02)`,
      glareX: (x / rect.width) * 100,
      glareY: (y / rect.height) * 100,
      isHovered: true,
    });
  };

  const handleMouseLeave = () => {
    setStyle({
      transform: 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)',
      glareX: 50,
      glareY: 50,
      isHovered: false,
    });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      onClick={onClick}
      style={{
        transform: style.transform,
        transition: style.isHovered
          ? 'transform 120ms cubic-bezier(0.03, 0.98, 0.52, 0.99)'
          : 'transform 500ms cubic-bezier(0.22, 1, 0.36, 1)',
      }}
      className={`relative overflow-hidden rounded-2xl will-change-transform ${className}`}
    >
      {/* Dynamic Specular Glare */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 z-20 transition-opacity duration-300"
        style={{
          opacity: style.isHovered ? 1 : 0,
          background: `radial-gradient(circle 260px at ${style.glareX}% ${style.glareY}%, ${glowColor}, transparent 75%)`,
        }}
      />
      {children}
    </div>
  );
}
