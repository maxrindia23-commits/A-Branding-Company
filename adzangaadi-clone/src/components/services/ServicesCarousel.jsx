import { useCallback, useEffect, useLayoutEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import { SERVICE_ICONS } from './ServiceIcons';

const SERVICES = [
  {
    id: 'strategy',
    title: 'Brand Strategy',
    body: 'Strategic roadmaps that position your brand for long-term growth.',
  },
  {
    id: 'social',
    title: 'Social Media Management',
    body: 'Build a strong social presence, engage audiences, and grow your community.',
  },
  {
    id: 'personal',
    title: 'Personal Branding',
    body: 'Build a powerful personal brand that opens doors and creates lasting impact.',
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    body: 'Data-driven campaigns that maximize reach, engagement, and conversions.',
  },
  {
    id: 'ads',
    title: 'Ads Strategy',
    body: 'Smart ad strategies that deliver better results and higher ROI consistently.',
  },
  {
    id: 'automation',
    title: 'AI Automation',
    body: 'Automate workflows, customer interactions, and business processes with intelligent AI-powered solutions.',
  },
];

const LOOP_SETS = 3;
const AUTO_PLAY_MS = 3000;

const LOOPED_SERVICES = Array.from({ length: LOOP_SETS }, () => SERVICES).flat();

function getPerView(width) {
  if (width < 768) return 1;
  if (width < 1024) return 2;
  return 3;
}

function ChevronIcon({ direction }) {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden
    >
      {direction === 'left' ? (
        <path d="M15 18l-6-6 6-6" />
      ) : (
        <path d="M9 18l6-6-6-6" />
      )}
    </svg>
  );
}

