import i18nLib from '@/lib/i18n';

import { en } from './en';

const langs = {
  en,
};

export const i18n = i18nLib.include((lang) => {
  return langs[lang];
});
