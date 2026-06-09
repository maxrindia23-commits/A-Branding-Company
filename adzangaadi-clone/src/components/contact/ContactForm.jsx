import { motion } from 'framer-motion';
import { FadeIn } from '../ui/FadeIn';

const SERVICES = [
  'Brand Strategy',
  'Social Media Management',
  'Performance Marketing',
  'Personal Branding',
  'AI Automation',
  'Website Design',
  'Other',
];

function FieldIcon({ children }) {
  return <span className="contact-form-field-icon" aria-hidden>{children}</span>;
}

export function ContactForm() {
  return (
    <FadeIn direction="right" amount={0.2} className="contact-form-col">
      <motion.div
        className="contact-form-card"
        initial={{ opacity: 0, y: 32 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.85, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
      >
        <div className="contact-form-card-glow" aria-hidden />
        <form
          className="contact-form"
          action="https://formsubmit.co/hello@abrandingcompany.in"
          method="POST"
        >
          <input type="hidden" name="_next" value="https://a-branding-company-ra9r.vercel.app/thank-you" />
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_subject" value="New Lead from ABC Website" />
          <input type="hidden" name="_template" value="table" />

          <div className="contact-form-row">
            <label className="contact-form-field">
              <span className="contact-form-label">Full Name *</span>
              <span className="contact-form-input-wrap">
                <FieldIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <circle cx="12" cy="8" r="4" />
                    <path strokeLinecap="round" d="M5 20c0-4 3.5-6 7-6s7 2 7 6" />
                  </svg>
                </FieldIcon>
                <input type="text" name="fullName" required placeholder="Your Name" autoComplete="name" />
              </span>
            </label>
            <label className="contact-form-field">
              <span className="contact-form-label">Email Address *</span>
              <span className="contact-form-input-wrap">
                <FieldIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path strokeLinecap="round" d="M3 7l9 6 9-6" />
                  </svg>
                </FieldIcon>
                <input type="email" name="email" required placeholder="you@company.com" autoComplete="email" />
              </span>
            </label>
          </div>

          <div className="contact-form-row">
            <label className="contact-form-field">
              <span className="contact-form-label">Phone Number</span>
              <span className="contact-form-input-wrap">
                <FieldIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path
                      strokeLinecap="round"
                      d="M5 4h4l2 5-2.5 1.5a11 11 0 005 5L15 13l5 2v4a2 2 0 01-2 2A16 16 0 013 6a2 2 0 012-2z"
                    />
                  </svg>
                </FieldIcon>
                <input type="tel" name="phone" placeholder="+91 98765 43210" autoComplete="tel" />
              </span>
            </label>
            <label className="contact-form-field">
              <span className="contact-form-label">Company / Brand Name</span>
              <span className="contact-form-input-wrap">
                <FieldIcon>
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                    <path strokeLinecap="round" d="M4 20V6l8-3 8 3v14" />
                    <path strokeLinecap="round" d="M9 20v-6h6v6" />
                  </svg>
                </FieldIcon>
                <input type="text" name="company" placeholder="Your brand" autoComplete="organization" />
              </span>
            </label>
          </div>

          <label className="contact-form-field contact-form-field--full">
            <span className="contact-form-label">Service Interested In</span>
            <span className="contact-form-input-wrap contact-form-input-wrap--select">
              <FieldIcon>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75">
                  <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h10" />
                </svg>
              </FieldIcon>
              <select name="service" defaultValue="">
                <option value="" disabled>
                  Select a service
                </option>
                {SERVICES.map((service) => (
                  <option key={service} value={service}>
                    {service}
                  </option>
                ))}
              </select>
              <span className="contact-form-chevron" aria-hidden>
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path strokeLinecap="round" d="M6 9l6 6 6-6" />
                </svg>
              </span>
            </span>
          </label>

          <label className="contact-form-field contact-form-field--full">
            <span className="contact-form-label">Tell Us About Your Project *</span>
            <span className="contact-form-input-wrap contact-form-input-wrap--textarea">
              <textarea
                name="message"
                required
                rows={5}
                placeholder="Share your goals, timeline, and what success looks like for your brand..."
              />
            </span>
          </label>

          <button type="submit" className="contact-submit-btn contact-form-submit">
            Let&apos;s Grow Together
          </button>
        </form>
      </motion.div>
    </FadeIn>
  );
}
