var $contianer = document.querySelector('.tab-container');
var $tab = document.querySelectorAll('.tab');
var $view = document.querySelectorAll('.view');

function handleClickEvent(event) {
  if (event.target.matches('.tab')) {
    for (var i = 0; i < $tab.length; i++) {
      if (event.target === $tab[i]) {
        $tab[i].className = 'tab active';
      } else {
        $tab[i].className = 'tab';
      }
    }
    var $dataViewAttribute = event.target.getAttribute('data-view');
    for (var e = 0; e < $view.length; e++) {
      if ($dataViewAttribute === $view[e].getAttribute('data-view')) {
        $view[e].className = 'view';
      } else {
        $view[e].className = 'view hidden';
      }
    }
  }
}

$contianer.addEventListener('click', handleClickEvent);
