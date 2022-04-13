var $h1CountDown = document.querySelector('.countdown-display');
var intervalID = setInterval(countdown, [1000]);
var count = 4;

function countdown() {
  count--;
  $h1CountDown.textContent = count;
  if (count === 0) {
    $h1CountDown.textContent = '~Earth Beeeelooowww Us~';
    clearInterval(intervalID);
  }
}
