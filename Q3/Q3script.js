
const padWithZeros = (value) => (value < 10 ? "0" + value : value);



class Clock {
    constructor(hours, minutes, seconds,country) {
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
      this.country = country;
    }
    
    ConverToSeconds(){
        return this.hours * 3600 + this.minutes * 60 + this.seconds;

    }
    Show(){
      return `${padWithZeros(this.hours)}: ${padWithZeros(this.minutes)}: ${padWithZeros(this.seconds)}`
    }
  
}

const clocksArray = [];



function displayClocksAndSeconds() {
  let outputText = "Clocks:\n";
  clocksArray.forEach((clock) => {
       outputText += `Country: ${clock.country} - ${clock.Show()} Converted to Seconds: ${clock.ConverToSeconds()}\n`;
  });

  console.log(outputText);
  document.getElementById("clocksOutput").innerHTML = outputText;
}



document.getElementById("ClockForm").addEventListener("submit", function(event) {
  event.preventDefault(); 

  const countryInput = document.getElementById("country").value;
  const hoursInput = document.getElementById("hours").value;
  const minutesInput = document.getElementById("minutes").value;
  const secondsInput = document.getElementById("seconds").value;


  const validHours = /^(0?[0-9]|1[0-9]|2[0-3])$/.test(hoursInput);
  const formattedHours = validHours ? padWithZeros(parseInt(hoursInput)) : "00";

  const validMinutes = /^[0-5]?[0-9]$/.test(minutesInput);
  const formattedMinutes = validMinutes ? padWithZeros(parseInt(minutesInput)) : "00";

  const validSeconds = /^[0-5]?[0-9]$/.test(secondsInput);
  const formattedSeconds = validSeconds ? padWithZeros(parseInt(secondsInput)) : "00";

  if (validHours && validMinutes && validSeconds) {
      const myClock = new Clock(
          parseInt(formattedHours),
          parseInt(formattedMinutes),
          parseInt(formattedSeconds),
          countryInput
      );

      clocksArray.push(myClock);
      console.log(clocksArray);

      if (clocksArray.length === 5) {
          displayClocksAndSeconds();
          clocksArray = [];
      }

      // Reset form inputs
      document.getElementById("country").value = "";
      document.getElementById("hours").value = "";
      document.getElementById("minutes").value = "";
      document.getElementById("seconds").value = "";
  } else {
      alert("Invalid input. Please enter valid values for hours, minutes, and seconds.");
  }
});




