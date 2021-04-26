const purifyString = str => str.toLowerCase().replace(/\s|\W/, '');

export const isIsogram = str =>
  new Set([...purifyString(str)]).size === purifyString(str).length;
