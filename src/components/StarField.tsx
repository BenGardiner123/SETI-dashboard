import React, { useEffect, useRef } from 'react';

interface Star {
  x: number;
  y: number;
  z: number;
  size: number;
  speed: number;
}

export const StarField: React.FC = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const starsRef = useRef<Star[]>([]);
  const animationIdRef = useRef<number>();

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const createStars = () => {
      const stars: Star[] = [];
      for (let i = 0; i < 200; i++) {
        stars.push({
          x: Math.random() * canvas.width,
          y: Math.random() * canvas.height,
          z: Math.random(),
          size: Math.random() * 2,
          speed: Math.random() * 0.5 + 0.1
        });
      }
      starsRef.current = stars;
    };

    const animate = () => {
      ctx.fillStyle = 'rgba(11, 20, 38, 0.1)';
      ctx.fillRect(0, 0, canvas.width, canvas.height);

      starsRef.current.forEach(star => {
        const opacity = star.z;
        ctx.fillStyle = `rgba(255, 255, 255, ${opacity})`;
        ctx.fillRect(star.x, star.y, star.size, star.size);

        star.y += star.speed;
        star.z += 0.001;

        if (star.y > canvas.height) {
          star.y = 0;
          star.x = Math.random() * canvas.width;
        }

        if (star.z > 1) {
          star.z = 0;
        }
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    createStars();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 z-0 pointer-events-none"
      style={{ background: 'linear-gradient(135deg, #0B1426 0%, #1E1B4B 100%)' }}
    />
  );
};