var $span = document.querySelectorAll('span');
var $body = document.querySelector('body');
var count = -1;

function handleKeyDownEvent(event) {
  count++;
  if (count > $span.length - 1) {
    return;
  }
  var underline = $span[count + 1];

  if (event.key === $span[count].textContent) {
    $span[count].className = 'green';
    if (count < 29) {
      underline.className = 'underline';
    }
  } else if (event.key[count] !== $span[count].textContent) {
    $span[count].className = 'red';
    count--;
  }
}

$body.addEventListener('keydown', handleKeyDownEvent);
