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
          if (!n) return el;
          else {
            for (let i = 1; i <= n; i++) {
              result += l;
            }
            return (el = result);
          }
        })
        .join('')
    : str;
};

// Slaymance's solution, really awesome
// export const encode = string =>
//   string.replace(/(.)\1+/g, ({ length }, char) => length + char);

// export const decode = string =>
//   string.replace(/(\d+)(.)/g, (_, length, char) => char.repeat(length));
