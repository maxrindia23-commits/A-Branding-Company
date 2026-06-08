import { motion } from 'framer-motion';
import { BRAND_PROCESS_ICONS } from '../brand-process/BrandProcessIcons';

const STEPS = [
  {
    id: 'discover',
    title: 'Discover',
    body: 'We dive deep into your brand, audience, competitors, and goals to uncover opportunities for growth.',
  },
  {
    id: 'strategize',
    title: 'Strategize',
    body: 'We create a clear roadmap built around positioning, messaging, and measurable objectives.',
  },
  {
    id: 'create',
    title: 'Create',
    body: 'We craft identities, content, campaigns, and experiences that connect with your audience.',
  },
  {
    id: 'grow',
    title: 'Grow',
    body: 'We optimize, refine, and scale your brand through data-driven decisions and continuous improvement.',
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

export function HowWeBuildBrands() {
  return (
    <section
      id="brand-process"
      className="brand-process"
      aria-labelledby="brand-process-heading"
    >
      <div className="brand-process-bg" aria-hidden />
      <div className="brand-process-dots" aria-hidden />
      <div className="brand-process-ambient brand-process-ambient--left" aria-hidden />
      <div className="brand-process-ambient brand-process-ambient--right" aria-hidden />

      <div className="brand-process-inner">
        <motion.header
          className="brand-process-header"
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.35 }}
          custom={0}
        >
          <h2 id="brand-process-heading" className="brand-process-title">
            How We Build Brands That Grow
          </h2>
          <p className="brand-process-subtitle">
            A proven process that transforms ideas into impactful brands.
          </p>
        </motion.header>

        <div className="brand-process-grid-wrap">
          <div className="brand-process-grid-glow" aria-hidden />
          <div className="brand-process-grid">
            {STEPS.map((step, index) => {
              const Icon = BRAND_PROCESS_ICONS[step.id];

              return (
                <motion.article
                  key={step.id}
                  className="brand-process-card"
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.2 }}
                  custom={0.08 + index * 0.1}
                  whileHover={{ y: -8 }}
                  transition={{ type: 'tween', duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                >
                  <div className="brand-process-card-texture" aria-hidden />
                  <div className="brand-process-card-glow" aria-hidden />

                  <div className="brand-process-card-icon-hub">
                    <span className="brand-process-card-icon-ring" aria-hidden />
                    <span className="brand-process-card-icon-ring brand-process-card-icon-ring--outer" aria-hidden />
                    <span className="brand-process-card-icon">
                      <Icon />
                    </span>
                  </div>

                  <h3 className="brand-process-card-title">{step.title}</h3>
                  <p className="brand-process-card-body">{step.body}</p>
                </motion.article>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
