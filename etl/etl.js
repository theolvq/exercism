export const transform = score => {
  let result = {};
  for (let [key, value] of Object.entries(score)) {
    value.forEach(el => {
      result[el.toLowerCase()] = Number(key);
    });
  }
  return result;
};
