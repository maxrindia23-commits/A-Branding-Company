import { motion } from 'framer-motion';
import { HeroVideoAnimation } from '../hero/HeroVideoAnimation';
import { SectionCta } from '../ui/SectionCta';

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.9, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

function GlobeIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      className="text-white/50"
      aria-hidden
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M2 12h20M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z" />
    </svg>
  );
}

export function HeroSection() {
  return (
    <section className="hero-section">
      <div className="hero-container">
        <div className="hero-inner">
          <div className="hero-copy">
            <motion.p
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="hero-eyebrow font-body text-[10px] font-medium uppercase sm:text-[11px]"
            >
              BUILDING BRANDS. CREATING IMPACT.
            </motion.p>

            <motion.h1
              custom={0.12}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="hero-headline mt-7 font-display font-bold text-white sm:mt-8"
            >
              We build brands
              <br />
              that build
              <br />
              <span className="text-adz-cyan">your business.</span>
            </motion.h1>

            <motion.div custom={0.24} variants={fadeUp} initial="hidden" animate="visible">
              <SectionCta href="#contact" className="mt-9 sm:mt-10">
                Let&apos;s Grow Together
              </SectionCta>
            </motion.div>

            <motion.div
              custom={0.36}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="mt-12 flex items-center gap-2.5"
            >
              <GlobeIcon />
              <a
                href="https://www.abrandingcompany.in"
                target="_blank"
                rel="noopener noreferrer"
                className="hero-url font-body"
              >
                www.abrandingcompany.in
              </a>
            </motion.div>
          </div>

          <div className="hero-visual-wrap" aria-hidden>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.4, delay: 0.12, ease: [0.22, 1, 0.36, 1] }}
              className="hero-bg-globe"
            >
              <HeroVideoAnimation />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
