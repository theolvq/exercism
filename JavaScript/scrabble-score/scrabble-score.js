const values = {
  1: ['A', 'E', 'I', 'O', 'U', 'L', 'N', 'R', 'S', 'T'],
  2: ['D', 'G'],
  3: ['B', 'C', 'M', 'P'],
  4: ['F', 'H', 'V', 'W', 'Y'],
  5: ['K'],
  8: ['J', 'X'],
  10: ['Q', 'Z'],
};
export const score = word => {
  let total = 0;
  for (const [key, value] of Object.entries(values)) {
    [...word.toUpperCase()].forEach(l =>
      value.forEach(v => {
        l === v ? (total += Number(key)) : total;
      })
    );
  }
  return total;
};
