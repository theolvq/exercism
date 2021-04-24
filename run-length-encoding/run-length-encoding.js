export const encode = str => {
  if (!str) return '';
  const arrStr = str.match(/(.)\1+|\w|\s/g);
  return arrStr
    ? arrStr
        .map(el =>
          el.length > 1 ? `${el.length}${(el = el.slice(0, 1))}` : `${el}`
        )
        .join('')
    : str;
};

export const decode = str => {
  if (!str) return '';
  const arrStr = str.match(/\d+(?=\w)\w|\d+\s|\w|\s/g);
  return arrStr
    ? arrStr
        .map(el => {
          let n = el.match(/^\d+/g);
          let l = el.match(/[^\d]/g);
          let result = '';
          for (let i = 0; i < n; i++) {
            result += l;
          }
          return !n ? el : (el = result);
        })
        .join('')
    : str;
};
