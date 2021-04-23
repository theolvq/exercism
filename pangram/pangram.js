export const isPangram = str =>
  new Set(str.replace(/[^a-z]/gi, '').toLowerCase()).size === 26;
