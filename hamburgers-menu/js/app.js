var button = document.getElementById('btn');
function showMenu() {
  //console.log("func");
  var menu = document.getElementById('opcs-menu');

  if(menu.classList.contains('disabled-menu')) {
    //console.log('mostrar');
    menu.classList.remove('disabled-menu');
    menu.classList.add('enabled-menu');
  } else {
    //console.log('ocultar');
    menu.classList.remove('enabled-menu');
    menu.classList.add('disabled-menu');
  }
}

button.addEventListener('click', showMenu);
