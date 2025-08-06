'use client';

import { useEffect, useRef } from 'react';
import styles from './LoyaltyHeroSection.module.css';

const GalaxyBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsCount = 1000;
  const stars: { x: number; y: number; z: number; pz: number }[] = [];
  let animationFrameId: number;

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Set canvas size
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Initialize stars
    const initStars = () => {
      for (let i = 0; i < starsCount; i++) {
        stars.push({
          x: Math.random() * canvas.width * 2 - canvas.width / 2,
          y: Math.random() * canvas.height * 2 - canvas.height / 2,
          z: Math.random() * canvas.width,
          pz: 0,
        });
      }
    };

    // Animation loop
    const animate = () => {
      if (!canvas || !ctx) return;
      
      // Clear canvas with a semi-transparent black to create trails
      ctx.fillStyle = 'rgba(0, 0, 0, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      
      // Center of the canvas
      const cx = canvas.width / 2;
      const cy = canvas.height / 2;
      
      // Draw stars
      ctx.fillStyle = '#ffffff';
      stars.forEach((star, i) => {
        // 3D perspective
        star.pz = star.z;
        star.z -= 0.2;
        
        // Reset star if it's too close or too far
        if (star.z <= 0) {
          star.x = Math.random() * canvas.width * 2 - canvas.width / 2;
          star.y = Math.random() * canvas.height * 2 - canvas.height / 2;
          star.z = canvas.width;
          star.pz = star.z;
        }
        
        // Calculate star position
        const sx = (star.x / star.z) * 1000 + cx;
        const sy = (star.y / star.z) * 1000 + cy;
        const px = (star.x / star.pz) * 1000 + cx;
        const py = (star.y / star.pz) * 1000 + cy;
        
        // Draw star
        ctx.beginPath();
        ctx.moveTo(px, py);
        ctx.lineTo(sx, sy);
        ctx.strokeStyle = `rgba(255, 255, 255, ${star.z / canvas.width * 2})`;
        ctx.lineWidth = star.z / 100;
        ctx.stroke();
        
        // Add some colorful stars
        if (i % 5 === 0) {
          ctx.beginPath();
          ctx.arc(sx, sy, 0.5, 0, Math.PI * 2);
          ctx.fillStyle = `hsl(${i % 360}, 100%, 80%)`;
          ctx.fill();
        }
      });
      
      animationFrameId = requestAnimationFrame(animate);
    };

    // Initialize
    resizeCanvas();
    initStars();
    animate();

    // Handle window resize
    const handleResize = () => {
      resizeCanvas();
      stars.length = 0;
      initStars();
    };

    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className={styles.galaxyCanvas}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: 0,
      }}
    />
  );
};

export default GalaxyBackground;
