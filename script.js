const navMenuToggle = document.querySelector('.nav-menu-toggle');
const navMenuContainer = document.querySelector('.nav-menu-container');

navMenuToggle.addEventListener('click', () => {
  navMenuContainer.classList.toggle('hidden');
});
