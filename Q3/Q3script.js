class Clock {
    constructor(hours, minutes, seconds) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;

    }
    
    ConverToSeconds(){
        let secondsAfterConvert = this.hours*3600+this.minutes*60+this.seconds
        console.log(secondsAfterConvert)
    }
  
}

let MyClock= new Clock();