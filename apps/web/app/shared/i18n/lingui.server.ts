import config from '@repo/lingui.config';
import { RemixLingui } from './react-router.server';
import { createCookie } from 'react-router';

export const localeCookie = createCookie('lng', {
  path: '/',
  sameSite: 'lax',
  secure: process.env.NODE_ENV === 'production',
  httpOnly: true,
});

export const linguiServer = new RemixLingui({
  detection: {
    supportedLanguages: config.locales,
    fallbackLanguage:
      (!!config.fallbackLocales && config.fallbackLocales?.default) || 'en',
    cookie: localeCookie,
  },
});
