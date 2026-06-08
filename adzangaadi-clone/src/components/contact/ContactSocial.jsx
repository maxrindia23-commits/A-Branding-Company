import { motion } from 'framer-motion';

const SOCIAL_LINKS = [
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/abrandingcompany',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <rect x="3" y="3" width="18" height="18" rx="5" />
        <circle cx="12" cy="12" r="4" />
        <circle cx="17.5" cy="6.5" r="0.75" fill="currentColor" stroke="none" />
      </svg>
    ),
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/abrandingcompany',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M14 8h3V5h-3c-2.2 0-4 1.8-4 4v2H7v3h3v7h3v-7h2.5l.5-3H13V9c0-.6.4-1 1-1z"
        />
      </svg>
    ),
  },
  {
    label: 'YouTube',
    href: 'https://www.youtube.com/@abrandingcompany',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3 8.5c0-1.2.9-2.2 2.1-2.4C7.6 5.6 12 5.6 12 5.6s4.4 0 6.9.5c1.2.2 2.1 1.2 2.1 2.4v7c0 1.2-.9 2.2-2.1 2.4-2.5.5-6.9.5-6.9.5s-4.4 0-6.9-.5C3.9 17.7 3 16.7 3 15.5v-7z"
        />
        <path strokeLinecap="round" strokeLinejoin="round" d="M10 9.5v5l4.5-2.5L10 9.5z" />
      </svg>
    ),
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (delay = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.75, delay, ease: [0.22, 1, 0.36, 1] },
  }),
};

export function ContactSocial() {
  return (
    <motion.div
      custom={0.22}
      variants={fadeUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      className="contact-social"
    >
      <div className="contact-social-label-wrap">
        <span className="contact-social-line" aria-hidden />
        <p className="contact-social-label">CONNECT WITH US</p>
        <span className="contact-social-line" aria-hidden />
      </div>
      <div className="contact-social-icons">
        {SOCIAL_LINKS.map((link) => (
          <a
            key={link.label}
            href={link.href}
            target="_blank"
            rel="noopener noreferrer"
            className="contact-social-btn"
            aria-label={link.label}
          >
            {link.icon}
          </a>
        ))}
      </div>
    </motion.div>
  );
}
