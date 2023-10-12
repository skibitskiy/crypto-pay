import React from 'react';

import { AllAvailablePrefixes, FormPrefix } from './constants';

declare namespace I18N {
    type PathImpl<T, K extends keyof T> = K extends string | number
      ? T[K] extends Record<string, unknown>
        ? `${K}.${PathImpl<T[K], keyof T[K]>}`
        : K
      : never;

    export type Path<T> = PathImpl<T, keyof T>;

    export type Langs = 'en';

    export type LangsDict<T> = {
      [key in Langs]: T;
    };

    export type I18nValue<T, P extends Path<T>> = P extends `${infer K}.${infer Rest}`
      ? K extends keyof T
        ? Rest extends Path<T[K]>
          ? I18nValue<T[K], Rest>
          : never
        : never
      : P extends keyof T
        ? T[P]
        : never;

    export type translate<T> = <P extends string>(
        key: string extends P ? string : Path<T>,
        options?: { [key: string]: string | number | undefined | null | boolean } | number | null,
        components?: { [key: string]: React.ReactNode }
    ) => P extends Path<T> ? I18nValue<T, P> : string;

    export type AnyI18N = translate<{ [key: string]: string }>;
}

declare class I18N {
  static include<T>(mapper: (lang: I18N.Langs) => I18N.LangsDict<T>[typeof lang]): I18N.translate<T>;

  static setLang(lang: I18N.Langs): void;

  static getKeyPrefix<F extends FormPrefix>(opts: {
    form?: F;
    isShort?: boolean;
    isMulti?: boolean;
  }): AllAvailablePrefixes<F>;
}

export = I18N;
