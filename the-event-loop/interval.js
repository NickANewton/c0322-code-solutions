var currentCount = 4;
const intervalID = setInterval(countDown, 1000);

function countDown() {
  currentCount--;
  if (currentCount > 0) {
    console.log(currentCount);
  } else {
    console.log('Blast off!');
    clearInterval(intervalID);
  }
}
