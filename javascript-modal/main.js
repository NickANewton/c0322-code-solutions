var $popUp = document.querySelector('.pop-up');
var $container = document.querySelector('.container');
var $first = document.querySelector('.first');
var $no = document.querySelector('.no');
var popUp = true;

function handleClickEvent(event) {
  popUp = !popUp;
  if (popUp === true) {
    $container.className = '';
    $popUp.className = 'pop-up hidden';
    $first.className = 'first';
  } else if (popUp === false) {
    $container.className = 'container opacity';
    $popUp.className = 'pop-up center';
    $first.className = 'first z-index';
  }
}

$first.addEventListener('click', handleClickEvent);
$no.addEventListener('click', handleClickEvent);
