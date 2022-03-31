var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
var count = -1;

function handleKeyDownEvent(event) {
  count++;
  if (event.key === $span[count].textContent) {
    $span[count].className = 'green';
  } else if (event.key[count] !== $span[count].textContent) {
    $span[count].className = 'red';
    count--;
  } else {
    $span.className = 'underline';
  }
}

$body.addEventListener('keydown', handleKeyDownEvent);
