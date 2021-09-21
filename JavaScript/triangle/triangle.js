//
// This is only a SKELETON file for the 'Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export class Triangle {
  constructor(...sides) {
    this.sides = sides;
    this.isTriangle =
      this.sides[0] + this.sides[1] >= this.sides[2] &&
      this.sides[1] + this.sides[2] >= this.sides[0] &&
      this.sides[2] + this.sides[0] >= this.sides[1];
  }

  get isEquilateral() {
    return this.sides.every(side => side !== 0 && side === this.sides[0]);
  }

  get isIsosceles() {
    return (
      this.isTriangle &&
      (this.sides[0] === this.sides[1] ||
        this.sides[1] === this.sides[2] ||
        this.sides[0] === this.sides[2])
    );
  }

  get isScalene() {
    return this.isTriangle && !this.isEquilateral && !this.isIsosceles;
  }
}
