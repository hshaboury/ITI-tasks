var j = 1;
function start() {
  timer = setInterval(function () {
    j++;
    if (j > 8) {
      j = 1;
    }
    MyImg.src = "images/" + j + ".jpg"; 
  }, 1000);
}

function pause() {
  clearInterval(timer);
}
function next() {
    j++;
    if (j > 8) {
      j = 1;
    }
    MyImg.src = "images/" + j + ".jpg"; 
}

function prev() {
    j--;
    if (j <1) {
      j = 8;
    }
    MyImg.src = "images/" + j + ".jpg";
}