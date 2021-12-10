export class Allergies {
  private static TABLE: [string, number][] = [
    ['cats', 128],
    ['pollen', 64],
    ['chocolate', 32],
    ['tomatoes', 16],
    ['strawberries', 8],
    ['shellfish', 4],
    ['peanuts', 2],
    ['eggs', 1],
  ]
  private _list: string[] = []
  index: number

  constructor(allergenIndex: number) {
    this.index = allergenIndex
    this._list = this.generateList(this.index)
  }

  private generateList(score: number): string[] {
    const allergyList = []
    while (score > 0) {
      const allergen = Allergies.TABLE.find(([_, value]) => score >= value)

      if (allergen) {
        allergyList.unshift(allergen[0])
        score -= allergen[1]
      }
    }

    return [...new Set(allergyList)]
  }

  public list(): string[] {
    return this._list
  }

  public allergicTo(allergen: string): boolean {
    return this._list.some((item) => item === allergen)
  }
}
