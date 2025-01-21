import { i18n } from '@lingui/core';

export async function loadCatalog(locale: string) {
  const { messages } = await import(
    `../../../../../resources/locales/${locale}.po`
  );

  return i18n.loadAndActivate({ locale, messages });
}
