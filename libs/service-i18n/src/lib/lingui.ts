import type config from '../../lingui.config';
import { i18n } from '@lingui/core';

export function getLanguages(): Array<{
  key: (typeof config.locales)[number];
  label: string;
}> {
  return [
    { key: 'en', label: 'English' },
    { key: 'fr', label: 'Français' },
  ];
}

export async function loadCatalog(locale: string) {
  const { messages } = await import(
    `../../../../resources/locales/${locale}.po`
  );
  return i18n.loadAndActivate({ locale, messages });
}
