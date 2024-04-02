// Function to handle button clicks and navigate to different pages
function handleButtonClicks() {
  const homeButton = document.querySelector('nav ul li:nth-child(1) a');
  const gamesButton = document.querySelector('nav ul li:nth-child(2) a');
  const appsButton = document.querySelector('nav ul li:nth-child(3) a');
  const settingsButton = document.querySelector('nav ul li:nth-child(4) a');
  const contactButton = document.querySelector('.footer-link[href="#"]');

  const homePage = document.querySelector('.hero');
  const gamesPage = document.querySelector('.carousel');
  const appsPage = document.querySelector('.game-page');
  const settingsPage = document.querySelector('.game-page'); // Assuming settings and apps pages are the same for this example
  const contactPage = document.querySelector('footer');

  homeButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Show home page and hide other pages
    homePage.style.display = 'flex';
    gamesPage.style.display = 'none';
    appsPage.style.display = 'none';
    settingsPage.style.display = 'none';
    contactPage.style.display = 'none';
  });

  gamesButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Show games page and hide other pages
    homePage.style.display = 'none';
    gamesPage.style.display = 'block';
    appsPage.style.display = 'none';
    settingsPage.style.display = 'none';
    contactPage.style.display = 'none';
  });

  appsButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Show apps page and hide other pages
    homePage.style.display = 'none';
    gamesPage.style.display = 'none';
    appsPage.style.display = 'block';
    settingsPage.style.display = 'none';
    contactPage.style.display = 'none';
  });

  settingsButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Show settings page and hide other pages
    homePage.style.display = 'none';
    gamesPage.style.display = 'none';
    appsPage.style.display = 'block'; // Assuming settings and apps pages are the same for this example
    settingsPage.style.display = 'none';
    contactPage.style.display = 'none';
  });

  contactButton.addEventListener('click', function(event) {
    event.preventDefault();
    // Scroll to contact section
    const contactSection = document.querySelector('footer');
    contactSection.scrollIntoView({ behavior: 'smooth' });
  });
}

// Call the functions when the DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
  toggleActiveClass();
  smoothScroll();
  handleButtonClicks();
});
