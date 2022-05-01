
var $imgNodeList = document.querySelectorAll('img[data-img-id]');
var $iconDotsDiv = document.querySelector('#dots');
var $imagesDiv = document.querySelector('#images');
var $body = document.querySelector('body');
var $dotIconNodeList = document.querySelectorAll('i[data-img-id]');
var $rightArrow = document.querySelector('#right');
var $leftArrow = document.querySelector('#left');

var intervalID;
function startCarousel() {
  intervalID = setInterval(carousel, 3000);
}
startCarousel();

var timingCount = 0;

function carousel() {
  if (timingCount < 4) {
    timingCount++;
    viewSwap(timingCount);
  } else {
    timingCount = 0;
    viewSwap(timingCount);
  }
}

function viewSwap(iconId) {
  for (var i = 0; i < $imgNodeList.length; i++) {
    if (iconId === Number($imgNodeList[i].getAttribute('data-img-id'))) {
      $imgNodeList[i].classList.remove('hidden');
      $dotIconNodeList[i].className = 'fas fa-circle';
    } else {
      $imgNodeList[i].classList.add('hidden');
      $dotIconNodeList[i].className = 'far fa-circle';
    }
  }
}

function imageBackwards() {
  if (timingCount > 0) {
    timingCount--;
    viewSwap(timingCount);
  } else {
    timingCount = 4;
    viewSwap(timingCount);
  }
}

$iconDotsDiv.addEventListener('click', handleCircleClickEvent);

function handleCircleClickEvent(event) {
  var $iconDataImgId = event.target.getAttribute('data-img-id');
  $iconDataImgId = Number($iconDataImgId);
  if (event.target.matches('i')) {
    timingCount = $iconDataImgId;
    viewSwap($iconDataImgId);
  }
}

$imagesDiv.addEventListener('click', handleArrowClickEvent);

function handleArrowClickEvent(event) {
  if (event.target === $rightArrow) {
    carousel();
  } else if (event.target === $leftArrow) {
    imageBackwards();
  }
}

$body.addEventListener('click', handleTimerReset);

function handleTimerReset(event) {
  if (event.target.matches('i')) {
    clearInterval(intervalID);
    startCarousel();
  }
}
