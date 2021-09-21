export const isArmstrongNumber = n => {
  const arr = [...String(n)];
  return arr.map(el => Math.pow(el, arr.length)).reduce((a, b) => a + b) === n;
};
