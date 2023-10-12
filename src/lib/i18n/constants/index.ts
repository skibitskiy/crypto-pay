export const DEFAULT_LANG = 'en';
export const DEFAULT_LANGS = [DEFAULT_LANG];

export enum FORM_PREFIXES {
  // лягушка
  nominative = 'n_',
  // [поцеловать] лягушку
  accusative = 'a_',
  // [нет] лягушки
  genitive = 'g_',
  // [набить морду] лягушке
  dative = 'd_',
  // [найти] в лягушке
  locative = 'l_',
}

// Для вычисления префикса ключа
export const DEFAULT_FORM = FORM_PREFIXES.nominative;

export interface IFormPrefixes {
  nominative: FORM_PREFIXES.nominative;
  accusative: FORM_PREFIXES.accusative;
  genitive: FORM_PREFIXES.genitive;
  dative: FORM_PREFIXES.dative;
  locative: FORM_PREFIXES.locative;
}

export enum WORD_PREFIXES {
  // мн.ч. - Александры
  multi = 'm_',
  // краткая форма (синоним) - Саня
  short = 's_',
}

export type WordPrefix = keyof typeof WORD_PREFIXES;
export type FormPrefix = keyof IFormPrefixes;
export type FormPrefixAliases = typeof FORM_PREFIXES[FormPrefix];
export type PrefixCombinationsWithMulti<
    V extends keyof IFormPrefixes,
    K extends IFormPrefixes,
> = `${WORD_PREFIXES.multi}${K[V]}`;

export type PrefixCombinations<V extends FormPrefix, K extends IFormPrefixes> = K[V];

export type AllAvailablePrefixes<T extends FormPrefix> =
    | WORD_PREFIXES.short
    | PrefixCombinationsWithMulti<T, IFormPrefixes>
    | PrefixCombinations<T, IFormPrefixes>;

export type CertainPrefix<T extends FormPrefix, S = void, M = void> = S extends true
  ? WORD_PREFIXES.short
  : M extends true
    ? PrefixCombinationsWithMulti<T, IFormPrefixes>
    : PrefixCombinations<T, IFormPrefixes>;
