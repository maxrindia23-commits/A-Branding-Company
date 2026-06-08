import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import clsx from 'clsx';
import { BRAND_LOGO_SRC, BRAND_LOGO_ALT } from '../../constants/brand';

const NAV_LINKS = [
  { label: 'About', href: '#about' },
  { label: 'Why ABC', href: '#why-choose' },
  { label: 'Services', href: '#services' },
  { label: 'Contact', href: '#contact' },
];

export function Navbar() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <div className="nav-pill-shell">
        <header className={clsx('nav-pill', scrolled && 'nav-pill--scrolled')}>
          <a href="#" className="nav-pill-logo-ring" aria-label="A Branding Company home">
            <img
              src={BRAND_LOGO_SRC}
              alt={BRAND_LOGO_ALT}
              className="nav-pill-logo-img"
              draggable={false}
            />
          </a>

          <nav className="nav-pill-links hidden items-center lg:flex" aria-label="Main">
            {NAV_LINKS.map((link) => (
              <a key={link.href} href={link.href} className="nav-pill-link">
                {link.label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-pill-cta group hidden shrink-0 lg:inline-flex">
            Let&apos;s talk
            <span className="nav-pill-cta-arrow" aria-hidden>
              →
            </span>
          </a>

          <button
            type="button"
            aria-label="Open menu"
            className="nav-pill-menu-btn lg:hidden"
            onClick={() => setOpen(true)}
          >
            <span className="nav-pill-menu-icon" aria-hidden />
          </button>
        </header>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[55] bg-adz-bg/90 backdrop-blur-xl"
          >
            <motion.div
              initial={{ opacity: 0, y: -12, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -8, scale: 0.98 }}
              transition={{ type: 'spring', damping: 26, stiffness: 320 }}
              className="nav-pill-mobile-panel mx-4 mt-24"
            >
              <button
                type="button"
                aria-label="Close menu"
                className="nav-pill-mobile-close"
                onClick={() => setOpen(false)}
              >
                ×
              </button>

              <ul className="flex flex-col gap-6 py-2">
                {NAV_LINKS.map((link, i) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + i * 0.06 }}
                  >
                    <a
                      href={link.href}
                      onClick={() => setOpen(false)}
                      className="nav-pill-mobile-link"
                    >
                      {link.label}
                    </a>
                  </motion.li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={() => setOpen(false)}
                className="nav-pill-cta group mt-4 w-full justify-center"
              >
                Let&apos;s talk
                <span className="nav-pill-cta-arrow" aria-hidden>
                  →
                </span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
