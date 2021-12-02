export function count(input: string): Map<string, number> {
  const words = input.toLowerCase().trim().split(/\s/).filter(Boolean)

  return words.reduce(
    (acc, word) => acc.set(word, (acc.get(word) || 0) + 1),
    new Map(),
  )
}
