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

//! 3 add audio to song div test
// fuction when clicked songDiv to listen any song but it doesnt work complete if i click button with icons

const songDiv = document.querySelector(".song");
const audio = document.querySelector(".audio-song");
const durationElement = document.getElementById("trackDuration");
let isPlaying = false;

//checking availability for html elements
if (!songDiv || !audio || !durationElement) {
  console.error("Element html is not reached");
} else {
  //upadate duration for any song
  const updateDuration = () => {
    if (audio instanceof HTMLAudioElement) {
      const currentTime = audio.currentTime;
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      durationElement.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    }
  };

  //add and remove class song-clicked if its pause or play

  songDiv.addEventListener("click", () => {
    if (isPlaying) {
      if (audio instanceof HTMLAudioElement) {
        audio.pause();
        isPlaying = false;
        songDiv.classList.remove("song-clicked");
      }
    } else {
      if (audio instanceof HTMLAudioElement) {
        audio.currentTime = 0;
        audio.play();
        isPlaying = true;
        songDiv.classList.add("song-clicked");
      }
    }
  });

  // event listener for audio to update song duration
  if (audio instanceof HTMLAudioElement) {
    audio.addEventListener("timeupdate", updateDuration);

    // if song is ended remove class song-clicked
    audio.addEventListener("ended", () => {
      isPlaying = false;
      songDiv.classList.remove("song-clicked");
    });
  }
}
