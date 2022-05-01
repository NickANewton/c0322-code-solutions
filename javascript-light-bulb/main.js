var lightsOn = true;
var $circle = document.querySelector('.circle');
var $body = document.querySelector('body');

function handleClickEvent(event) {
  lightsOn = !lightsOn;
  if (lightsOn === true) {
    $circle.className = 'circle';
    $body.className = 'off-yellow';
  } else if (lightsOn === false) {
    $circle.className = 'circle gray';
    $body.className = 'black';
  }
}

$circle.addEventListener('click', handleClickEvent);
