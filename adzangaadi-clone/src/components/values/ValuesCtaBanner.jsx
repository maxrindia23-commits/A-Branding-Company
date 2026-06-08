import { SectionCta } from '../ui/SectionCta';

export function ValuesCtaBanner() {
  return (
    <div className="values-cta-banner">
      <span className="values-cta-banner-glow values-cta-banner-glow--left" aria-hidden />
      <span className="values-cta-banner-glow values-cta-banner-glow--right" aria-hidden />
      <span className="values-cta-banner-inner-glow" aria-hidden />

      <div className="values-cta-banner-content">
        <div className="values-cta-banner-copy">
          <h3 className="values-cta-banner-title">
            Ready to build a brand people remember?
          </h3>
          <p className="values-cta-banner-text">
            Let&apos;s turn your ideas into strategy, design, and growth.
          </p>
        </div>

        <SectionCta href="#contact">Start Your Brand Journey</SectionCta>
      </div>
    </div>
  );
}
