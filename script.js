//toggle menu
const menuIcon = document.getElementById("dropdown-menu-icon");
const toggleMenu = document.getElementById("toggle_menu");

menuIcon?.addEventListener("click", () => {
  toggleMenu?.classList.toggle("active");
});

//if logo clicked go to top

const logoClick = document.getElementById("logo");

logoClick?.addEventListener("click", () => {
  window.scroll({ top: 0, behavior: "smooth" });
});

/* //? test btn

const playBtn = document.getElementById("playBtn");
 */

// song div after click it asa button 

const songDivs = document.querySelectorAll(".song");

songDivs.forEach((songDiv) => {
  songDiv.addEventListener("click", () => {
    songDiv.classList.contains("song-clicked")
      ? songDiv.classList.remove("song-clicked")
      : songDiv.classList.add("song-clicked");
  });
});

// focused on album introduction

const summaryFocus = document.querySelector(".album-summary-description");
let isFocused = false;

summaryFocus?.addEventListener("click", () => {
  !isFocused
    ? (summaryFocus.classList.add("focused"), (isFocused = true))
    : (summaryFocus?.classList.remove("focused"), (isFocused = false));
});
