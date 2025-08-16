// menu toggle logic (hamburger -> X and toggle navbar)
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('.navbar');

// toggle classes on click
menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');   // swaps the icon visually (boxicons class)
  navbar.classList.toggle('active');   // shows/hides mobile nav
};

// close mobile menu when a nav link is clicked (nice-to-have)
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    if (navbar.classList.contains('active')) {
      navbar.classList.remove('active');
      menuIcon.classList.remove('bx-x');
    }
  });
});

// set current year in footer
document.getElementById('year').textContent = new Date().getFullYear();