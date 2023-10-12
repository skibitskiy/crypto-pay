const uuid = require('uuid');
import Polyglot from 'node-polyglot';

import {
  DEFAULT_LANGS, DEFAULT_FORM, FORM_PREFIXES, WORD_PREFIXES,
} from './constants';
import { interpolateComponents } from './interpolateComponents';
import React from 'react';

const DEFAULT_COMPONENTS = {
  a: React.createElement('a', { className: "link_highlited" }),
  b: React.createElement('b'),
  emoji_palm: React.createElement('span', { className: "emoji emoji_palm emoji_right" }),
  emoji_baloon: React.createElement('span', { className: "emoji emoji_baloon emoji_right" }),
  emoji_hard: React.createElement('span', { className: "emoji emoji_hard emoji_left" }),
  emoji_money: React.createElement('span', { className: "emoji emoji_money emoji_right" }),
  emoji_treat: React.createElement('span', { className: "emoji emoji_treat emoji_left" }),
  emoji_bill: React.createElement('span', { className: "emoji emoji_bill emoji_right" }),
  emoji_lighting: React.createElement('span', { className: "emoji emoji_lighting emoji_left" }),
  emoji_key: React.createElement('span', { className: "emoji emoji_key emoji_right" }),
  emoji_cat_love: React.createElement('span', { className: "emoji emoji_cat_love" }),
  emoji_star: React.createElement('span', { className: "emoji emoji_key emoji_star" })
}

const i18n = new Polyglot();

class I18N {
  /**
     * @param {String|String[]} langs
     */
  static set langs(langs) {
    if (langs) {
      I18N._langs = Array.isArray(langs) ? langs : [langs];
    } else {
      I18N._langs = DEFAULT_LANGS;
    }
  }

  /**
     * @returns {String|String[]} Используемые языки
     */
  static get langs() {
    return I18N._langs || DEFAULT_LANGS;
  }

  /**
     * Выставляет язык
     * @param {String} lang
     * @returns {I18N}
     */
  static setLang(lang) {
    i18n.locale(lang);

    return this;
  }

  /**
     * Возвращает код текущего языка
     * @returns {String}
     */
  static currentLang() {
    return i18n.locale();
  }

  /**
     * Добавляет модули с переводами
     * @param {Function} mapper Ф-я, подключающая нужные переводы
     * @returns {Function} Модульная функция перевода
     */
  static include(mapper) {
    const namespace = uuid.v4();
    const translations = I18N.langs.map((lang) => { return { lang, module: mapper(lang) }; });

    i18n.extend(translations.reduce((module, translation) => {
      module[translation.lang] = {
        [namespace]: translation.module,
      };

      return module;
    }, {}));

    return function (key, options, components = DEFAULT_COMPONENTS) {
      const t = i18n.t(`${i18n.locale()}.${namespace}.${key}`, typeof options === 'number'
        ? options
        : ({ _: '', ...options }));

      return components ? I18N.interpolateComponents(t, components) : t;
    };
  }

  /**
     * Возвращает префикс для ключа
     * @param {Object} [options]
     *  @param {String} [options.isMulti] Множественное число
     *  @param {String} [options.isShort] Сокрашенная форма
     *  @param {String} [options.form] Форма/падеж
     * @returns {String} Префикс для ключа i18n
     */
  static getKeyPrefix(options = {}) {
    if (options.isShort) {
      return WORD_PREFIXES.short;
    }

    return (options.isMulti ? WORD_PREFIXES.multi : '')
            + (FORM_PREFIXES[options.form] || DEFAULT_FORM);
  }

  /**
     * Подставляет в текст переданные компоненты вместо тегов
     * @param {String} t Текст
     * @param {Object} [components] Карта компонентов
     * @returns {Array}
     */
  static interpolateComponents = interpolateComponents;
}

module.exports = I18N;
