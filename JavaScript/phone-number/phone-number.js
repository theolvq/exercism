export const clean = num => {
  [...num].filter(el => {
    if (/[a-z]/.test(el)) throw new Error('Letters not permitted');
    if (/[@:!]/.test(el)) throw new Error('Punctuations not permitted');
  });

  let cleanedNum = num.replace(/\D/g, '');

  if (cleanedNum.length === 11) {
    if (cleanedNum[0] != 1) throw new Error('11 digits must start with 1');
    if (cleanedNum[1] == 0) throw new Error('Area code cannot start with zero');
    if (cleanedNum[1] == 1) throw new Error('Area code cannot start with one');
    if (cleanedNum[4] == 0) throw new Error('Exchange code cannot start with zero');
    if (cleanedNum[4] == 1) throw new Error('Exchange code cannot start with one');
    if (cleanedNum[0] == 1) return cleanedNum.slice(1);
  }
  if (cleanedNum.length === 10) {
    if (cleanedNum[0] == 1) throw new Error('Area code cannot start with one');
    if (cleanedNum[0] == 0) throw new Error('Area code cannot start with zero');
    if (cleanedNum[3] == 0) throw new Error('Exchange code cannot start with zero');
    if (cleanedNum[3] == 1) throw new Error('Exchange code cannot start with one');
  }

  if (cleanedNum.length > 11) throw new Error('More than 11 digits');
  if (cleanedNum.length === 9) throw new Error('Incorrect number of digits');

  return cleanedNum;
};
