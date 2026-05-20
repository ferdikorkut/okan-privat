// @ts-check
import { defineConfig } from 'astro/config';

export default defineConfig({
  i18n: {
    defaultLocale: 'de',
    locales: ['de', 'en', 'tr'],
    routing: {
      prefixDefaultLocale: false,
    },
  },
});
