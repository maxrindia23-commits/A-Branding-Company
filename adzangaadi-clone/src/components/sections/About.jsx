import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { SectionCta } from '../ui/SectionCta';
import { AboutVisual } from '../about/AboutVisual';

const METRICS = [
  { value: '50+', label: 'Brands Built' },
  { value: '10M+', label: 'Audience Reach' },
  { value: '5+', label: 'Years Experience' },
];

const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function About() {
  return (
    <section id="about" className="about-premium">
      <div className="about-premium-bg" aria-hidden />
      <div className="about-premium-mesh" aria-hidden />

      <div className="about-premium-inner">
        <FadeIn direction="left" amount={0.25} className="about-premium-visual-wrap">
          <AboutVisual />
        </FadeIn>

        <div className="about-premium-content">
          <motion.span
            custom={0}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="about-premium-label"
          >
            ABOUT US
          </motion.span>

          <motion.h2
            custom={0.08}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="about-premium-heading font-display"
          >
            We Build Brands That Connect, Influence &amp; Grow.
          </motion.h2>

          <motion.p
            custom={0.16}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.35 }}
            className="about-premium-text font-body"
          >
            At <span className="text-adz-cyan">ABC (A Branding Company)</span>, we combine
            strategy, creativity, and digital innovation to help brands stand out in a crowded
            world.
            <br />
            <br />
            From brand identity and packaging to social media management and personal branding, we
            create experiences that leave lasting impressions and drive measurable growth.
          </motion.p>

          <motion.ul
            custom={0.24}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="about-premium-metrics"
          >
            {METRICS.map((metric) => (
              <li key={metric.label} className="about-metric">
                <span className="about-metric-value font-display">{metric.value}</span>
                <span className="about-metric-label font-body">{metric.label}</span>
              </li>
            ))}
          </motion.ul>

          <motion.div
            custom={0.32}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <SectionCta href="#contact" className="section-cta--about">
              Let&apos;s Build Your Brand
            </SectionCta>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
