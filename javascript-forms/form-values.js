var $contactForm = document.querySelector('#contact-form');

function handleSubmit(event) {
  event.preventDefault();
  var $messageData = {};
  $messageData.name = document.querySelector('#user-name').value;
  $messageData.email = document.querySelector('#user-email').value;
  $messageData.message = document.querySelector('#user-message').value;
  console.log('messageData:', $messageData);
}

$contactForm.addEventListener('submit', handleSubmit);
