export const parse = str =>
  str
    .toUpperCase()
    .replace(/[_']/, '')
    .match(/\b[a-z]/gi)
    .join('');
