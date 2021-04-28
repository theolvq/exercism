export class Series {
  constructor(series) {
    this.series = series;
  }

  slices(sliceLength) {
    if (!this.series) throw new Error('series cannot be empty');
    if (sliceLength > this.series.length)
      throw new Error('slice length cannot be greater than series length');
    if (sliceLength === 0) throw new Error('slice length cannot be zero');
    if (sliceLength < 0) throw new Error('slice length cannot be negative');

    return Array.from(
      { length: this.series.length - sliceLength + 1 },
      (_, i) => [...this.series.substr(i, sliceLength)].map(Number)
    );
  }
}
