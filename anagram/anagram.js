export const findAnagrams = (str, arr) => {
  const tranform = el => el.toLowerCase().split('').sort().join('');
  const result = [];
  const transformedString = tranform(str);
  arr
    .map(el => {
      if (el.toLowerCase() !== str.toLowerCase()) return tranform(el);
    })
    .filter((el, i) => {
      if (el === transformedString) return result.push(arr[i]);
    });
  return result;
};
