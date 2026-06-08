import { useCallback, useRef } from 'react';
import { motion } from 'framer-motion';
import { WhyParticles } from '../why/WhyParticles';

const fadeUp = {
  hidden: { opacity: 0, y: 40 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WhySection() {
  const sectionRef = useRef(null);

  const handlePointerMove = useCallback((e) => {
    const el = sectionRef.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    el.style.setProperty('--why-spot-x', `${x}%`);
    el.style.setProperty('--why-spot-y', `${y}%`);
  }, []);

  const handlePointerLeave = useCallback(() => {
    const el = sectionRef.current;
    if (!el) return;
    el.style.setProperty('--why-spot-x', '50%');
    el.style.setProperty('--why-spot-y', '35%');
  }, []);

  return (
    <section
      id="why"
      ref={sectionRef}
      className="why-abc"
      onMouseMove={handlePointerMove}
      onPointerLeave={handlePointerLeave}
    >
      <div className="why-abc-bg" aria-hidden />
      <div className="why-abc-heading-glow" aria-hidden />
      <div className="why-abc-spotlight" aria-hidden />
      <WhyParticles />

      <div className="why-abc-inner">
        <motion.span
          custom={0}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="why-abc-label font-body"
        >
          WHY ABC
        </motion.span>

        <motion.h2
          custom={0.1}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="why-abc-headline font-display"
        >
          Brands Don&apos;t Grow by Chance.
        </motion.h2>

        <motion.p
          custom={0.2}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          className="why-abc-gradient-line font-display"
        >
          They Grow by{' '}
          <span className="why-abc-gradient-text">
            Strategy, Creativity &amp; Consistency.
          </span>
        </motion.p>

        <motion.div
          custom={0.28}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="why-abc-separator"
          aria-hidden
        />

        <motion.p
          custom={0.36}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="why-abc-lead font-body"
        >
          At <span className="text-adz-cyan">ABC (A Branding Company)</span>, we don&apos;t just
          create campaigns — we build brand experiences that people remember.
        </motion.p>

        <motion.p
          custom={0.44}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="why-abc-body font-body"
        >
          From digital marketing and social media management to personal branding and visual
          identity, we help businesses stand out, connect deeply, and grow with purpose.
        </motion.p>

        <motion.p
          custom={0.52}
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="why-abc-statement font-display"
        >
          Your brand deserves more than visibility.
          <br />
          <span className="why-abc-statement-accent">It deserves influence.</span>
        </motion.p>
      </div>
    </section>
  );
}