export function ServicesCarousel() {
  const carouselRef = useRef(null);
  const scrollRef = useRef(null);
  const dragRef = useRef({ active: false, startX: 0, startScroll: 0 });
  const pausedRef = useRef(false);
  const autoPlayRef = useRef(null);
  const loopResetRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [perView, setPerView] = useState(3);

  const getScrollStep = useCallback(() => {
    const viewport = scrollRef.current;
    if (!viewport) return 0;

    const slide = viewport.querySelector('.services-carousel-slide');
    const track = viewport.querySelector('.services-carousel-track');
    if (!slide || !track) return 0;

    const gap = parseFloat(getComputedStyle(track).columnGap || getComputedStyle(track).gap) || 0;
    return slide.offsetWidth + gap;
  }, []);

  const getSetWidth = useCallback(() => {
    const step = getScrollStep();
    return step ? SERVICES.length * step : 0;
  }, [getScrollStep]);

  const resetLoopPosition = useCallback(() => {
    const el = scrollRef.current;
    const setWidth = getSetWidth();
    if (!el || !setWidth) return;

    const step = getScrollStep();
    const edge = step * 0.5;

    if (el.scrollLeft < setWidth - edge) {
      el.style.scrollBehavior = 'auto';
      el.scrollLeft += setWidth;
      el.style.scrollBehavior = '';
    } else if (el.scrollLeft > setWidth * 2 - edge) {
      el.style.scrollBehavior = 'auto';
      el.scrollLeft -= setWidth;
      el.style.scrollBehavior = '';
    }
  }, [getScrollStep, getSetWidth]);

  const scrollToOffset = useCallback((offset, behavior = 'smooth') => {
    const el = scrollRef.current;
    if (!el) return;
    el.scrollTo({ left: offset, behavior });
  }, []);

  const scrollByOneCard = useCallback(
    (direction, behavior = 'smooth') => {
      const el = scrollRef.current;
      const step = getScrollStep();
      if (!el || !step) return;

      scrollToOffset(el.scrollLeft + direction * step, behavior);
    },
    [getScrollStep, scrollToOffset],
  );

  const alignToMiddleSet = useCallback(() => {
    const el = scrollRef.current;
    const setWidth = getSetWidth();
    if (!el || !setWidth) return;

    el.style.scrollBehavior = 'auto';
    el.scrollLeft = setWidth;
    el.style.scrollBehavior = '';
  }, [getSetWidth]);

  const clearAutoPlay = useCallback(() => {
    if (autoPlayRef.current) {
      clearInterval(autoPlayRef.current);
      autoPlayRef.current = null;
    }
  }, []);

  const startAutoPlay = useCallback(() => {
    clearAutoPlay();
    autoPlayRef.current = setInterval(() => {
      if (pausedRef.current) return;
      scrollByOneCard(1);
    }, AUTO_PLAY_MS);
  }, [clearAutoPlay, scrollByOneCard]);

  const scheduleLoopReset = useCallback(() => {
    if (loopResetRef.current) {
      clearTimeout(loopResetRef.current);
    }
    loopResetRef.current = setTimeout(() => {
      resetLoopPosition();
      loopResetRef.current = null;
    }, 520);
  }, [resetLoopPosition]);

  useEffect(() => {
    pausedRef.current = isHovered || isDragging;
    if (pausedRef.current) {
      clearAutoPlay();
    } else {
      startAutoPlay();
    }
  }, [isHovered, isDragging, clearAutoPlay, startAutoPlay]);

  useLayoutEffect(() => {
    const frame = requestAnimationFrame(() => {
      alignToMiddleSet();
    });
    return () => cancelAnimationFrame(frame);
  }, [alignToMiddleSet, perView]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return undefined;

    const onResize = () => {
      setPerView(getPerView(window.innerWidth));
      requestAnimationFrame(() => alignToMiddleSet());
    };

    const onScrollEnd = () => {
      resetLoopPosition();
    };

    const onScroll = () => {
      scheduleLoopReset();
    };

    setPerView(getPerView(window.innerWidth));
    el.addEventListener('scrollend', onScrollEnd);
    el.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onResize);

    return () => {
      el.removeEventListener('scrollend', onScrollEnd);
      el.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onResize);
      clearAutoPlay();
      if (loopResetRef.current) clearTimeout(loopResetRef.current);
    };
  }, [alignToMiddleSet, resetLoopPosition, scheduleLoopReset, clearAutoPlay]);

  const handlePrev = () => {
    scrollByOneCard(-1);
    if (!pausedRef.current) startAutoPlay();
  };

  const handleNext = () => {
    scrollByOneCard(1);
    if (!pausedRef.current) startAutoPlay();
  };

  const onPointerDown = (event) => {
    const el = scrollRef.current;
    if (!el || event.button !== 0) return;
    dragRef.current = {
      active: true,
      startX: event.clientX,
      startScroll: el.scrollLeft,
    };
    setIsDragging(true);
    el.setPointerCapture(event.pointerId);
  };

  const onPointerMove = (event) => {
    if (!dragRef.current.active) return;
    const el = scrollRef.current;
    if (!el) return;
    const delta = event.clientX - dragRef.current.startX;
    el.scrollLeft = dragRef.current.startScroll - delta;
  };

  const endDrag = (event) => {
    if (!dragRef.current.active) return;
    dragRef.current.active = false;
    setIsDragging(false);
    scrollRef.current?.releasePointerCapture(event.pointerId);
    resetLoopPosition();
    if (!pausedRef.current) startAutoPlay();
  };

  return (
    <div
      ref={carouselRef}
      className="services-carousel"
      data-per-view={perView}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <button
        type="button"
        className="services-carousel-btn services-carousel-btn--prev"
        onClick={handlePrev}
        aria-label="Previous services"
      >
        <ChevronIcon direction="left" />
      </button>

      <div className="services-carousel-wrapper">
        <div
          ref={scrollRef}
          className={`services-carousel-viewport${isDragging ? ' is-dragging' : ''}`}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerLeave={endDrag}
          onPointerCancel={endDrag}
        >
          <div className="services-carousel-track">
            {LOOPED_SERVICES.map((service, index) => {
              const Icon = SERVICE_ICONS[service.id];

              return (
                <div key={`${service.id}-${index}`} className="services-carousel-slide">
                  <motion.article
                    className="services-card"
                    whileHover={{ y: -6 }}
                    transition={{ type: 'tween', duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <span className="services-card-top-glow" aria-hidden />
                    <div className="services-card-icon">
                      <Icon />
                    </div>
                    <h3 className="services-card-title">{service.title}</h3>
                    <p className="services-card-body">{service.body}</p>
                    <span className="services-card-arrow" aria-hidden>
                      →
                    </span>
                  </motion.article>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      <button
        type="button"
        className="services-carousel-btn services-carousel-btn--next"
        onClick={handleNext}
        aria-label="Next services"
      >
        <ChevronIcon direction="right" />
      </button>
    </div>
  );
}
