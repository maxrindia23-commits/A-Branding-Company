import { motion } from 'framer-motion';

export function FadeIn({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  once = true,
  amount = 0.2,
  as: Component = motion.div,
}) {
  const offset =
    direction === 'up'
      ? { y: 48 }
      : direction === 'down'
        ? { y: -48 }
        : direction === 'left'
          ? { x: 48 }
          : { x: -48 };

  return (
    <Component
      className={className}
      initial={{ opacity: 0, ...offset }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once, amount }}
      transition={{
        duration: 0.85,
        delay,
        ease: [0.22, 1, 0.36, 1],
      }}
    >
      {children}
    </Component>
  );
}
