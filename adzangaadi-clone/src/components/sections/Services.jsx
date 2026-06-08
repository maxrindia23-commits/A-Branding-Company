import { motion } from 'framer-motion';
import { ServicesCarousel } from '../services/ServicesCarousel';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Services() {
  return (
    <section id="services" className="services-section" aria-labelledby="services-heading">
      <div className="services-section-bg" aria-hidden />

      <div className="services-inner">
        <motion.header
          className="services-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
        >
          <span className="services-label">OUR SERVICES</span>
          <h2 id="services-heading" className="services-title">
            Everything Your Brand
            <br />
            Needs to <span className="services-title-accent">Grow.</span>
          </h2>
          <p className="services-subtitle">
            Strategy, creativity, content, and performance —
            <br className="services-subtitle-break" />
            all under one roof.
          </p>
        </motion.header>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
          custom={0.08}
        >
          <ServicesCarousel />
        </motion.div>

        <div className="services-footer">
          <div className="services-divider" aria-hidden>
            <span className="services-divider-line" />
            <span className="services-divider-glow" />
          </div>

          <motion.div
            className="services-footer-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            custom={0}
          >
            <p className="services-footer-label">FROM STRATEGY TO SCALE</p>
            <h3 className="services-footer-title">
              We help brands launch,
              <br />
              grow, and <span className="services-title-accent">dominate their market.</span>
            </h3>
            <p className="services-footer-text">
              From defining your brand identity to executing high-performing marketing
              campaigns, we create connected brand experiences that drive awareness,
              engagement, and growth.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
