export class Squares {
  private _count: number
  constructor(count: number) {
    this._count = count
  }

  get sumOfSquares(): number {
    return Array.from({ length: this._count }, (_, i) => (i + 1) ** 2).reduce(
      (acc, next) => acc + next,
      0,
    )
  }

  get squareOfSum(): number {
    return (
      Array.from({ length: this._count }, (_, i) => i + 1).reduce(
        (acc, next) => acc + next,
        0,
      ) ** 2
    )
  }

  get difference(): number {
    return this.squareOfSum - this.sumOfSquares
  }
}
