"use client";

import { useEffect, useRef } from "react";

interface Particle {
  x: number;
  y: number;
  size: number;
  speedY: number;
  driftX: number;
  driftPhase: number;
  opacity: number;
  life: number;
  maxLife: number;
}

const PARTICLE_COUNT = 45;
const COLOR = "163, 230, 53"; // lime-400 en rgb, para poder controlar el alpha

export default function EmberParticles() {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    if (prefersReducedMotion) return;

    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    function resize() {
      width = canvas!.width = window.innerWidth;
      height = canvas!.height = window.innerHeight;
    }
    window.addEventListener("resize", resize);

    function createParticle(): Particle {
      const maxLife = 6 + Math.random() * 6;
      return {
        x: Math.random() * width,
        y: height + Math.random() * 100,
        size: 1 + Math.random() * 2.5,
        speedY: 0.4 + Math.random() * 0.8,
        driftX: (Math.random() - 0.5) * 0.6,
        driftPhase: Math.random() * Math.PI * 2,
        opacity: 0,
        life: 0,
        maxLife,
      };
    }

    const particles: Particle[] = Array.from({ length: PARTICLE_COUNT }, () => {
      const p = createParticle();
      p.y = Math.random() * height; // distribución inicial en toda la pantalla
      p.life = Math.random() * p.maxLife;
      return p;
    });

    let animationId: number;

    function animate() {
      ctx!.clearRect(0, 0, width, height);

      for (const p of particles) {
        p.life += 0.016; // ~60fps
        p.y -= p.speedY;
        p.x += Math.sin(p.life + p.driftPhase) * p.driftX;

        // fade in al nacer, fade out al morir
        const lifeRatio = p.life / p.maxLife;
        if (lifeRatio < 0.15) {
          p.opacity = lifeRatio / 0.15;
        } else if (lifeRatio > 0.7) {
          p.opacity = 1 - (lifeRatio - 0.7) / 0.3;
        } else {
          p.opacity = 1;
        }
        p.opacity = Math.max(0, Math.min(1, p.opacity)) * 0.5;

        ctx!.beginPath();
        ctx!.arc(p.x, p.y, p.size, 0, Math.PI * 2);
        ctx!.fillStyle = `rgba(${COLOR}, ${p.opacity})`;
        ctx!.shadowBlur = 6;
        ctx!.shadowColor = `rgba(${COLOR}, ${p.opacity})`;
        ctx!.fill();

        // reset cuando muere o sale de pantalla
        if (p.life >= p.maxLife || p.y < -20) {
          Object.assign(p, createParticle());
        }
      }

      animationId = requestAnimationFrame(animate);
    }

    animate();

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden="true"
    />
  );
}
