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

    //! Handle Enter key press for icon
    function handleKeyPress(event) {
      if (event.key === "Enter") {
        toggleMenu.classList.toggle("active");
      }
    }

    menuIcon.addEventListener("keydown", handleKeyPress);

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
//clicking by enter

logoClick.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    window.scroll({ top: 0, behavior: "smooth" });
  }
});

//! 3 focused on album introduction

const summaryFocus = document.querySelector(".album-summary-description");
let isFocused = false;

summaryFocus?.addEventListener("click", () => {
  !isFocused
    ? (summaryFocus.classList.add("focused"), (isFocused = true))
    : (summaryFocus?.classList.remove("focused"), (isFocused = false));
});

//! 4 month chooser for tour page

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
//! 5 artists chooser for artists page its the same code like above this

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

//! 6 clicking  arrow link enables returning to the previous site that referred to the current page
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

//! 7 for desktops, chevron icon if clicked, it hide a social nav menu

const chevronIcon = document.getElementById("chevron-to-show-social-menu");
const socialMenu = document.querySelector(".top-nav-desktop");

//function for tab press to hide and show elements
function handleKeyPress(event) {
  if (event.key === "Enter") {
    socialMenu.classList.toggle("top-nav-desktop-hidden");
    chevronIcon.classList.toggle("rotate");
  }
}
chevronIcon?.addEventListener("keydown", handleKeyPress);

chevronIcon?.addEventListener("click", () => {
  socialMenu?.classList.toggle("top-nav-desktop-hidden");
  chevronIcon.classList.toggle("rotate");
});

//! 8 animate text for artist page

const descriptionElements = document.querySelectorAll(
  ".short-description-above-img"
);
const speed = 40;

// function for animate text within any element
function animateText(element, text, index) {
  if (index < text.length) {
    //show text by each character
    element.textContent += text.charAt(index);
    index++;
    setTimeout(() => animateText(element, text, index), speed);
  }
}

// checking visibility and starting function
function checkVisibility(element) {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          let index = 0;
          const text = entry.target.textContent.trim();
          //delete exist html text
          entry.target.textContent = "";

          animateText(entry.target, text, index);
          //when element is visible you unobserve it
          observer.unobserve(entry.target);
        }
      });
      //  when min 50% of this element is shown on the screen it starts up
    },
    { threshold: 0.5 }
  );

  observer.observe(element);
}

//  checking visibility for any element
descriptionElements.forEach(checkVisibility);

//! 9 form in footer to redirect to greetings page if person complete form with correct email

const form = document.querySelector(".newsletterForm");
//listening submit in form
form.addEventListener("submit", (e) => {
  //to block form action without uncorrect or empty email input
  e.preventDefault();
  //link to redirect page with greetings
  window.location.href = "/src/other/page-greetings/greetings.html";
});

//! 10