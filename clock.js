class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.
    this.date = new Date();
    this.printTime();
    setInterval(this._tick.bind(this), 1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    let hour = this.date.getHours();
    let minute = this.date.getMinutes();
    let second = this.date.getSeconds();
    console.log(`${hour}:${minute}:${second}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    this.date.setSeconds(this.date.getSeconds()+1);
    this.printTime();
  }
}

const clock = new Clock();
