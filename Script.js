let hours = 0,
  minutes = 0,
  seconds = 0;
let timer = document.getElementById("timer");
let interval;
let ringtone = new Audio("ringtone.mp3");

//Adds a zero to each of the hours, minutes or seconds if
//it's under 10. Ex: 01, 05, 09, 10
function zeroOrNo(h, m, s) {
  let t;
  if (hours < 10) {
    t = `0${h}`;
  } else {
    t = `${h}`;
  }
  if (minutes < 10) {
    t = t + ":" + `0${m}`;
  } else {
    t = t + ":" + `${m}`;
  }
  if (seconds < 10) {
    t = t + ":" + `0${s}`;
  } else {
    t = t + ":" + `${s}`;
  }
  return t;
}

function changeTime(h, m, s) {
  hours = h;
  minutes = m;
  seconds = s;
  let t = zeroOrNo(h, m, s);
  timer.innerHTML = t;
}

function timerChange() {
  --seconds;
  if (seconds == -1) {
    --minutes;
    seconds = 59;
    if (minutes == -1) {
      --hours;
      minutes = 59;
      if (hours == -1) {
        hours = 0;
        minutes = 0;
        seconds = 0;
        clearInterval(interval);
        ringtone.play();
      }
    }
  }
  let t = zeroOrNo(hours, minutes, seconds);
  timer.innerHTML = t;
}

//-- Control buttons' functions --
function timerStarts() {
  clearInterval(interval);
  interval = setInterval(timerChange, 1000);
}

function timerStops() {
  clearInterval(interval);
}

function timerReset() {
  clearInterval(interval);
  timer.innerHTML = "00:00:00";
}
//-- --
