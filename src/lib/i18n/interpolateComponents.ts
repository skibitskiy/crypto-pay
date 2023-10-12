import React from 'react';

export const interpolateComponents = (
  str: string,
  components: Record<string, React.ReactElement>,
): React.ReactNode[] => {
  const RE_TOKENIZER = /<([\w-]+)(?:(?:\s?\/>)|>(.*?)<\/\1>)/g;
  const result: React.ReactNode[] = [];
  let matched;
  let lastIndex = 0;

  while ((matched = RE_TOKENIZER.exec(str))) {
    if (matched.index > lastIndex) {
      result.push(str.slice(lastIndex, matched.index));
    }

    lastIndex = RE_TOKENIZER.lastIndex;

    const tagName = matched[1];
    const content = matched[2];

    if (components[tagName]) {
      result.push(
        React.cloneElement(
          components[tagName],
          { key: lastIndex },
          content ? interpolateComponents(content, components) : null,
        ),
      );
    } else {
      result.push(matched[0]);
    }
  }

  if (lastIndex < str.length) {
    result.push(str.slice(lastIndex));
  }

  return result;
};
