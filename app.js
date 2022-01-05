let daysEL = document.querySelector("#days");
let hoursEL = document.querySelector("#hours");
let minutesEL = document.querySelector("#minutes");
let secondsEl = document.querySelector("#seconds");
let newYear = new Date("01 Jan 2023");

function countDown() {
  let newYearDate = new Date(newYear);
  let current = new Date();
  let totalSeconds = Math.floor((newYear.getTime() - current.getTime()) / 1000);
  let counter = 0;
  let timer = setInterval(function () {
    counter += 1;
    second = totalSeconds - counter;
    seconds = second % 60;

    minutes = Math.floor(second / 60) % 60;
    hours = Math.floor(second / 3600) % 24;
    days = Math.floor(second / 86400);

    daysEL.innerHTML = days;
    hoursEL.innerHTML = hours;
    minutesEL.innerHTML = minutes;
    secondsEl.innerHTML = seconds;
    if (counter === totalSeconds) {
      clearInterval(timer);
      console.log("Happy New Year");
    }
  }, 1000);
}

countDown();
