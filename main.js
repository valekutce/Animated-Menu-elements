const icon = document.querySelector(".icon");
const nav = document.querySelector("nav");
let faBars = document.querySelector('.fa-bars');
let links = document.querySelectorAll('nav a');

icon.addEventListener("click", () => {
  icon.classList.toggle("close");
  nav.classList.toggle("show");
  if (icon.classList.contains('close')) {
    faBars.setAttribute('class', 'fa fa-times');
  } else if (!icon.classList.contains('close')) {
    faBars.setAttribute('class', 'fa fa-bars');
  }
});

links.forEach((link) => {
  link.addEventListener('click', () => {
    icon.classList.toggle("close");
    nav.classList.toggle("show");
    faBars.setAttribute('class', 'fa fa-bars');
  });
})