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

document.addEventListener("DOMContentLoaded", function () {
  const buttonChooser = document.querySelectorAll(".btn-month");
  const monthDivs = document.querySelectorAll(".month-div");
  // btns per month
  buttonChooser.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".btn-month.active")?.classList.remove("active");
      button.classList.add("active");

      // dates per month card and split btn id into array with 2 elements
      const monthId = button.id.split("-")[1];

      monthDivs.forEach((div) => {
        div.classList.remove("active");
      });
      //add 'active' class
      const selectedMonthDiv = document.getElementById(`${monthId}-card`);
      // add active class if selectedMonth exist or is null
      if (selectedMonthDiv) {
        selectedMonthDiv.classList.add("active");
      }
    });
  });
});


//4 clicking  arrow link enables returning to the previous site that referred to the current page
// and this function using a the browser's history to navigate back to the referring page.

const linkReturn = document.querySelector(".arrow-link");

document.addEventListener("DOMContentLoaded", () => {
  if (linkReturn) {
    linkReturn.addEventListener("click", function (e) {
      e.preventDefault();
      window.history.back();
    });
  }
});
