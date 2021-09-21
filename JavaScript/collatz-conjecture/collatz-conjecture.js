//
// This is only a SKELETON file for the 'Collatz Conjecture' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const steps = n => {
  let counter = 0;
  if (n <= 0) {
    throw new Error('Only positive numbers are allowed');
  } else if (n === 1) {
    return counter;
  } else {
    do {
      if (n % 2 === 0) {
        n /= 2;
        counter++;
      } else {
        n *= 3;
        n++;
        counter++;
      }
    } while (n > 1);
    return counter;
  }
};
