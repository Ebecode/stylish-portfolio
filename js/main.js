// selector variables
const menu = document.querySelector(".menu-btn");
const menuIcon = document.querySelector(".fas");
const backTop = document.querySelector(".back-top");
const navigation = document.querySelector(".nav-collapse");

//variables
let navDisplay = false;

// functions
function toggleMenu() {
  if (navDisplay === false) {
    navigation.classList.remove("hidden");
    menuIcon.classList.remove("fa-bars");
    navigation.classList.add("shown");
    menuIcon.classList.add("fa-times");
    navDisplay = true;
  } else {
    navigation.classList.remove("shown");
    menuIcon.classList.remove("fa-times");
    navigation.classList.add("hidden");
    menuIcon.classList.add("fa-bars");
    navDisplay = false;
  }
}

//event listeners
menu.addEventListener("click", toggleMenu, true);

window.addEventListener(
  "scroll",
  function() {
    if (window.pageYOffset > 170) {
      backTop.classList.remove("invisible");
    } else {
      backTop.classList.add("invisible");
    }
  },
  false
);
