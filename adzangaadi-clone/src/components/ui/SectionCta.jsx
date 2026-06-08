import clsx from 'clsx';

export function SectionCta({ href = '#contact', children, className = '' }) {
  return (
    <a href={href} className={clsx('section-cta group', className)}>
      <span>{children}</span>
      <span className="section-cta-arrow" aria-hidden>
        →
      </span>
    </a>
  );
}
