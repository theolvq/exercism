export class Squares {
  constructor(n) {
    this.n = [...Array(n + 1).keys()];
  }

  get sumOfSquares() {
    return this.n.reduce((a, b) => a + b ** 2);
  }

  get squareOfSum() {
    return this.n.reduce((a, b) => a + b) ** 2;
  }

  get difference() {
    return this.squareOfSum - this.sumOfSquares;
  }
}
