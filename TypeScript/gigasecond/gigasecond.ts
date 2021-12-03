export class Gigasecond {
  private _date: Date
  constructor(time: Date) {
    this._date = time
  }
  public date() {
    return new Date(this._date.getTime() + Math.pow(10, 12))
  }
}
