export class Series {
  series: string
  constructor(series: string) {
    this.series = series
  }

  slices(sliceLength: number): number[][] {
    if (!this.series) {
      throw new Error('series cannot be empty')
    }
    if (sliceLength === 0) {
      throw new Error('slice length cannot be zero')
    }
    if (sliceLength < 0) {
      throw new Error('slice length cannot be negative')
    }
    if (sliceLength > this.series.length) {
      throw new Error('slice length cannot be greater than series length')
    }

    return Array.from(
      { length: this.series.length - sliceLength + 1 }, // building the outside array with the appropriate length
      (_, i): number[] => {
        if (i > this.series.length - sliceLength) {
          return [] // early return an array to make sure that undefined is not returned
        }
        return Array.from(this.series.substr(i, sliceLength), Number) // building the inside arrays and converting strings to numbers
      },
    )
  }
}
