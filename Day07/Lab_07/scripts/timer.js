var sec = 0;
var min = 0;
var hrs = 0;


function updateDisplay() {
  var h = hrs.toString().padStart(2, "0");
  var m = min.toString().padStart(2, "0");
  var s = sec.toString().padStart(2, "0");
  timeDiv.innerText = h+":"+m+":"+s;
}

function startTimer() {
  sec++;
  if (sec == 60) {
    sec = 0;
    min++;
    if (min == 60) {
      min = 0;
      hrs++;
    }
  }
  updateDisplay();
}
var Timer = setInterval(startTimer, 1000);

var running = true;
function Pause_play() {
    if (running) {
        clearInterval(Timer);
        b1.innerText = "Continue";
        b1.style.backgroundColor = "rgb(0, 187, 255)";
        running = false;
  } else {
      Timer = setInterval(startTimer, 1000);
      b1.style.backgroundColor = "rgb(0, 245, 0)";
      b1.innerText = "Pause";
      running = true;
  }
}
function Clear() {
    clearInterval(Timer);
    sec = min = hrs = 0;
    updateDisplay();
    b1.innerText = "Start";
    b1.style.backgroundColor = "rgb(255, 255, 0)";
    running = false;
}