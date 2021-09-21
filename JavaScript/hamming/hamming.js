export const compute = (strand1, strand2) => {
  let distance = 0;
  if (!strand1 && strand2) {
    throw new Error('left strand must not be empty');
  } else if (!strand2 && strand1) {
    throw new Error('right strand must not be empty');
  } else if (strand1.length !== strand2.length) {
    throw new Error('left and right strands must be of equal length');
  } else {
    [...strand1].forEach((el, i) => (el !== [...strand2][i] ? distance++ : ''));
    return distance;
  }
};
