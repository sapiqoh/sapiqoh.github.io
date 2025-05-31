// Toggle hamburger menu
const hamburger = document.getElementById('hamburger');
const menu = document.getElementById('menu');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('open');
  menu.classList.toggle('open');
});

// Navigation handlers
const mainPage = document.getElementById('main-page');
const portfolioPage = document.getElementById('portfolio-page');
const contactPage = document.getElementById('contact-page');

function showPage(page) {
  // Hide all
  mainPage.style.display = 'none';
  portfolioPage.style.display = 'none';
  contactPage.style.display = 'none';
  // Close hamburger menu
  hamburger.classList.remove('open');
  menu.classList.remove('open');
  // Show chosen page
  page.style.display = 'block';

  // Reset works list on portfolio page when showing portfolio
  if(page === portfolioPage) {
    worksList.classList.remove('active');
  }
}

// Buttons on main page
document.getElementById('btn-portfolio').addEventListener('click', () => showPage(portfolioPage));
document.getElementById('btn-contact').addEventListener('click', () => showPage(contactPage));

// Hamburger nav links
document.getElementById('nav-home').addEventListener('click', () => showPage(mainPage));
document.getElementById('nav-portfolio').addEventListener('click', () => showPage(portfolioPage));
document.getElementById('nav-contact').addEventListener('click', () => showPage(contactPage));

// Works box toggle projects
const worksBox = document.getElementById('works-box');
const worksList = document.getElementById('works-list');

worksBox.addEventListener('click', () => {
  worksList.classList.toggle('active');
});

// Resume box click (example)
const resumeBox = document.getElementById('resume-box');
resumeBox.addEventListener('click', () => {
  alert('You can link your resume PDF or page here.');
});
