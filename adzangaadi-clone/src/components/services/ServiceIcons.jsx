export function IconBrandStrategy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="12" cy="12" r="1.2" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
    </svg>
  );
}

export function IconSocialMedia() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M8 10a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm8 4a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM5.5 19.5a5.5 5.5 0 0 1 5-3.5M18.5 14.5a5.5 5.5 0 0 0-5-3.5"
      />
    </svg>
  );
}

export function IconPersonalBranding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="8" r="3.5" />
      <path strokeLinecap="round" d="M5 20c0-3.5 3.1-6 7-6s7 2.5 7 6" />
    </svg>
  );
}

export function IconPerformanceMarketing() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15v-4M12 15V9M16 15v-6" />
      <path strokeLinecap="round" d="M17 6l2-2M17 6l-2 2" />
    </svg>
  );
}

export function IconAdsStrategy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 15l3-5 3 3 4-7" />
      <path strokeLinecap="round" d="M18 6l2-2M18 6l-2 2" />
    </svg>
  );
}

export function IconAiAutomation() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="4" width="16" height="16" rx="3" />
      <circle cx="9" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <circle cx="15" cy="10" r="1.2" fill="currentColor" stroke="none" />
      <path strokeLinecap="round" d="M8 15h8" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v2M8 2.5l1 1.5M16 2.5l-1 1.5" />
      <path strokeLinecap="round" d="M5 8H3M21 8h-2M5 16H3M21 16h-2" />
    </svg>
  );
}

export const SERVICE_ICONS = {
  strategy: IconBrandStrategy,
  social: IconSocialMedia,
  personal: IconPersonalBranding,
  performance: IconPerformanceMarketing,
  ads: IconAdsStrategy,
  automation: IconAiAutomation,
};
