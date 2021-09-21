export class Clock {
  constructor(hours, minutes = 0) {
    this.hours = hours;
    this.minutes = minutes;
  }

  toString() {
    while (this.minutes >= 60) {
      this.minutes -= 60;
      this.hours++;
    }
    while (this.minutes < 0) {
      this.minutes += 60;
      this.hours--;
    }
    while (this.hours >= 24) {
      this.hours -= 24;
    }
    while (this.hours < 0) {
      this.hours = 24 + this.hours;
    }

    this.hours < 10 ? (this.hours = `0${this.hours}`) : this.hours;
    this.minutes < 10 ? (this.minutes = `0${this.minutes}`) : this.minutes;

    return `${this.hours}:${this.minutes}`;
  }

  plus(min) {
    this.minutes += min;
    return this;
  }

  minus(min) {
    this.minutes -= min;
    return this;
  }

  equals(clock) {
    this.toString();
    clock.toString();
    return Object.values(this).every((el, i) => el === Object.values(clock)[i]);
  }
}
