import { useEffect, useRef } from 'react';

const CYAN = '64, 187, 216';
const BLUE = '35, 103, 164';

function drawWaveMesh(ctx, w, h, t) {
  const cx = w / 2;
  const cy = h / 2;
  const radius = Math.min(w, h) * 0.36;
  const cols = 52;
  const rows = 36;

  for (let row = 0; row < rows; row++) {
    for (let col = 0; col < cols; col++) {
      const u = col / (cols - 1);
      const v = row / (rows - 1);
      const px = (u - 0.5) * 2;
      const py = (v - 0.5) * 2;
      const dist = Math.hypot(px, py);
      if (dist > 1) continue;

      const fade = 1 - dist * dist;
      const wave1 = Math.sin(px * 4.2 + t * 0.0018) * 0.22;
      const wave2 = Math.sin(py * 5.5 - t * 0.0014) * 0.16;
      const wave3 = Math.sin((px + py) * 3.2 + t * 0.0022) * 0.12;
      const lift = wave1 + wave2 + wave3;

      const x = cx + px * radius * (1 + lift * 0.35);
      const y = cy + py * radius * (1 + lift * 0.35) + Math.sin(px * 6 + t * 0.002) * radius * 0.08;

      const size = (0.8 + fade * 1.8) * (0.85 + Math.sin(t * 0.003 + col + row) * 0.15);
      const alpha = fade * (0.35 + Math.abs(lift) * 1.2);

      ctx.beginPath();
      ctx.arc(x, y, size, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${CYAN}, ${Math.min(alpha, 0.95)})`;
      ctx.fill();

      if (fade > 0.55 && (col * 7 + row * 13) % 17 === 0) {
        ctx.beginPath();
        ctx.arc(x, y, size * 2.2, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(255, 255, 255, ${alpha * 0.35})`;
        ctx.fill();
      }
    }
  }
}

function drawParticles(ctx, w, h, t, particles) {
  const cx = w / 2;
  const cy = h / 2;

  particles.forEach((p) => {
    p.angle += p.speed;
    const orbitR = p.orbit * Math.min(w, h) * 0.48;
    const x = cx + Math.cos(p.angle) * orbitR + p.ox;
    const y = cy + Math.sin(p.angle) * orbitR * 0.85 + p.oy + Math.sin(t * 0.0015 + p.phase) * 8;

    const glow = ctx.createRadialGradient(x, y, 0, x, y, p.r * 4);
    glow.addColorStop(0, `rgba(${CYAN}, ${p.alpha})`);
    glow.addColorStop(0.4, `rgba(${BLUE}, ${p.alpha * 0.4})`);
    glow.addColorStop(1, 'transparent');
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(x, y, p.r * 4, 0, Math.PI * 2);
    ctx.fill();

    ctx.beginPath();
    ctx.arc(x, y, p.r, 0, Math.PI * 2);
    ctx.fillStyle = `rgba(${CYAN}, ${Math.min(p.alpha + 0.3, 1)})`;
    ctx.fill();
  });
}

