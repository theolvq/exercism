export const convert = num => {
  let result = '';
  num % 3 === 0 && num % 5 === 0 && num % 7 === 0
    ? (result = 'PlingPlangPlong')
    : num % 3 === 0 && num % 5 === 0
    ? (result = 'PlingPlang')
    : num % 3 === 0 && num % 7 === 0
    ? (result = 'PlingPlong')
    : num % 5 === 0 && num % 7 === 0
    ? (result = 'PlangPlong')
    : num % 3 === 0
    ? (result += 'Pling')
    : num % 5 === 0
    ? (result += 'Plang')
    : num % 7 === 0
    ? (result += 'Plong')
    : (result = `${num}`);
  return result;
};
