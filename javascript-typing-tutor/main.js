var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
var grumpy = '';

function handleKeyDownEvent(event) {
  grumpy += event.key;
  for (var i = 0; i < $span.length; i++) {
    if (grumpy[i] === $span[i].textContent) {
      $span[i].className = 'green';
    } else if (grumpy[i] !== $span[i].textContent) {
      $span[i].className = 'red';
    } else {
      $span.className = 'underline';
    }
  }
}

$body.addEventListener('keydown', handleKeyDownEvent);
