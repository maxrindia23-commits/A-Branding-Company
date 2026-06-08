import clsx from 'clsx';
import { BRAND_LOGO_ALT, BRAND_LOGO_SRC } from '../../constants/brand';

/**
 * @param {'navbar' | 'hero' | 'footer'} variant
 */
export function BrandLogo({ variant = 'navbar', className = '' }) {
  return (
    <img
      src={BRAND_LOGO_SRC}
      alt={BRAND_LOGO_ALT}
      draggable={false}
      className={clsx(
        'brand-logo object-contain object-center',
        variant === 'navbar' && 'brand-logo--navbar',
        variant === 'hero' && 'brand-logo--hero',
        variant === 'footer' && 'brand-logo--footer',
        className,
      )}
    />
  );
}
