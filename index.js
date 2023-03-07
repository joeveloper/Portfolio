function openNav() {
  document.getElementById('mobile-menu').classList.add('visible');
}

function closeNav() {
  document.getElementById('mobile-menu').classList.replace('visible', 'hidden');
}

document.getElementById('burger-parents').addEventListener('click', openNav);

document.getElementById('closebtn').addEventListener('click', closeNav);
