import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';
import { SectionCta } from '../ui/SectionCta';

const CARDS = [
  {
    title: 'Branding With Purpose',
    body: "We don't just design logos or visuals. We build brand identities with clarity, emotion, and long-term impact that audiences genuinely connect with.",
  },
  {
    title: 'Creative Meets Strategy',
    body: 'Every campaign, design, and digital experience is backed by strategy — blending creativity with performance to help brands grow smarter and faster.',
  },
  {
    title: 'Built To Stand Out',
    body: 'In a crowded digital world, average brands disappear. We create bold branding, social media experiences, and marketing that make businesses unforgettable.',
  },
];

export function MarketingWild() {
  return (
    <section className="relative bg-adz-dark px-6 py-24 md:px-12 md:py-32 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <h2 className="font-clash text-center text-3xl font-bold leading-tight text-adz-white sm:text-4xl md:text-5xl">
            What Makes ABC{' '}
            <span className="text-adz-cyan">Different?</span>
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-center font-body text-base text-adz-white/75 md:text-lg">
            At A Branding Company (ABC), we create bold digital experiences that combine
            creativity, strategy, and storytelling to help brands grow, stand out, and stay
            unforgettable in the modern world.
          </p>
        </FadeIn>

        <div className="mt-16 grid items-stretch gap-6 md:grid-cols-3 md:gap-8">
          {CARDS.map((card, i) => (
            <FadeIn key={card.title} delay={i * 0.1} direction="up">
              <motion.article
                whileHover={{ y: -8, borderColor: 'rgba(64,187,216,0.6)' }}
                className="group flex h-full min-h-[260px] flex-col rounded-[var(--radius-card)] border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-300 ease-in-out hover:border-adz-cyan/40 hover:bg-white/[0.05] hover:shadow-[0_20px_60px_rgba(64,187,216,0.2)] md:min-h-[280px] md:p-10"
              >
                <h3 className="font-clash text-xl font-bold text-adz-cyan sm:text-2xl">
                  {card.title}
                </h3>
                <p className="mt-4 flex-1 font-body text-sm leading-relaxed text-adz-white/75 sm:text-base sm:leading-relaxed">
                  {card.body}
                </p>
              </motion.article>
            </FadeIn>
          ))}
        </div>

        <FadeIn className="mt-20 text-center">
        <p className="font-clash text-xl font-semibold text-adz-white sm:text-2xl md:text-3xl">
          Let&apos;s Build A Brand People Remember
        </p>
        <div className="mt-10">
          <SectionCta href="#contact">Let&apos;s Create</SectionCta>
        </div>
        </FadeIn>
      </div>
    </section>
  );
}
