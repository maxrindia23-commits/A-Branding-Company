import { FadeIn } from '../ui/FadeIn';

export function ContactQuickCard({ title, value, href, icon: Icon, delay = 0 }) {
  const Tag = href ? 'a' : 'div';

  return (
    <FadeIn delay={delay}>
      <Tag
        className="contact-quick-card"
        {...(href ? { href, target: href.startsWith('http') ? '_blank' : undefined, rel: 'noopener noreferrer' } : {})}
      >
        <div className="contact-quick-card-icon">
          <Icon />
        </div>
        <div className="contact-quick-card-body">
          <p className="contact-quick-card-title">{title}</p>
          <p className="contact-quick-card-value">{value}</p>
        </div>
      </Tag>
    </FadeIn>
  );
}
