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

//! 3 add audio to song div
// fuction when a songDiv is clicked to listen any song, even when only "button" icons is clicked

const songDivs = document.querySelectorAll(".song");
let isPlaying = false;
let currentPlayingSongDiv = null;

// Function to stop the currently playing song
function stopCurrentSong() {
  if (currentPlayingSongDiv) {
    const audio = currentPlayingSongDiv.querySelector(".audio-song");
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      currentPlayingSongDiv.classList.remove("song-clicked");
    }
  }
}

// Add event listeners to each song div
songDivs.forEach((songDiv) => {
  const audio = songDiv.querySelector(".audio-song");
  const durationElement = songDiv.querySelector(".song-duration");

  songDiv.addEventListener("click", () => {
    if (currentPlayingSongDiv !== songDiv) {
      stopCurrentSong();
    }

    if (audio instanceof HTMLAudioElement) {
      if (audio.paused) {
        audio.play();
        isPlaying = true;
        songDiv.classList.add("song-clicked");
        currentPlayingSongDiv = songDiv;
      } else {
        audio.pause();
        isPlaying = false;
        songDiv.classList.remove("song-clicked");
        currentPlayingSongDiv = null;
      }
    }
  });

  // Event listener for audio to update song duration
  if (audio instanceof HTMLAudioElement) {
    audio.addEventListener("timeupdate", () => {
      const currentTime = audio.currentTime;
      const minutes = Math.floor(currentTime / 60);
      const seconds = Math.floor(currentTime % 60);
      durationElement.textContent = `${minutes}:${
        seconds < 10 ? "0" : ""
      }${seconds}`;
    });

    audio.addEventListener("ended", () => {
      isPlaying = false;
      songDiv.classList.remove("song-clicked");
      currentPlayingSongDiv = null;
    });
  }
});

