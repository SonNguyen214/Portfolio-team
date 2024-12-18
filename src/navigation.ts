import { createSharedPathnamesNavigation } from 'next-intl/navigation';

export const locales = ['en', 'vi'];
export const defaultLocale = 'en';
export const localePrefix = 'as-needed';
export const { Link, usePathname, useRouter } = createSharedPathnamesNavigation({
  locales,
  localePrefix
});
