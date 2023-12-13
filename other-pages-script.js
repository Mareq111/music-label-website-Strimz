//! 1 toggle menu, and if you click everywhere you close toggle menu without click on icon

//react to load our dom structure
document.addEventListener("DOMContentLoaded", function () {
  const toggleMenu = document.getElementById("toggle_menu");
  const menuIcon = document.getElementById("dropdown-menu-icon");

  //click icon to activate toggle menu
  if (menuIcon && toggleMenu) {
    menuIcon.addEventListener("click", (e) => {
      toggleMenu.classList.toggle("active");
      
    });

    //if you click anywhere besides toggleMenu you close it

    document.addEventListener("click", (e) => {
      //if you click into toggle menu you wont close it
      const isClickInsideMenu = toggleMenu.contains(e.target);
      //checking if click is on icon
      const isClickOnMenuIcon = menuIcon.contains(e.target);

      //if you click anywhere besides toggleMenu and icon - you close it
      if (!isClickInsideMenu && !isClickOnMenuIcon) {
        toggleMenu.classList.remove("active");
      }
    });
  }
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
//4 artists chooser for artists page its the same code like above this

document.addEventListener("DOMContentLoaded", function () {
  const buttonChooser = document.querySelectorAll(".btn-artists");
  const artistDivs = document.querySelectorAll(".artist-div");
  // btns per artist
  buttonChooser.forEach((button) => {
    button.addEventListener("click", () => {
      document.querySelector(".btn-artists.active")?.classList.remove("active");
      button.classList.add("active");

      // dates per artist card and split btn id into array with 2 elements
      const artistId = button.id.split("-")[1];

      artistDivs.forEach((div) => {
        div.classList.remove("active");
      });
      //add 'active' class
      const selectedArtistDiv = document.getElementById(`${artistId}-card`);
      // add active class if selectedMonth exist or is null
      if (selectedArtistDiv) {
        selectedArtistDiv.classList.add("active");
      }
    });
  });
});


//5 clicking  arrow link enables returning to the previous site that referred to the current page
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

//6 for desktops, chevron icon if clicked, it hide a social nav menu

const chevronIcon = document.getElementById('chevron-to-show-social-menu')
const socialMenu = document.querySelector('.top-nav-desktop')

chevronIcon?.addEventListener('click', () => {
  socialMenu?.classList.toggle('top-nav-desktop-hidden')
  chevronIcon.classList.toggle('rotate');
})



