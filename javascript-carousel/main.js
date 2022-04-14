
var $imgNodeList = document.querySelectorAll('img');
var $iconDotsDiv = document.querySelector('#dots');
var $imagesDiv = document.querySelector('#images');
var $body = document.querySelector('body');

var intervalID;
function startCarousel() {
  intervalID = setInterval(carousel, 3000);
}
startCarousel();

var timingCount = 0;

function carousel() {
  if (timingCount < 4) {
    timingCount++;
    viewSwapForward(timingCount);
  } else {
    timingCount = 0;
    viewSwapForward(timingCount);
  }
}

$iconDotsDiv.addEventListener('click', handleCircleClickEvent);

function handleCircleClickEvent(event) {
  var $iconDataImgId = event.target.getAttribute('data-img-id');
  $iconDataImgId = Number($iconDataImgId);
  if (event.target.matches('i')) {
    timingCount = $iconDataImgId;
    viewSwapForward($iconDataImgId);
  }
}

function viewSwapForward(iconId) {
  for (var i = 0; i < $imgNodeList.length; i++) {
    if (iconId === Number($imgNodeList[i].getAttribute('data-img-id'))) {
      $imgNodeList[i].classList.remove('hidden');
    } else {
      $imgNodeList[i].classList.add('hidden');
    }
  }
}

/* function viewSwapBackwards(iconId) {
  for (var i = 4; i < $imgNodeList.length; i--) {
    if (iconId === Number($imgNodeList[i].getAttribute('data-img-id'))) {
      $imgNodeList[i].classList.remove('hidden');
    } else {
      $imgNodeList[i].classList.add('hidden');
    }
  }
} */

$imagesDiv.addEventListener('click', handleArrowClickEvent);

function handleArrowClickEvent(event) {
  if (event.target.matches('i')) {
    carousel();
  }
}

$body.addEventListener('click', handleTimerReset);

function handleTimerReset(event) {
  if (event.target.matches('i')) {
    clearInterval(intervalID);
    startCarousel();
  }
}
