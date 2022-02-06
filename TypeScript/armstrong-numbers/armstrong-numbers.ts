export const isArmstrongNumber = (number: number): boolean =>
  number
    .toString()
    .split('')
    .reduce((acc, num) => acc + Number(num) ** number.toString().length, 0) ===
  number
