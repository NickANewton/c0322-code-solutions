var $span = document.querySelectorAll('span');
var $firstSpan = document.querySelector('span');
var grump = 'grumpy wizards make toxic brew';

function handleKeyDownEvent(event) {

  for (var i = 0; i < $span.length; i++) {
    if ($span[i] === grump[i]) {
      $span[i].className = 'green';
    }
  }
}

$firstSpan.addEventListener('keydown', handleKeyDownEvent);