export function AboutVisual() {
  const rootRef = useRef(null);
  const meshRef = useRef(null);
  const particleRef = useRef(null);

  useEffect(() => {
    const meshCanvas = meshRef.current;
    const particleCanvas = particleRef.current;
    const root = rootRef.current;
    if (!meshCanvas || !particleCanvas || !root) return;

    const meshCtx = meshCanvas.getContext('2d');
    const partCtx = particleCanvas.getContext('2d');
    if (!meshCtx || !partCtx) return;

    let rafId = 0;
    let w = 0;
    let h = 0;

    const satellites = Array.from({ length: 9 }, (_, i) => ({
      angle: (i / 9) * Math.PI * 2,
      speed: 0.00015 + (i % 3) * 0.00008,
      orbit: 0.55 + (i % 4) * 0.12,
      r: 2.5 + (i % 3) * 2,
      alpha: 0.45 + (i % 2) * 0.25,
      ox: (Math.random() - 0.5) * 20,
      oy: (Math.random() - 0.5) * 20,
      phase: Math.random() * Math.PI * 2,
    }));

    const resize = () => {
      const rect = root.getBoundingClientRect();
      const dpr = Math.min(window.devicePixelRatio || 1, 2);
      w = rect.width;
      h = rect.height;
      [meshCanvas, particleCanvas].forEach((c) => {
        c.width = w * dpr;
        c.height = h * dpr;
        c.style.width = `${w}px`;
        c.style.height = `${h}px`;
      });
      meshCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
      partCtx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const draw = (time) => {
      meshCtx.clearRect(0, 0, w, h);
      const cx = w / 2;
      const cy = h / 2;
      const r = Math.min(w, h) * 0.38;

      const coreGlow = meshCtx.createRadialGradient(cx, cy, 0, cx, cy, r * 1.1);
      coreGlow.addColorStop(0, `rgba(${CYAN}, 0.25)`);
      coreGlow.addColorStop(0.5, `rgba(${BLUE}, 0.12)`);
      coreGlow.addColorStop(1, 'transparent');
      meshCtx.fillStyle = coreGlow;
      meshCtx.beginPath();
      meshCtx.arc(cx, cy, r * 1.1, 0, Math.PI * 2);
      meshCtx.fill();

      meshCtx.save();
      meshCtx.beginPath();
      meshCtx.arc(cx, cy, r, 0, Math.PI * 2);
      meshCtx.clip();
      drawWaveMesh(meshCtx, w, h, time);
      meshCtx.restore();

      partCtx.clearRect(0, 0, w, h);
      drawParticles(partCtx, w, h, time, satellites);

      rafId = requestAnimationFrame(draw);
    };

    resize();
    rafId = requestAnimationFrame(draw);
    const ro = new ResizeObserver(resize);
    ro.observe(root);

    return () => {
      cancelAnimationFrame(rafId);
      ro.disconnect();
    };
  }, []);

  return (
    <div className="about-orb" ref={rootRef} aria-hidden>
      <div className="about-orb-floor-grid" />
      <div className="about-orb-ground" />

      <div className="about-orb-ambient" />
      <div className="about-orb-ambient about-orb-ambient--2" />

      <svg className="about-orb-hud" viewBox="0 0 400 400" aria-hidden>
        <circle cx="200" cy="200" r="192" fill="none" stroke="rgba(64, 187, 216, 0.12)" strokeWidth="0.75" />
      </svg>

      <svg className="about-orb-ring about-orb-ring--dotted" viewBox="0 0 400 400" aria-hidden>
        <circle
          cx="200"
          cy="200"
          r="168"
          fill="none"
          stroke="rgba(64, 187, 216, 0.35)"
          strokeWidth="1"
          strokeDasharray="2 8"
        />
      </svg>

      <svg className="about-orb-ring about-orb-ring--ticks" viewBox="0 0 400 400" aria-hidden>
        <defs>
          <linearGradient id="about-tick-stroke" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#40bbd8" />
            <stop offset="50%" stopColor="#5ed4f0" />
            <stop offset="100%" stopColor="#2367a4" />
          </linearGradient>
          <filter id="about-tick-glow">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>
        <circle
          cx="200"
          cy="200"
          r="172"
          fill="none"
          stroke="url(#about-tick-stroke)"
          strokeWidth="5"
          filter="url(#about-tick-glow)"
        />
        {Array.from({ length: 72 }, (_, i) => {
          const a = (i / 72) * Math.PI * 2 - Math.PI / 2;
          const inner = 162;
          const outer = i % 6 === 0 ? 178 : 172;
          const x1 = 200 + Math.cos(a) * inner;
          const y1 = 200 + Math.sin(a) * inner;
          const x2 = 200 + Math.cos(a) * outer;
          const y2 = 200 + Math.sin(a) * outer;
          return (
            <line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="rgba(64, 187, 216, 0.85)"
              strokeWidth={i % 6 === 0 ? 2 : 1}
            />
          );
        })}
      </svg>

      <div className="about-orb-core-stage">
        <canvas ref={meshRef} className="about-orb-mesh-canvas" />
        <div className="about-orb-glass">
          <div className="about-orb-glass-shine" />
          <div className="about-orb-glass-rim" />
        </div>
        <canvas ref={particleRef} className="about-orb-particle-canvas" />
      </div>

      <svg className="about-orb-ring about-orb-ring--thin" viewBox="0 0 400 400" aria-hidden>
        <ellipse
          cx="200"
          cy="200"
          rx="185"
          ry="62"
          fill="none"
          stroke="rgba(64, 187, 216, 0.2)"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}
