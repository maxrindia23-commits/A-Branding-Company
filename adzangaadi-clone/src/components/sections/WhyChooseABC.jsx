import { motion } from 'framer-motion';
import { WHY_CHOOSE_ICONS } from '../why-choose/WhyChooseIcons';

const FEATURES = [
  {
    icon: 'strategy',
    title: 'Brand Strategy',
    body: 'Building strong foundations for long-term growth.',
  },
  {
    icon: 'creative',
    title: 'Creative Excellence',
    body: 'Designs and campaigns that capture attention.',
  },
  {
    icon: 'performance',
    title: 'Performance Marketing',
    body: 'Data-driven strategies that generate measurable results.',
  },
  {
    icon: 'branding',
    title: 'End-to-End Branding',
    body: 'From identity to digital presence, everything under one roof.',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function WhyChooseABC() {
  return (
    <section id="why-choose" className="why-choose" aria-labelledby="why-choose-heading">
      <div className="why-choose-bg" aria-hidden />
      <div className="why-choose-ambient why-choose-ambient--left" aria-hidden />
      <div className="why-choose-ambient why-choose-ambient--right" aria-hidden />

      <div className="why-choose-inner">
        <motion.header
          className="why-choose-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
        >
          <h2 id="why-choose-heading" className="why-choose-title">
            Why Brands Choose ABC
          </h2>
          <p className="why-choose-subtitle">
            We combine strategy, creativity, and performance marketing to build brands that
            connect, influence, and grow.
          </p>
        </motion.header>

        <div className="why-choose-grid-wrap">
          <div className="why-choose-grid-glow" aria-hidden />
          <div className="why-choose-grid">
            {FEATURES.map((feature, index) => {
              const Icon = WHY_CHOOSE_ICONS[feature.icon];

              return (
                <motion.article
                  key={feature.icon}
                  className="why-choose-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.08 + index * 0.1}
                  whileHover={{ y: -6 }}
                  transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="why-choose-card-dots" aria-hidden />
                  <div className="why-choose-card-corner-glow" aria-hidden />

                  <div className="why-choose-card-row">
                    <div className="why-choose-card-icon-hub">
                      <span className="why-choose-card-icon-ring" aria-hidden />
                      <span className="why-choose-card-icon">
                        <Icon />
                      </span>
                    </div>

                    <div className="why-choose-card-content">
                      <h3 className="why-choose-card-title">{feature.title}</h3>
                      <p className="why-choose-card-body">{feature.body}</p>
                    </div>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
