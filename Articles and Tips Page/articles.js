// Elements
const hamburgerMenu = document.querySelector('.hamburger-menu');
const menu = document.querySelector('.menu');
const logo = document.querySelector('.logo');
const header = document.querySelector('.header');
const logoName = document.querySelector('.logo-name');



hamburgerMenu.addEventListener('click', () => {
  hamburgerMenu.classList.toggle('active');
  menu.classList.toggle('active');
  logo.classList.toggle('hidden');// Toggle 'hidden' class for the logo
  header.classList.toggle('menu-active'); 
  logoName.classList.toggle('hidden');
});

document.addEventListener("DOMContentLoaded", function () {
  var path = window.location.pathname;
  var page = path.split("/").pop();
 console.log(page)
  // Remove the 'active' class from all links
  var links = document.querySelectorAll('ul a');
  links.forEach(link => link.classList.remove('active'));

  // Add the 'active' class to the link corresponding to the current page
  links.forEach(link => {

    console.log(link.getAttribute('href').split("/").pop())

    if (link.getAttribute('href').split("/").pop() === page) {
      link.classList.add('active');
    }
  });
});