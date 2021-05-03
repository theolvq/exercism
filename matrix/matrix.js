export class Matrix {
  constructor(string) {
    this.string = string;
  }

  get rows() {
    return this.string.split(/\n/g).map(el => el.split(' ').map(Number));
  }

  get columns() {
    return Array.from({ length: this.rows[0].length }, (_, i) =>
      this.rows.map(el => el[i])
    );
  }
}
