var miliSeconds = 0;
var seconds = 0;
var minutes = 0;
var hours = 0;
var t;
var runTimer = 0;
var time = 0;


startPauseContinue = document.querySelector('.start');
clear = document.querySelector('.clear');
display = document.querySelector('.timer');
msDisplay = document.querySelector('.miliseconds');



var timer = {
  doTimer: function doTimer() {
    if (runTimer == 0) {
      runTimer = 1;
      startPauseContinue.style.background = "rgb(66, 184, 221)";
      t = setInterval("timer.timedCount()", 10);
    }
    else {
      clearInterval(t); 
      runTimer = 0; 
      startPauseContinue.innerHTML = "Continue";
      startPauseContinue.style.background = "rgb(28, 184, 65)";
    }
  },

  timedCount: function timedCount() {
    time++;
    miliSeconds = time%100;
    seconds = Math.floor((time/100)%60);
    minutes = Math.floor((time/6000)%60);
    hours = Math.floor((time/360000)%24);

    startPauseContinue.innerHTML = "Pause";
    display.innerHTML = (hours ? (hours > 9 ? hours : "0" + hours) : "00") + ":" + (minutes ? (minutes > 9 ? minutes : "0" + minutes) : "00") + ":" + (seconds > 9 ? seconds : "0" + seconds);
    msDisplay.innerHTML = (miliSeconds ? (miliSeconds > 9 ? miliSeconds : "0" + miliSeconds) : "00") ;
  },

  clearCount: function clearCount() { 
    clearInterval(t); 
    display.textContent = "00:00:00";
    msDisplay.textContent = "0";
    runTimer = 0;
    time = 0;
    startPauseContinue.innerHTML = "Start";
    startPauseContinue.style.background = "rgb(28, 184, 65)";
  }
}





  

