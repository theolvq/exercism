export function classify(n: number): string {
  if (n < 1) {
    throw new Error('Classification is only possible for natural numbers.')
  }
  const factors = []
  for (let i = 0; i < n; i++) {
    if (n % i === 0) {
      factors.push(i)
    }
  }

  const aliquotSum = factors.reduce((curr, next) => curr + next, 0)

  if (aliquotSum > n) return 'abundant'
  if (aliquotSum < n) return 'deficient'
  return 'perfect'
}
