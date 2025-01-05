import { cn } from "../lib/utils";
import React, { useEffect, useRef, useCallback, useMemo } from "react";
import { createNoise3D } from "simplex-noise";
import { motion } from "framer-motion";
interface VortexProps {
  children?: React.ReactNode;
  className?: string;
  containerClassName?: string;
  particleCount?: number;
  rangeY?: number;
  baseHue?: number;
  baseSpeed?: number;
  rangeSpeed?: number;
  baseRadius?: number;
  rangeRadius?: number;
}
export const Vortex: React.FC<VortexProps> = ({
  particleCount = 30,
  rangeY = 100,
  baseHue = 220,
  baseSpeed = 0.0,
  rangeSpeed = 1.5,
  baseRadius = 1,
  rangeRadius = 2,
  children,
  className,
  containerClassName,
}) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const offscreenCanvas = useRef<HTMLCanvasElement>(
    document.createElement("canvas")
  );
  const particlePropCount = 9;
  const particlePropsLength = particleCount * particlePropCount;
  const baseTTL = 50;
  const rangeTTL = 150;
  const rangeHue = 100;
  const noiseSteps = 1;
  const xOff = 0.00125;
  const yOff = 0.00125;
  const zOff = 0.0005;
  let tick = 0;
  const noise3D = createNoise3D();
  let particleProps = new Float32Array(particlePropsLength);
  const TAU = 2 * Math.PI;
  const rand = (n: number) => n * Math.random();
  const randRange = (n: number) => n - rand(2 * n);
  const fadeInOut = (t: number, m: number) =>
    Math.abs(((t + 0.5 * m) % m) - 0.5 * m) / (0.5 * m);
  const lerp = (n1: number, n2: number, speed: number) =>
    (1 - speed) * n1 + speed * n2;

const center = useMemo(() => [0, 0], []);


const resize = useCallback(
  (canvas: { width: number; height: number; }, ctx: any, offscreen: { width: number; height: number; }) => {
    const { innerWidth, innerHeight } = window;
    canvas.width = innerWidth;
    canvas.height = innerHeight;
    offscreen.width = innerWidth;
    offscreen.height = innerHeight;
    center[0] = 0.5 * canvas.width;
    center[1] = 0.5 * canvas.height;
  },
  [center]
);


  const initParticles = useCallback(() => {
    tick = 0;
    particleProps = new Float32Array(particlePropsLength);
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      initParticle(i);
    }
  }, [particlePropsLength, particlePropCount]);


  const initParticle = (i: number) => {
    const canvas = offscreenCanvas.current;
    if (!canvas) return;
    const x = rand(canvas.width);
    const y = center[1] + randRange(rangeY);
    const vx = 0;
    const vy = 0;
    const life = 0;
    const ttl = baseTTL + rand(rangeTTL);
    const speed = baseSpeed + rand(rangeSpeed);
    const radius = baseRadius + rand(rangeRadius);
    const hue = baseHue + rand(rangeHue);
    particleProps.set([x, y, vx, vy, life, ttl, speed, radius, hue], i);
  };

  const drawParticle = (
    x: number,
    y: number,
    x2: number,
    y2: number,
    life: number,
    ttl: number,
    radius: number,
    hue: number,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.lineCap = "round";
    ctx.lineWidth = radius;
    ctx.strokeStyle = `hsla(${hue},100%,60%,${fadeInOut(life, ttl)})`;
    ctx.beginPath();
    ctx.moveTo(x, y);
    ctx.lineTo(x2, y2);
    ctx.stroke();
    ctx.closePath();
    ctx.restore();
  };
  const checkBounds = (x: number, y: number, canvas: HTMLCanvasElement) =>
    x > canvas.width || x < 0 || y > canvas.height || y < 0;

  const renderGlow = (
    canvas: HTMLCanvasElement,
    ctx: CanvasRenderingContext2D
  ) => {
    ctx.save();
    ctx.filter = "blur(8px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
    ctx.save();
    ctx.filter = "blur(4px) brightness(200%)";
    ctx.globalCompositeOperation = "lighter";
    ctx.drawImage(canvas, 0, 0);
    ctx.restore();
  };

  const drawParticles = (ctx: CanvasRenderingContext2D) => {
    for (let i = 0; i < particlePropsLength; i += particlePropCount) {
      updateParticle(i, ctx);
    }
  };
  
  const draw = useCallback(
    (
      canvas: HTMLCanvasElement,
      ctx: CanvasRenderingContext2D,
      offscreen: HTMLCanvasElement,
      offscreenCtx: CanvasRenderingContext2D
    ) => {
      tick++;
      offscreenCtx.clearRect(0, 0, offscreen.width, offscreen.height);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      drawParticles(offscreenCtx);
      renderGlow(offscreen, offscreenCtx);
      ctx.drawImage(offscreen, 0, 0);
      requestAnimationFrame(() => draw(canvas, ctx, offscreen, offscreenCtx));
    },
    [drawParticles, renderGlow, tick]
  );

  const setup = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    const offscreen = offscreenCanvas.current;
    if (canvas && container) {
      const ctx = canvas.getContext("2d");
      const offscreenCtx = offscreen.getContext("2d");
      if (ctx && offscreenCtx) {
        resize(canvas, ctx, offscreen);
        initParticles();
        draw(canvas, ctx, offscreen, offscreenCtx);
      }
    }
  }, [resize, initParticles, draw]);

  
  const updateParticle = (i: number, ctx: CanvasRenderingContext2D) => {
    const canvas = offscreenCanvas.current;
    if (!canvas) return;
    const x = particleProps[i];
    const y = particleProps[i + 1];
    const n = noise3D(x * xOff, y * yOff, tick * zOff) * noiseSteps * TAU;
    const vx = lerp(particleProps[i + 2], Math.cos(n), 0.5);
    const vy = lerp(particleProps[i + 3], Math.sin(n), 0.5);
    const life = particleProps[i + 4];
    const ttl = particleProps[i + 5];
    const speed = particleProps[i + 6];
    const x2 = x + vx * speed;
    const y2 = y + vy * speed;
    const radius = particleProps[i + 7];
    const hue = particleProps[i + 8];
    drawParticle(x, y, x2, y2, life, ttl, radius, hue, ctx);
    particleProps.set([x2, y2, vx, vy, life + 1], i);
    (checkBounds(x, y, canvas) || life > ttl) && initParticle(i);
  };
  
  const handleResize = useCallback(() => {
    const canvas = canvasRef.current;
    const ctx = canvas?.getContext("2d");
    const offscreen = offscreenCanvas.current;
    const offscreenCtx = offscreen?.getContext("2d");
    if (canvas && ctx && offscreen && offscreenCtx) {
      resize(canvas, ctx, offscreen);
    }
  }, [resize]);

  useEffect(() => {
    setup();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [handleResize, setup]);
  return (
    <div
      className={cn(
        "h-screen w-screen relative -z-10 top-0 left-0 bg-gradient-to-r from-indigo-950 via-blue-950 to-black",
        className
      )}
    >
      {" "}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        ref={containerRef}
        className={cn(
          "absolute h-full w-full inset-0 z-0 bg-transparent flex items-center justify-center",
          containerClassName
        )}
      >
        {" "}
        <canvas ref={canvasRef}></canvas>{" "}
      </motion.div>{" "}
      <div className={cn("relative z-10")}>{children}</div>{" "}
    </div>
  );
};
