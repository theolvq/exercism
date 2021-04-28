export const classify = n => {
  if (n < 1)
    throw new Error('Classification is only possible for natural numbers.');

  let sum = 0;
  for (let i = 1; i < n; i++) {
    if (n % i === 0) sum += i;
  }

  return sum < n ? 'deficient' : sum > n ? 'abundant' : 'perfect';
};
