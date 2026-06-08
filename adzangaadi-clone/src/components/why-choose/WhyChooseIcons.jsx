export function IconBrandStrategy() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="12" cy="12" r="9" />
      <circle cx="12" cy="12" r="4" />
      <path strokeLinecap="round" d="M12 3v2M12 19v2M3 12h2M19 12h2" />
      <path strokeLinecap="round" d="M7 7l1.5 1.5M15.5 15.5L17 17M7 17l1.5-1.5M15.5 8.5L17 7" />
    </svg>
  );
}

export function IconCreativeExcellence() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l1.8 5.5H19l-4.5 3.3 1.7 5.5L12 14l-4.2 3.3 1.7-5.5L5 8.5h5.2L12 3z"
      />
      <path strokeLinecap="round" d="M4 20h16" />
    </svg>
  );
}

export function IconPerformanceMarketing() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V5M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15v-3M12 15V8M16 15v-5" />
      <path strokeLinecap="round" d="M18 7l2-2M18 7l-2 2" />
    </svg>
  );
}

export function IconEndToEndBranding() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <rect x="4" y="5" width="16" height="5" rx="1.5" />
      <rect x="6" y="11" width="12" height="4" rx="1.5" />
      <rect x="8" y="16" width="8" height="3" rx="1.5" />
      <path strokeLinecap="round" d="M12 3v2" />
    </svg>
  );
}

export const WHY_CHOOSE_ICONS = {
  strategy: IconBrandStrategy,
  creative: IconCreativeExcellence,
  performance: IconPerformanceMarketing,
  branding: IconEndToEndBranding,
};
