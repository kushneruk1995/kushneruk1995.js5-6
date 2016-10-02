var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;
var runTimer=0;


startPauseContinue = document.querySelector('.start');
clear = document.querySelector('.clear');
display = document.querySelector('.timer');
msDisplay = document.querySelector('.miliseconds');



var timer = {
  doTimer: function doTimer() {
    if (runTimer == 0) {
      runTimer = 1;
      t = setInterval("timer.timedCount()", 10);
      startPauseContinue.style.background = "rgb(66, 184, 221)";
    }
    else {
      clearInterval(t); 
      runTimer = 0; 
      startPauseContinue.innerHTML = "Continue";
      startPauseContinue.style.background = "rgb(28, 184, 65)";
    }
  },

  timedCount : function timedCount() {

    miliSeconds++;
    if(miliSeconds > 99) {
      miliSeconds = 0;
      seconds++;
      if (seconds > 60) {
        seconds = 0;
        minutes++;
        if(minutes > 60) {
          minutes = 0;
          hours++;
          if(hours > 24) {
            hours = 0;
          }
        }
      }
    }

    startPauseContinue.innerHTML = "Pause";
    display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    msDisplay.innerHTML = (miliSeconds ? (miliSeconds > 9 ? miliSeconds : "0" + hours) : "00") ;
  },

clearCount: function clearCount() { 
  clearInterval(t); 
  display.textContent = "00:00:00";
  msDisplay.textContent = "0";
  seconds = 0;
  minutes = 0;
  hours = 0;
  miliSeconds = 0;
  runTimer = 0;
  startPauseContinue.innerHTML = "Start";
  startPauseContinue.style.background = "rgb(28, 184, 65)";
}
}





  

