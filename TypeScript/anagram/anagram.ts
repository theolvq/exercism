export class Anagram {
  input: string
  constructor(input: string) {
    this.input = input
  }

  private isAnagram(word: string, target: string): boolean {
    if (word.toLowerCase() === target.toLowerCase()) {
      return false
    }
    return (
      [...word.toLowerCase()].sort().join() ===
      [...target.toLowerCase()].sort().join()
    )
  }

  public matches(...potentials: string[]): string[] {
    return potentials.filter((word) => this.isAnagram(word, this.input))
  }
}
