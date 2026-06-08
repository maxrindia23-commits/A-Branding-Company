import { motion } from 'framer-motion';
import { BrandLogo } from '../ui/BrandLogo';
import { FadeIn } from '../ui/FadeIn';
import { ContactForm } from '../contact/ContactForm';
import { ContactQuickCard } from '../contact/ContactQuickCard';
import { ContactSocial } from '../contact/ContactSocial';
import { IconMail, IconMapPin, IconPhone } from '../contact/ContactIcons';

const QUICK_CARDS = [
  {
    title: 'Email Us',
    value: 'hello@abrandingcompany.in',
    href: 'mailto:hello@abrandingcompany.in',
    icon: IconMail,
  },
  {
    title: 'Call Us',
    value: '+91 97878 74359',
    href: 'tel:+919787874359',
    icon: IconPhone,
  },
  {
    title: 'Visit Us',
    value: 'Chennai, India',
    href: null,
    icon: IconMapPin,
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.85, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function Contact() {
  return (
    <section id="contact" className="contact-section" aria-labelledby="contact-heading">
      <div className="contact-section-bg" aria-hidden />
      <div className="contact-section-glow contact-section-glow--left" aria-hidden />
      <div className="contact-section-glow contact-section-glow--right" aria-hidden />

      <div className="contact-section-inner">
        <div className="contact-layout">
          <div className="contact-left-intro">
            <motion.span
              custom={0}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="contact-badge"
            >
              CONTACT US
            </motion.span>

            <motion.h2
              id="contact-heading"
              custom={0.08}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="contact-heading font-display"
            >
              Let&apos;s Build Something
              <br />
              Remarkable <span className="contact-heading-accent">Together.</span>
            </motion.h2>

            <motion.p
              custom={0.16}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.35 }}
              className="contact-description font-body"
            >
              Whether you&apos;re launching a new brand, scaling your presence, or exploring
              AI-powered growth, we&apos;re ready to help.
            </motion.p>

            <ContactSocial />
          </div>

          <div className="contact-form-slot">
            <ContactForm />
          </div>

          <div className="contact-cards-stack">
            {QUICK_CARDS.map((card, index) => (
              <ContactQuickCard key={card.title} {...card} delay={0.1 + index * 0.08} />
            ))}
          </div>
        </div>

        <FadeIn delay={0.15} className="contact-response-wrap">
          <p className="contact-response-text font-body">
            We typically respond within <span className="contact-response-highlight">24 hours</span>.
          </p>
        </FadeIn>

        <footer className="contact-section-brand">
          <div className="contact-section-divider" aria-hidden />
          <FadeIn delay={0.2} className="contact-section-logo-wrap">
            <BrandLogo variant="footer" className="contact-section-logo" />
          </FadeIn>
          <FadeIn delay={0.28}>
            <p className="contact-section-copyright">
              &copy; 2025 A Branding Company. All rights reserved.
            </p>
          </FadeIn>
        </footer>
      </div>
    </section>
  );
}
