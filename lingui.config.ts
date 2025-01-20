import type { LinguiConfig } from '@lingui/conf';

const config: LinguiConfig = {
  fallbackLocales: {
    default: 'en',
  },
  locales: ['en', 'fr'],
  catalogs: [
    {
      path: '<rootDir>/resources/locales/{locale}',
      include: ['apps', 'libs'],
    },
  ],
};

export default config;
