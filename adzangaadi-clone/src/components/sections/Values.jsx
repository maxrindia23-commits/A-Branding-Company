import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { VALUES_ICONS } from '../values/ValuesIcons';
import { ValuesCtaBanner } from '../values/ValuesCtaBanner';

const VALUES = [
  {
    id: 'strategy',
    title: 'Strategic Thinking',
    body: 'Every campaign starts with a clear strategy designed around your goals, audience, and growth vision.',
  },
  {
    id: 'creative',
    title: 'Creative That Converts',
    body: 'Beautiful design is only the beginning. We create experiences that attract attention and drive action.',
  },
  {
    id: 'performance',
    title: 'Performance Driven',
    body: 'We combine creativity with data to continuously improve results and maximize return on investment.',
  },
  {
    id: 'partnership',
    title: 'Growth Partnership',
    body: 'We work as an extension of your team, supporting your brand through every stage of growth.',
  },
];

export function Values() {
  return (
    <section className="values-section relative px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn className="text-center">
          <h2 className="font-clash text-2xl font-bold leading-snug text-adz-white sm:text-3xl md:text-4xl lg:text-5xl">
            Why Clients Stay With ABC
          </h2>
          <p className="mx-auto mt-8 max-w-4xl font-body text-base text-adz-white/70 md:text-lg">
            More than marketing. We build partnerships that create lasting brand impact.
          </p>
        </FadeIn>

        <div className="mt-20 grid gap-8 sm:grid-cols-2">
          {VALUES.map((item, i) => {
            const Icon = VALUES_ICONS[item.id];

            return (
              <FadeIn key={item.id} delay={i * 0.1}>
                <motion.article
                  whileHover={{ y: -6 }}
                  className="values-card overflow-hidden rounded-[var(--radius-card)] p-8 transition-all duration-300 ease-in-out"
                >
                  <span className="values-card-texture" aria-hidden />
                  <span className="values-card-inner-glow" aria-hidden />
                  <div
                    className={`values-card-icon values-card-icon--${item.id} mb-6 h-24 w-24`}
                    aria-hidden
                  >
                    <span className="values-card-icon-ring" />
                    <Icon />
                  </div>
                  <h3 className="font-clash text-xl font-bold text-adz-cyan">{item.title}</h3>
                  <p className="mt-3 font-body text-sm leading-relaxed text-adz-white/70">
                    {item.body}
                  </p>
                </motion.article>
              </FadeIn>
            );
          })}
        </div>

        <FadeIn delay={0.3} className="mt-16">
          <ValuesCtaBanner />
        </FadeIn>
      </div>
    </section>
  );
}
