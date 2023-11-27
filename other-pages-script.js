//! 1 toggle menu
const menuIcon = document.getElementById("dropdown-menu-icon");
const toggleMenu = document.getElementById("toggle_menu");

menuIcon?.addEventListener("click", () => {
  toggleMenu?.classList.toggle("active");
});

//! 2 if logo was clicked go to top

const logoClick = document.getElementById("logo");

logoClick?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

// focused on album introduction

const summaryFocus = document.querySelector(".album-summary-description");
let isFocused = false;

summaryFocus?.addEventListener("click", () => {
  !isFocused
    ? (summaryFocus.classList.add("focused"), (isFocused = true))
    : (summaryFocus?.classList.remove("focused"), (isFocused = false));
});

//3 month chooser for tour page

const buttonChooser = document.querySelectorAll(".btn-month");
const may = document.getElementById("btn-May");
const june = document.getElementById("btn-June");
const july = document.getElementById("btn-July");
const august = document.getElementById("btn-August");

buttonChooser.forEach((button) => {
  button.addEventListener("click", () => {
    document.querySelector(".btn-month.active")?.classList.remove("active");
    button.classList.add("active");
  });
});
