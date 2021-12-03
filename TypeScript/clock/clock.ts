export class Clock {
  private hour: number
  private minute: number

  constructor(hour: number, minute?: number) {
    this.hour = hour
    this.minute = minute || 0
  }

  private getTime(): Clock {
    while (this.minute >= 60) {
      this.hour++
      this.minute -= 60
    }
    while (this.hour >= 24) {
      this.hour -= 24
    }
    while (this.minute < 0) {
      this.hour--
      this.minute += 60
    }
    while (this.hour < 0) {
      this.hour += 24
    }
    return this
  }

  public toString(): string {
    this.getTime()
    const stringHour = this.hour < 10 ? `0${this.hour}` : `${this.hour}`
    const stringMinute = this.minute < 10 ? `0${this.minute}` : `${this.minute}`
    return `${stringHour}:${stringMinute}`
  }

  public plus(minutes: number): Clock {
    this.minute += minutes
    return this
  }

  public minus(minutes: number): Clock {
    this.minute -= minutes
    return this
  }

  public equals(other: Clock): boolean {
    return this.toString() === other.toString()
  }
}
