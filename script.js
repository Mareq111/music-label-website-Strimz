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
//dziala idealnie wszystko tylko jest 0: 00 w song duration i cos nie dziala

const songs = document.querySelectorAll(".song");
const audioElements = document.querySelectorAll(".audio-song");
const bigPlayBtn = document.getElementById("playBtn");
let isPlaying = false;
let currentSongIndex = 0;
let currentPlayingSongDiv = null;
let isSequentialPlaying = false;

function playSong(index) {
  if (currentSongIndex === index && isPlaying) {
    stopCurrentSong();
    isPlaying = false;
  } else {
    stopCurrentSong();
    currentSongIndex = index;
    const audio = audioElements[currentSongIndex];
    const songDiv = songs[currentSongIndex];
    const durationElement = songDiv.querySelector(".song-duration");

    if (audio instanceof HTMLAudioElement) {
      audio.play();
      isPlaying = true;
      songDiv.classList.add("song-clicked");
      currentPlayingSongDiv = songDiv;

      audio.addEventListener("timeupdate", () => {
        const currentTime = audio.currentTime;
        const minutes = Math.floor(currentTime / 60);
        const seconds = Math.floor(currentTime % 60);
        durationElement.textContent = `${minutes}:${
          seconds < 10 ? "0" : ""
        }${seconds}`;
      });

      audio.onended = () => {
        isPlaying = false;
        songDiv.classList.remove("song-clicked");
        currentPlayingSongDiv = null;
        if (isSequentialPlaying) {
          currentSongIndex++;
          if (currentSongIndex < songs.length) {
            playSong(currentSongIndex);
          } else {
            isSequentialPlaying = false;
            currentSongIndex = 0;
            bigPlayBtn.classList.add("ended-play");
            bigPlayBtn.addEventListener("click", () => {
              bigPlayBtn.classList.remove("ended-play");
            });
          }
        }
      };
    }
  }
}

function stopCurrentSong() {
  if (currentPlayingSongDiv) {
    const index = Array.from(songs).indexOf(currentPlayingSongDiv);
    const audio = audioElements[index];
    if (audio instanceof HTMLAudioElement) {
      audio.pause();
      /* audio.currentTime = 0; */
      isPlaying = false;
      currentPlayingSongDiv.classList.remove("song-clicked");
      currentPlayingSongDiv = null;
    }
  }
}

songs.forEach((songDiv, index) => {
  songDiv.addEventListener("click", () => {
    if (!isSequentialPlaying) {
      playSong(index);
    } else {
      isSequentialPlaying = false;
      playSong(index);
    }
  });
});

bigPlayBtn.addEventListener("click", () => {
  isSequentialPlaying = true;
  currentSongIndex = 0;
  playSong(currentSongIndex);
});

//! 4 sum all songs duration into stats for whole album duration

const allSongsDuration = document.getElementById("all-songs-duration");
const songDurations = document.querySelectorAll(".song-duration");
let totalDurationInSeconds = 0;

songDurations.forEach((song) => {
  const time = song.textContent.split(":");
  const min = parseInt(time[0]);
  const sec = parseInt(time[1]);
  totalDurationInSeconds += min * 60 + sec;
});

const totalMin = Math.floor(totalDurationInSeconds / 60);
const totalSec = Math.floor(totalDurationInSeconds % 60);

const displayAllTime =
  totalMin < 1 ? `${totalSec} seconds` : `${totalMin} minutes`;

allSongsDuration.textContent = displayAllTime;
