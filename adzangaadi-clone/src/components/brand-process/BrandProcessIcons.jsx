export function IconDiscover() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <circle cx="11" cy="11" r="7" />
      <path strokeLinecap="round" d="M16.5 16.5L21 21" />
      <path strokeLinecap="round" d="M11 8v3M11 14h.01" />
      <circle cx="11" cy="11" r="2.5" strokeOpacity="0.5" />
    </svg>
  );
}

export function IconStrategize() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19h16M7 15l3-4 3 2 4-6" />
      <circle cx="18" cy="6" r="2" />
      <path strokeLinecap="round" d="M4 5h4M4 9h2" strokeOpacity="0.6" />
    </svg>
  );
}

export function IconCreate() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 3l1.6 4.9H19l-4 2.9 1.5 4.9L12 14.2 7.5 15.7 9 10.8 5 7.9h5.4L12 3z"
      />
      <path strokeLinecap="round" d="M5 20h14" />
      <path strokeLinecap="round" d="M8 17h8" strokeOpacity="0.5" />
    </svg>
  );
}

export function IconGrow() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" aria-hidden>
      <path strokeLinecap="round" strokeLinejoin="round" d="M4 19V9M4 19h16" />
      <path strokeLinecap="round" strokeLinejoin="round" d="M8 15V11M12 15V7M16 15v-4" />
      <path strokeLinecap="round" d="M17 5l2-2M17 5l-2 2" />
    </svg>
  );
}

export const BRAND_PROCESS_ICONS = {
  discover: IconDiscover,
  strategize: IconStrategize,
  create: IconCreate,
  grow: IconGrow,
};
