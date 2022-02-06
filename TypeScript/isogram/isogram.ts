export function isIsogram(word: string): boolean {
  const cleanWord = word.toLowerCase().replace(/\W/, '')
  return new Set(cleanWord).size === cleanWord.length
}
