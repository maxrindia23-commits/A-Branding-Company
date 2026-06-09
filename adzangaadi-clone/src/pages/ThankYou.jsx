import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

/* ─── Floating particle canvas ─────────────────────────────────────────── */
function ParticleCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let raf;
    let w, h;

    const particles = Array.from({ length: 55 }, () => createParticle());

    function createParticle() {
      return {
        x: Math.random() * (w || window.innerWidth),
        y: Math.random() * (h || window.innerHeight),
        r: Math.random() * 1.8 + 0.4,
        dx: (Math.random() - 0.5) * 0.35,
        dy: -(Math.random() * 0.45 + 0.12),
        alpha: Math.random() * 0.5 + 0.08,
        color: Math.random() > 0.5 ? '64,187,216' : '35,103,164',
      };
    }

    function resize() {
      w = canvas.width = window.innerWidth;
      h = canvas.height = window.innerHeight;
    }
    resize();
    window.addEventListener('resize', resize);

    function draw() {
      ctx.clearRect(0, 0, w, h);
      for (const p of particles) {
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${p.color},${p.alpha})`;
        ctx.fill();
        p.x += p.dx;
        p.y += p.dy;
        if (p.y < -4) { Object.assign(p, createParticle(), { y: h + 4 }); }
        if (p.x < -4) p.x = w + 4;
        if (p.x > w + 4) p.x = -4;
      }
      raf = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'fixed',
        inset: 0,
        pointerEvents: 'none',
        zIndex: 0,
      }}
      aria-hidden
    />
  );
}

/* ─── Animated SVG checkmark ────────────────────────────────────────────── */
function CheckmarkCircle() {
  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.55, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
      style={{
        position: 'relative',
        width: 88,
        height: 88,
        margin: '0 auto 1.75rem',
        flexShrink: 0,
      }}
    >
      {/* Outer glow ring */}
      <motion.div
        initial={{ opacity: 0, scale: 0.6 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          position: 'absolute',
          inset: -12,
          borderRadius: '50%',
          background:
            'radial-gradient(circle, rgba(64,187,216,0.22) 0%, transparent 70%)',
          filter: 'blur(8px)',
        }}
        aria-hidden
      />
      {/* SVG circle + check */}
      <svg width="88" height="88" viewBox="0 0 88 88" fill="none" aria-hidden>
        {/* Circle track */}
        <circle cx="44" cy="44" r="40" stroke="rgba(64,187,216,0.18)" strokeWidth="2" />
        {/* Animated circle stroke */}
        <motion.circle
          cx="44" cy="44" r="40"
          stroke="#40bbd8"
          strokeWidth="2.5"
          strokeLinecap="round"
          fill="none"
          strokeDasharray={251}
          initial={{ strokeDashoffset: 251, opacity: 0 }}
          animate={{ strokeDashoffset: 0, opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
          style={{ transform: 'rotate(-90deg)', transformOrigin: '44px 44px' }}
        />
        {/* Animated checkmark */}
        <motion.path
          d="M28 44l12 12 20-22"
          stroke="#40bbd8"
          strokeWidth="3"
          strokeLinecap="round"
          strokeLinejoin="round"
          fill="none"
          strokeDasharray={52}
          initial={{ strokeDashoffset: 52 }}
          animate={{ strokeDashoffset: 0 }}
          transition={{ duration: 0.45, delay: 0.85, ease: 'easeOut' }}
        />
      </svg>
    </motion.div>
  );
}

/* ─── Main page ─────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (d = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.75, delay: d, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function ThankYou() {
  return (
    <div
      style={{
        position: 'relative',
        minHeight: '100vh',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'clamp(2rem, 6vw, 4rem) clamp(1.25rem, 5vw, 2.5rem)',
        background: '#02070d',
        fontFamily: 'Poppins, system-ui, sans-serif',
        overflowX: 'hidden',
      }}
    >
      {/* Background radial glows */}
      <div aria-hidden style={{
        position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 0,
        background: `
          radial-gradient(ellipse 70% 55% at 50% 0%, rgba(35,103,164,0.22) 0%, transparent 55%),
          radial-gradient(ellipse 55% 40% at 20% 80%, rgba(35,103,164,0.16) 0%, transparent 60%),
          radial-gradient(ellipse 45% 35% at 82% 25%, rgba(64,187,216,0.14) 0%, transparent 55%)
        `,
      }} />

      <ParticleCanvas />

      {/* Card */}
      <motion.div
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        style={{
          position: 'relative',
          zIndex: 1,
          width: '100%',
          maxWidth: 520,
          borderRadius: '1.75rem',
          border: '1px solid rgba(64,187,216,0.28)',
          background: 'linear-gradient(155deg, rgba(35,103,164,0.13) 0%, rgba(12,22,36,0.82) 42%, rgba(6,11,18,0.94) 100%)',
          WebkitBackdropFilter: 'blur(24px)',
          backdropFilter: 'blur(24px)',
          boxShadow: `
            inset 0 1px 0 rgba(255,255,255,0.08),
            0 20px 60px rgba(0,0,0,0.5),
            0 0 48px rgba(64,187,216,0.1)
          `,
          padding: 'clamp(2rem, 5vw, 3rem) clamp(1.75rem, 5vw, 2.75rem)',
          textAlign: 'center',
          overflow: 'hidden',
        }}
      >
        {/* Top glowing line */}
        <div aria-hidden style={{
          position: 'absolute', top: 0, left: '8%', right: '8%', height: 1,
          background: 'linear-gradient(90deg, transparent, rgba(64,187,216,0.6) 50%, transparent)',
          opacity: 0.9,
        }} />

        {/* Corner glow */}
        <div aria-hidden style={{
          position: 'absolute', top: '-15%', left: '50%', transform: 'translateX(-50%)',
          width: '70%', height: '45%', borderRadius: '50%',
          background: 'radial-gradient(ellipse 100% 100% at 50% 0%, rgba(64,187,216,0.14) 0%, transparent 70%)',
          filter: 'blur(18px)', pointerEvents: 'none',
        }} />

        {/* Badge */}
        <motion.span
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: 'inline-block',
            padding: '0.4rem 1rem',
            borderRadius: 9999,
            border: '1px solid rgba(64,187,216,0.38)',
            background: 'rgba(35,103,164,0.14)',
            fontSize: '0.625rem',
            fontWeight: 600,
            letterSpacing: '0.28em',
            color: '#40bbd8',
            marginBottom: '1.5rem',
            textTransform: 'uppercase',
          }}
        >
          MESSAGE RECEIVED
        </motion.span>

        {/* Checkmark */}
        <CheckmarkCircle />

        {/* Heading */}
        <motion.h1
          custom={0.55}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            margin: '0 0 0.65rem',
            fontFamily: '"Red Hat Display", system-ui, sans-serif',
            fontSize: 'clamp(2.25rem, 6vw, 3rem)',
            fontWeight: 700,
            lineHeight: 1.1,
            letterSpacing: '-0.03em',
            color: '#ffffff',
          }}
        >
          Thank You!
        </motion.h1>

        {/* Subheading */}
        <motion.p
          custom={0.65}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            margin: '0 0 0.75rem',
            fontSize: 'clamp(1rem, 2.2vw, 1.15rem)',
            fontWeight: 500,
            color: '#40bbd8',
            lineHeight: 1.5,
          }}
        >
          We&apos;ve received your message successfully.
        </motion.p>

        {/* Description */}
        <motion.p
          custom={0.72}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            margin: '0 auto 2.25rem',
            maxWidth: 380,
            fontSize: 'clamp(0.9rem, 1.8vw, 1rem)',
            color: 'rgba(255,255,255,0.62)',
            lineHeight: 1.75,
          }}
        >
          Our team will review your enquiry and get back to you within{' '}
          <span style={{ color: '#40bbd8', fontWeight: 600 }}>24 hours</span>.
        </motion.p>

        {/* Divider */}
        <motion.div
          custom={0.78}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          aria-hidden
          style={{
            width: 'min(220px, 60%)',
            height: 1,
            margin: '0 auto 2rem',
            background: 'linear-gradient(90deg, transparent, rgba(64,187,216,0.38), transparent)',
          }}
        />

        {/* Buttons */}
        <motion.div
          custom={0.85}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            gap: '0.85rem',
            justifyContent: 'center',
          }}
        >
          {/* Primary — Back to Home */}
          <a
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.85rem 1.85rem',
              borderRadius: 9999,
              background: 'linear-gradient(90deg, #2367a4 0%, #40bbd8 100%)',
              border: '1px solid rgba(64,187,216,0.55)',
              color: '#ffffff',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              boxShadow: '0 0 24px rgba(64,187,216,0.28)',
              transition: 'transform 0.3s ease, box-shadow 0.3s ease, filter 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.boxShadow = '0 0 36px rgba(64,187,216,0.48)';
              e.currentTarget.style.filter = 'brightness(1.06)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(64,187,216,0.28)';
              e.currentTarget.style.filter = '';
            }}
          >
            ← Back to Home
          </a>

          {/* Secondary — Explore Services */}
          <a
            href="/#services"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '0.55rem',
              padding: '0.85rem 1.85rem',
              borderRadius: 9999,
              background: 'transparent',
              border: '1px solid rgba(64,187,216,0.38)',
              color: '#ffffff',
              fontFamily: 'Poppins, system-ui, sans-serif',
              fontSize: '0.8125rem',
              fontWeight: 600,
              letterSpacing: '0.06em',
              textTransform: 'uppercase',
              textDecoration: 'none',
              transition: 'transform 0.3s ease, border-color 0.3s ease, box-shadow 0.3s ease',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'translateY(-2px)';
              e.currentTarget.style.borderColor = 'rgba(64,187,216,0.7)';
              e.currentTarget.style.boxShadow = '0 0 24px rgba(64,187,216,0.2)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = '';
              e.currentTarget.style.borderColor = 'rgba(64,187,216,0.38)';
              e.currentTarget.style.boxShadow = '';
            }}
          >
            Explore Services →
          </a>
        </motion.div>
      </motion.div>

      {/* Footer copyright */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1, duration: 0.6 }}
        style={{
          position: 'relative',
          zIndex: 1,
          marginTop: '2rem',
          fontSize: '0.75rem',
          color: 'rgba(255,255,255,0.28)',
          fontFamily: 'Poppins, system-ui, sans-serif',
          letterSpacing: '0.02em',
        }}
      >
        © 2025 A Branding Company. All rights reserved.
      </motion.p>
    </div>
  );
}
