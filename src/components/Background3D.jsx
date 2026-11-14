import React, { useEffect, useRef } from 'react';

export default function Background3D() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const mouse = { x: width / 2, y: height / 2, targetX: width / 2, targetY: height / 2 };

    const handleResize = () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    const handleMouseMove = (e) => {
      mouse.targetX = e.clientX;
      mouse.targetY = e.clientY;
    };

    window.addEventListener('resize', handleResize);
    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    // 3D Particle nodes
    const PARTICLE_COUNT = Math.min(72, Math.floor((width * height) / 19000));
    const particles = Array.from({ length: PARTICLE_COUNT }, () => ({
      x: (Math.random() - 0.5) * 1600,
      y: (Math.random() - 0.5) * 1000,
      z: Math.random() * 900 + 100,
      vx: (Math.random() - 0.5) * 0.45,
      vy: (Math.random() - 0.5) * 0.45,
      vz: (Math.random() - 0.5) * 0.6,
      size: Math.random() * 2.2 + 1.1,
      isCyan: Math.random() > 0.45,
    }));

    let time = 0;

    const render = () => {
      time += 0.008;
      mouse.x += (mouse.targetX - mouse.x) * 0.05;
      mouse.y += (mouse.targetY - mouse.y) * 0.05;

      const parallaxX = (mouse.x - width / 2) * 0.06;
      const parallaxY = (mouse.y - height / 2) * 0.06;

      // Deep Navy Base (#0B1220)
      ctx.fillStyle = '#0B1220';
      ctx.fillRect(0, 0, width, height);

      // Diagonal Brand Light Beams (inspired by Identidade Visual EB)
      const beamGrad1 = ctx.createLinearGradient(0, 0, width * 0.6, height * 0.7);
      beamGrad1.addColorStop(0, 'rgba(37, 99, 235, 0.16)');
      beamGrad1.addColorStop(0.5, 'rgba(56, 189, 248, 0.06)');
      beamGrad1.addColorStop(1, 'rgba(11, 18, 32, 0)');
      ctx.fillStyle = beamGrad1;
      ctx.beginPath();
      ctx.moveTo(0, 0);
      ctx.lineTo(width * 0.48, 0);
      ctx.lineTo(width * 0.15, height * 0.72);
      ctx.lineTo(0, height * 0.45);
      ctx.closePath();
      ctx.fill();

      const beamGrad2 = ctx.createLinearGradient(width, height, width * 0.45, height * 0.25);
      beamGrad2.addColorStop(0, 'rgba(56, 189, 248, 0.14)');
      beamGrad2.addColorStop(0.5, 'rgba(37, 99, 235, 0.08)');
      beamGrad2.addColorStop(1, 'rgba(11, 18, 32, 0)');
      ctx.fillStyle = beamGrad2;
      ctx.beginPath();
      ctx.moveTo(width, height);
      ctx.lineTo(width * 0.52, height);
      ctx.lineTo(width * 0.88, height * 0.22);
      ctx.lineTo(width, height * 0.48);
      ctx.closePath();
      ctx.fill();

      // Subtle 3D Perspective Floor Grid
      ctx.save();
      const horizonY = height * 0.68 - parallaxY * 0.35;
      const centerX = width * 0.5 - parallaxX * 0.5;
      ctx.strokeStyle = 'rgba(37, 99, 235, 0.11)';
      ctx.lineWidth = 1;

      for (let i = -10; i <= 10; i++) {
        ctx.beginPath();
        ctx.moveTo(centerX + i * 55, horizonY);
        ctx.lineTo(centerX + i * 240, height + 40);
        ctx.stroke();
      }

      const gridOffset = (time * 35) % 40;
      for (let r = 1; r <= 7; r++) {
        const progress = (r * 40 + gridOffset) / 320;
        const y = horizonY + Math.pow(progress, 1.75) * (height - horizonY + 40);
        if (y > horizonY && y <= height + 20) {
          ctx.strokeStyle = `rgba(56, 189, 248, ${0.03 + progress * 0.09})`;
          ctx.beginPath();
          ctx.moveTo(0, y);
          ctx.lineTo(width, y);
          ctx.stroke();
        }
      }
      ctx.restore();

      // Project 3D Particles
      const fov = 520;
      const projected = [];

      for (let i = 0; i < particles.length; i++) {
        const p = particles[i];
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;

        if (p.x > 850) p.x = -850;
        if (p.x < -850) p.x = 850;
        if (p.y > 550) p.y = -550;
        if (p.y < -550) p.y = 550;
        if (p.z > 1000) p.z = 120;
        if (p.z < 120) p.z = 1000;

        const scale = fov / (fov + p.z);
        const sx = width / 2 + (p.x - parallaxX * 2.2) * scale;
        const sy = height / 2 + (p.y - parallaxY * 2.2) * scale;
        const alpha = Math.max(0.12, Math.min(0.85, (1000 - p.z) / 900));

        projected.push({ sx, sy, scale, alpha, p });
      }

      // Connect nearby 3D nodes
      for (let i = 0; i < projected.length; i++) {
        for (let j = i + 1; j < projected.length; j++) {
          const a = projected[i];
          const b = projected[j];
          const dx = a.sx - b.sx;
          const dy = a.sy - b.sy;
          const dist = Math.hypot(dx, dy);

          if (dist < 145) {
            const lineAlpha = (1 - dist / 145) * 0.22 * Math.min(a.alpha, b.alpha);
            ctx.strokeStyle = `rgba(56, 189, 248, ${lineAlpha})`;
            ctx.lineWidth = 0.9;
            ctx.beginPath();
            ctx.moveTo(a.sx, a.sy);
            ctx.lineTo(b.sx, b.sy);
            ctx.stroke();
          }
        }
      }

      // Draw glowing nodes
      for (let i = 0; i < projected.length; i++) {
        const { sx, sy, scale, alpha, p } = projected[i];
        const radius = Math.max(1, p.size * scale * 1.45);

        ctx.beginPath();
        ctx.arc(sx, sy, radius * 2.6, 0, Math.PI * 2);
        ctx.fillStyle = p.isCyan
          ? `rgba(56, 189, 248, ${alpha * 0.16})`
          : `rgba(37, 99, 235, ${alpha * 0.2})`;
        ctx.fill();

        ctx.beginPath();
        ctx.arc(sx, sy, radius, 0, Math.PI * 2);
        ctx.fillStyle = p.isCyan
          ? `rgba(56, 189, 248, ${alpha})`
          : `rgba(96, 165, 250, ${alpha})`;
        ctx.fill();
      }

      // Cursor radial ambient glow
      const cursorGlow = ctx.createRadialGradient(mouse.x, mouse.y, 10, mouse.x, mouse.y, 280);
      cursorGlow.addColorStop(0, 'rgba(37, 99, 235, 0.12)');
      cursorGlow.addColorStop(0.5, 'rgba(56, 189, 248, 0.04)');
      cursorGlow.addColorStop(1, 'rgba(11, 18, 32, 0)');
      ctx.fillStyle = cursorGlow;
      ctx.fillRect(0, 0, width, height);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      aria-hidden="true"
      className="fixed inset-0 w-full h-full pointer-events-none z-0"
    />
  );
}
