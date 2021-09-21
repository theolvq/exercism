export const countWords = str => {
  const count = {};
  str
    .toLowerCase()
    .match(/\w+('\w+)?/g)
    .map(el => (count[el] ? count[el]++ : (count[el] = 1)));
  return count;
};
