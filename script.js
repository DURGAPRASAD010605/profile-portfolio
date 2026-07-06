/* ================================================================
   1) MOBILE MENU TOGGLE
      Hamburger <-> X, shows/hides the mobile nav dropdown.
   ================================================================ */
const menuIcon = document.querySelector('#menu-icon');
const navbar = document.querySelector('#navbar');

menuIcon.onclick = () => {
  menuIcon.classList.toggle('bx-x');
  navbar.classList.toggle('active');
};

// Close the mobile menu once a link is tapped
document.querySelectorAll('.nav-link').forEach(link => {
  link.addEventListener('click', () => {
    navbar.classList.remove('active');
    menuIcon.classList.remove('bx-x');
  });
});

/* ================================================================
   2) NAV BACKGROUND ON SCROLL
      Adds ".scrolled" to the nav once the user has scrolled past
      roughly the first 60px, giving it a solid background —
      matches Netflix's own transparent-to-solid nav behaviour.
   ================================================================ */
const nav = document.querySelector('#nav');
window.addEventListener('scroll', () => {
  nav.classList.toggle('scrolled', window.scrollY > 60);
});

/* ================================================================
   3) SCROLL-REVEAL SECTIONS
      Any element with class "reveal" fades/slides in the first
      time it enters the viewport. Uses IntersectionObserver so it
      only costs anything while the section is near the screen.
   ================================================================ */
const revealTargets = document.querySelectorAll('.reveal');

const revealObserver = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('in-view');
      revealObserver.unobserve(entry.target); // only animate once
    }
  });
}, { threshold: 0.15 });

revealTargets.forEach(el => revealObserver.observe(el));

/* ================================================================
   4) ROW ARROW SCROLLING
      Each Skills / Projects / Education row has left & right arrow
      buttons (desktop hover only, see CSS "@media (hover:none)").
      Clicking scrolls the track by roughly one card-width's worth.
   ================================================================ */
document.querySelectorAll('[data-row]').forEach(row => {
  const track = row.querySelector('.row-track');
  row.querySelectorAll('.row-arrow').forEach(arrow => {
    arrow.addEventListener('click', () => {
      const direction = Number(arrow.dataset.dir); // -1 = left, 1 = right
      track.scrollBy({ left: direction * track.clientWidth * 0.8, behavior: 'smooth' });
    });
  });
});

/* ================================================================
   5) FOOTER YEAR
   ================================================================ */
document.getElementById('year').textContent = new Date().getFullYear();
