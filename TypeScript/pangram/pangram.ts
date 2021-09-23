export function isPangram(string: string): boolean {
  const array = string
    .toLowerCase()
    .replace(/\s|[^a-z]/g, '')
    .split('')

  if (string.length > 0) {
    return new Set(array).size === 26
  }
  return false
}
