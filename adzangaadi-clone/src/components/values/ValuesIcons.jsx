const strokePrimary = '#40bbd8';
const strokeAccent = '#2367a4';

function IconBase({ children, className = '' }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      className={className}
      aria-hidden
      xmlns="http://www.w3.org/2000/svg"
    >
      {children}
    </svg>
  );
}

/** Roadmap with milestones, target ring, and directional flag */
export function IconStrategicThinking() {
  return (
    <IconBase>
      <circle cx="24" cy="8" r="4.5" stroke={strokeAccent} strokeWidth="1.35" opacity="0.85" />
      <circle cx="24" cy="8" r="1.75" fill={strokePrimary} stroke="none" />
      <path
        d="M6 24.5 C9 22 11 19.5 14 18.5 C17 17.5 19.5 14.5 22 12"
        stroke={strokePrimary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="6" cy="24.5" r="1.75" fill={strokePrimary} stroke="none" />
      <circle cx="14" cy="18.5" r="1.5" fill={strokeAccent} stroke="none" />
      <circle cx="22" cy="12" r="1.5" fill={strokePrimary} stroke="none" />
      <path
        d="M23.2 6.2 L24 4.5 L24.8 6.2 M24 4.5 V8.2"
        stroke={strokePrimary}
        strokeWidth="1.25"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M8 10.5 H13 M10.5 8 V13"
        stroke={strokeAccent}
        strokeWidth="1.2"
        strokeLinecap="round"
        opacity="0.9"
      />
    </IconBase>
  );
}

/** Lightbulb with radiating sparks and conversion arrow */
export function IconCreativeConverts() {
  return (
    <IconBase>
      <path
        d="M13 26 H19 M14.5 26 V23.5 C11.5 22.5 9.5 19.5 9.5 16 C9.5 11.58 12.58 8.25 16.5 8"
        stroke={strokePrimary}
        strokeWidth="1.45"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M16.5 8 C20.42 8.25 23.5 11.58 23.5 16 C23.5 19.5 21.5 22.5 18.5 23.5"
        stroke={strokeAccent}
        strokeWidth="1.45"
        strokeLinecap="round"
      />
      <path
        d="M16 5.5 L17.2 3.8 L18.4 5.5 M6.5 9.5 L4.8 10.7 L6.5 11.9 M25.5 11 L27.2 12.2 L25.5 13.4 M8 5 L6.8 3.5 L9.2 3.5"
        stroke={strokePrimary}
        strokeWidth="1.15"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M19.5 18.5 L23 22 L19.5 22.5 V18.5Z"
        fill="rgba(64,187,216,0.22)"
        stroke={strokePrimary}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path d="M17 14.5 H18.5" stroke={strokeAccent} strokeWidth="1.2" strokeLinecap="round" />
    </IconBase>
  );
}

/** Analytics panel: gauge arc + ascending trend line */
export function IconPerformanceDriven() {
  return (
    <IconBase>
      <path
        d="M5 25 V11 M5 25 H27"
        stroke={strokeAccent}
        strokeWidth="1.35"
        strokeLinecap="round"
        opacity="0.75"
      />
      <path
        d="M9 21 V17 M13 21 V14 M17 21 V11"
        stroke={strokeAccent}
        strokeWidth="1.5"
        strokeLinecap="round"
      />
      <path
        d="M19 22 C21.5 19 23.5 16 26 11"
        stroke={strokePrimary}
        strokeWidth="1.65"
        strokeLinecap="round"
      />
      <path
        d="M24 11 L27 8 L27 14 Z"
        fill="rgba(35,103,164,0.35)"
        stroke={strokePrimary}
        strokeWidth="1.2"
        strokeLinejoin="round"
      />
      <path
        d="M22 7.5 A6.5 6.5 0 0 1 28.5 11"
        stroke={strokePrimary}
        strokeWidth="1.4"
        strokeLinecap="round"
      />
      <circle cx="22" cy="7.5" r="1.1" fill={strokePrimary} stroke="none" />
    </IconBase>
  );
}

/** Handshake with linked connection nodes */
export function IconGrowthPartnership() {
  return (
    <IconBase>
      <path
        d="M8.5 14.5 C7 13 6 13 5 14.5 C4 16 5.5 17.5 7 18.5 L10 20.5"
        stroke={strokeAccent}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M23.5 14.5 C25 13 26 13 27 14.5 C28 16 26.5 17.5 25 18.5 L22 20.5"
        stroke={strokePrimary}
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M10 20.5 L14 23.5 L18 20.5 L22 23.5"
        stroke={strokePrimary}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="16" cy="11" r="2.25" stroke={strokeAccent} strokeWidth="1.3" />
      <path
        d="M12.5 11 H19.5 M16 8.75 V13.25"
        stroke={strokePrimary}
        strokeWidth="1.15"
        strokeLinecap="round"
        opacity="0.85"
      />
      <path
        d="M4.5 10.5 L7.5 12 M27.5 10.5 L24.5 12"
        stroke={strokeAccent}
        strokeWidth="1.1"
        strokeLinecap="round"
      />
    </IconBase>
  );
}

export const VALUES_ICONS = {
  strategy: IconStrategicThinking,
  creative: IconCreativeConverts,
  performance: IconPerformanceDriven,
  partnership: IconGrowthPartnership,
};
