// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});

// Page sections
const mainPage = document.getElementById('main-page');
const contactPage = document.getElementById('contact-page');

// Navigation handlers
function showPage(page) {
  mainPage.style.display = 'none';
  contactPage.style.display = 'none';
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  page.style.display = 'block';

  // Optional: collapse works list when returning to home
  if (page === mainPage) {
    worksList.classList.remove('active');
  }
}

// Hamburger nav links
document.getElementById('nav-home').addEventListener('click', () => showPage(mainPage));
document.getElementById('nav-contact').addEventListener('click', () => showPage(contactPage));

// Works toggle
const worksBox = document.getElementById('works-box');
const worksList = document.getElementById('works-list');

worksBox.addEventListener('click', () => {
  worksList.classList.toggle('active');
});

// Resume box (customize this)
const resumeBox = document.getElementById('resume-box');
resumeBox.addEventListener('click', () => {
  // Replace with actual resume link if needed
  window.open('your-resume-link.pdf', '_blank');
});
