export class Triangle {
  sides: number[]

  constructor(...sides: number[]) {
    this.sides = sides
  }

  private isValidTriangle(): boolean {
    return (
      this.sides.some((side) => side !== 0) &&
      !(
        this.sides[0] > this.sides[2] * 2 ||
        this.sides[1] > this.sides[2] * 2 ||
        this.sides[2] > this.sides[0] * 2
      )
    )
  }

  get isEquilateral(): boolean {
    return (
      this.isValidTriangle() &&
      this.sides[0] === this.sides[1] &&
      this.sides[0] === this.sides[2]
    )
  }

  get isIsosceles(): boolean {
    return (
      this.isValidTriangle() &&
      (this.sides[0] === this.sides[1] ||
        this.sides[1] === this.sides[2] ||
        this.sides[0] === this.sides[2])
    )
  }

  get isScalene(): boolean {
    return this.isValidTriangle() && !this.isEquilateral && !this.isIsosceles
  }
}
