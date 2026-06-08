import { useEffect, useRef } from 'react';

/** @returns {'desktop' | 'tablet' | 'mobile'} */
function getHeroGlobeMode() {
  const w = window.innerWidth;
  if (w <= 768) return 'mobile';
  if (w <= 1024) return 'tablet';
  return 'desktop';
}

export function HeroVideoAnimation() {
  const stageRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const stage = stageRef.current;
    const canvas = canvasRef.current;
    if (!stage || !canvas) {
      return undefined;
    }

    const context = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!context) {
      return undefined;
    }

    let animationFrame = 0;
    let width = 0;
    let height = 0;
    let dpr = 1;
    let sphereRadius = 120;
    let perspective = 400;
    let pointCount = 320;
    let mode = getHeroGlobeMode();
    let isAnimating = false;

    const mouseTarget = { x: 0, y: 0 };
    const mouseCurrent = { x: 0, y: 0 };
    const mouseLimit = 0.26;
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const rotation = { x: -0.3, y: 0.2 };
    let points = [];

    const clamp = (value, min, max) => Math.max(min, Math.min(max, value));

    const applyMode = () => {
      mode = getHeroGlobeMode();
      stage.dataset.heroGlobeMode = mode;
    };

    const buildSpherePoints = (count) => {
      const generatedPoints = [];
      const goldenAngle = Math.PI * (3 - Math.sqrt(5));

      for (let i = 0; i < count; i += 1) {
        const y = 1 - (i / (count - 1)) * 2;
        const ringRadius = Math.sqrt(1 - y * y);
        const theta = i * goldenAngle;
        generatedPoints.push({
          x: Math.cos(theta) * ringRadius,
          y,
          z: Math.sin(theta) * ringRadius,
          hueMix: i / count,
        });
      }

      return generatedPoints;
    };

    const resize = () => {
      applyMode();
      const stageRect = stage.getBoundingClientRect();
      width = stageRect.width;
      height = stageRect.height;
      dpr = clamp(window.devicePixelRatio || 1, 1, 2);
      canvas.width = Math.max(1, Math.floor(width * dpr));
      canvas.height = Math.max(1, Math.floor(height * dpr));
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      context.setTransform(dpr, 0, 0, dpr, 0, 0);

      sphereRadius = Math.min(width, height) * 0.335;
      perspective = Math.max(width, height) * 1.08;
      pointCount = mode === 'tablet' ? 240 : 300;
      points = buildSpherePoints(pointCount);

      if (mode === 'mobile') {
        context.clearRect(0, 0, width, height);
        stopAnimation();
      } else if (!isAnimating) {
        startAnimation();
      }
    };

    const stopAnimation = () => {
      isAnimating = false;
      window.cancelAnimationFrame(animationFrame);
    };

    const startAnimation = () => {
      if (isAnimating || mode === 'mobile') return;
      isAnimating = true;
      animationFrame = window.requestAnimationFrame(drawFrame);
    };

    const projectPoint = (point, rotX, rotY) => {
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);
      const x1 = point.x * cosY - point.z * sinY;
      const z1 = point.x * sinY + point.z * cosY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const y2 = point.y * cosX - z1 * sinX;
      const z2 = point.y * sinX + z1 * cosX;

      const depth = (z2 + 1) * 0.5;
      const scale = perspective / (perspective + z2 * sphereRadius * 0.82);
      const px = x1 * sphereRadius * scale + width * 0.5;
      const py = y2 * sphereRadius * scale + height * 0.5;

      return { x: px, y: py, z: z2, depth, scale };
    };

    const drawFrame = (time) => {
      if (mode === 'mobile') {
        context.clearRect(0, 0, width, height);
        stopAnimation();
        return;
      }

      const isTablet = mode === 'tablet';
      const lineAlphaScale = isTablet ? 0.32 : 1;
      const nodeAlphaScale = isTablet ? 0.38 : 1;

      context.clearRect(0, 0, width, height);

      if (!reducedMotion) {
        mouseCurrent.x += (mouseTarget.x - mouseCurrent.x) * 0.05;
        mouseCurrent.y += (mouseTarget.y - mouseCurrent.y) * 0.05;
        rotation.y += isTablet ? 0.001 : 0.0015;
        rotation.x += isTablet ? 0.0003 : 0.00045;
      }

      const rotY = rotation.y + mouseCurrent.x * mouseLimit * (isTablet ? 0.45 : 1);
      const rotX = rotation.x + mouseCurrent.y * mouseLimit * (isTablet ? 0.45 : 1);
      const projected = points.map((point) => projectPoint(point, rotX, rotY));

      const linkDistance = isTablet ? 0.24 : 0.27;
      const maxDistSq = linkDistance * linkDistance;
      context.lineWidth = isTablet ? 0.38 : 0.52;

      for (let i = 0; i < points.length; i += 1) {
        const a = points[i];
        const pa = projected[i];
        for (let j = i + 1; j < points.length; j += 1) {
          const b = points[j];
          const pb = projected[j];
          const dx = a.x - b.x;
          const dy = a.y - b.y;
          const dz = a.z - b.z;
          const distanceSq = dx * dx + dy * dy + dz * dz;
          if (distanceSq > maxDistSq) {
            continue;
          }

          const distanceRatio = 1 - distanceSq / maxDistSq;
          const depthMix = (pa.depth + pb.depth) * 0.5;
          const alphaBase = isTablet
            ? clamp(0.06 + distanceRatio * 0.1 + depthMix * 0.04, 0.05, 0.14)
            : clamp(0.45 + distanceRatio * 0.14 + depthMix * 0.06, 0.45, 0.65);
          const alpha = alphaBase * lineAlphaScale;
          if (alpha < 0.04) {
            continue;
          }

          context.strokeStyle = `rgba(35, 103, 164, ${alpha})`;
          context.beginPath();
          context.moveTo(pa.x, pa.y);
          context.lineTo(pb.x, pb.y);
          context.stroke();
        }
      }

      for (let i = 0; i < projected.length; i += 1) {
        const point = projected[i];
        const pulse = 0.86 + Math.sin(time * 0.0018 + i * 0.12) * 0.2;
        const radius = (0.68 + point.depth * 2.18) * point.scale * pulse;
        const alpha = (0.58 + point.depth * 0.34) * nodeAlphaScale;
        context.beginPath();
        context.fillStyle = `rgba(64, 187, 216, ${alpha})`;
        context.shadowBlur = 0;
        context.shadowColor = 'transparent';
        context.arc(point.x, point.y, radius, 0, Math.PI * 2);
        context.fill();
      }

      context.shadowBlur = 0;
      animationFrame = window.requestAnimationFrame(drawFrame);
    };

    const handlePointerMove = (event) => {
      const rect = stage.getBoundingClientRect();
      const relativeX = (event.clientX - rect.left) / rect.width;
      const relativeY = (event.clientY - rect.top) / rect.height;
      mouseTarget.x = clamp((relativeX - 0.5) * 2, -1, 1);
      mouseTarget.y = clamp((relativeY - 0.5) * 2, -1, 1);
    };

    const handlePointerLeave = () => {
      mouseTarget.x = 0;
      mouseTarget.y = 0;
    };

    const handleResize = () => {
      resize();
    };

    const resizeObserver = new ResizeObserver(handleResize);
    resizeObserver.observe(stage);
    window.addEventListener('resize', handleResize);
    stage.addEventListener('pointermove', handlePointerMove);
    stage.addEventListener('pointerleave', handlePointerLeave);

    applyMode();
    resize();
    if (mode !== 'mobile') {
      startAnimation();
    }

    return () => {
      stopAnimation();
      resizeObserver.disconnect();
      window.removeEventListener('resize', handleResize);
      stage.removeEventListener('pointermove', handlePointerMove);
      stage.removeEventListener('pointerleave', handlePointerLeave);
    };
  }, []);

  return (
    <div ref={stageRef} className="hero-video-stage" aria-hidden>
      <div className="hero-video-glow" />
      <canvas ref={canvasRef} className="hero-video-canvas" />
    </div>
  );
}
