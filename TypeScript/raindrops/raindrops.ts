const isDivisibleBy3 = (n: number): boolean => n % 3 === 0
const isDivisibleBy5 = (n: number): boolean => n % 5 === 0
const isDivisibleBy7 = (n: number): boolean => n % 7 === 0

export function convert(n: number): string {
  let output = ''

  if (isDivisibleBy3(n)) {
    output += 'Pling'
  }
  if (isDivisibleBy5(n)) {
    output += 'Plang'
  }
  if (isDivisibleBy7(n)) {
    output += 'Plong'
  }
  if (!isDivisibleBy3(n) && !isDivisibleBy5(n) && !isDivisibleBy7(n)) {
    output += n
  }

  return output
}
