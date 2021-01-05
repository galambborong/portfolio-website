const hamburger = document.getElementById('hamburger');
const navItems = document.getElementById('nav-items');

const projectBtn = document.getElementById('projectx');
const projectDetails = document.getElementById('projecty');


hamburger.addEventListener('click', () => {
  navItems.classList.toggle('show-nav');
});

projectBtn.addEventListener('click', () => {
  projectDetails.classList.toggle('show-proj');
})