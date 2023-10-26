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

//? test btn

// song div after click it asa button
//!do usunięcia chyba

/*  const songDivs = document.querySelectorAll(".song");

songDivs.forEach((songDiv) => {
  songDiv.addEventListener("click", () => {
    songDiv.classList.contains("song-clicked")
      ? songDiv.classList.remove("song-clicked")
      : songDiv.classList.add("song-clicked");
  });
}); */

// focused on album introduction

const summaryFocus = document.querySelector(".album-summary-description");
let isFocused = false;

summaryFocus?.addEventListener("click", () => {
  !isFocused
    ? (summaryFocus.classList.add("focused"), (isFocused = true))
    : (summaryFocus?.classList.remove("focused"), (isFocused = false));
});

// add audio to song div test
// fuction when clicked songDiv to listen any song but it doesnt work complete if i click button with icons

const songDiv = document.querySelector(".song");
const audio = document.querySelector(".audio-song");
const durationElement = document.getElementById("trackDuration");
let isPlaying = false;

//upadate duration any song
const updateDuration = () => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};
//add and remove class song-clicked if its pause or play

songDiv?.addEventListener("click", () => {
  if (isPlaying) {
    audio?.pause();
    isPlaying = false;
    songDiv.classList.remove("song-clicked");
  } else {
    audio.currentTime = 0;
    audio?.play();
    isPlaying = true;
    songDiv.classList.add("song-clicked");
  }
});

audio.addEventListener("timeupdate", updateDuration);

// if song is ended remove class song-clicked
audio.addEventListener("ended", () => {
  isPlaying = false;
  songDiv.classList.remove("song-clicked");
});
