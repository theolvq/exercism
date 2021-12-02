interface IMatrix {
  rows: number[][]
  columns: number[][]
}

export class Matrix implements IMatrix {
  private _rows: number[][]
  private _columns: number[][]

  constructor(input: string) {
    this._rows = input.split('\n').map((row) => row.split(' ').map(Number))
    this._columns = this._rows[0].map((_, index) =>
      this._rows.map((row) => row[index]),
    )
  }

  get rows(): number[][] {
    return this._rows
  }

  get columns(): number[][] {
    return this._columns
  }
}
