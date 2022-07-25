//Select dom items
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu");
const menuNav = document.querySelector(".menu-nav");
const menuBranding = document.querySelector(".menu-branding");
const navItems = document.querySelectorAll(".nav-item");
//Set initial State of Menu
let showMenu = false;

menuBtn.addEventListener("click", toggleMenu);
function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add("close");
    menu.classList.add("show");
    menuNav.classList.add("show");
    menuBranding.classList.add("show");
    navItems.forEach((item) => item.classList.add("show"));

    //set menu state
    showMenu = true;
  } else {
    menuBtn.classList.remove("close");
    menu.classList.remove("show");
    menuNav.classList.remove("show");
    menuBranding.classList.remove("show");
    navItems.forEach((item) => item.classList.remove("show"));

    //set menu state
    showMenu = false;
  }
}

function darkMode() {
  var element = document.body;
  var l = document.getElementById("lol");
  var o = document.getElementById("menu-nav");

  o.classList.toggle("dark-mode");
  l.classList.toggle("dark-mode");
  element.classList.toggle("dark-mode");
}

/* function darkMode() {
  var element = document.body;
  var content = document.getElementById("dark-mode");
  element.className = "dark-mode";

}
function lightMode() {
  var element = document.body;
  var content = document.getElementById("light-mode");
  element.className = "light-mode";

 
} */
