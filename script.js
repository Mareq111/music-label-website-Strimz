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

//! 4 dynamic add song-duration for any song
//! 5 dynamic sum all songs duration into stats for whole album duration

const songDurations = document.querySelectorAll(".song-duration");
let totalDurationInSeconds = 0;

const formatTime = (seconds) => {
  // format loeadmetadata which was with seconds to minutes now
  const minutes = Math.floor(seconds / 60);
  const remainingSeconds = Math.floor(seconds % 60);
  // format time 'minutes : seconds ' and if seconds < 10 seconds add 0 before seconds
  const formattedTime = `${minutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
  return formattedTime;
};

// listening starts if dom is loaded , site is reload or load
window.addEventListener("DOMContentLoaded", (event) => {
  const audioElements = document.querySelectorAll(".audio-song");

  audioElements.forEach((audio) => {
    // listener loadmetadata for any audio song to find audio duration every song
    audio.addEventListener("loadedmetadata", () => {
      const duration = audio.duration;
      //
      const formattedDuration = formatTime(duration);
      // finding a song duration which represents duration  in his 'parent' =  audio-song
      const songDurationElement =
        audio.parentElement.querySelector(".song-duration");
      if (songDurationElement) {
        songDurationElement.textContent = formattedDuration;
        updateTotalDuration();
      }
    });
  });
  //
  const updateTotalDuration = () => {
    totalDurationInSeconds = 0;
    // Extracts song durations from metadata (separated into minutes and seconds) to convert the total duration in seconds
    songDurations.forEach((song) => {
      const time = song.textContent.split(":");
      const min = parseInt(time[0]);
      const sec = parseInt(time[1]);
      totalDurationInSeconds += min * 60 + sec;
    });

    // convert and round duration for minutes:seconds and display total time for any album
    const totalMin = Math.floor(totalDurationInSeconds / 60);
    const totalSec = Math.floor(totalDurationInSeconds % 60);

    const displayAllTime =
      totalMin === 1
        ? `${totalMin} minute`
        : totalMin < 1
        ? `${totalSec} seconds`
        : `${totalMin} minutes`;

    const allSongsDuration = document.getElementById("all-songs-duration");
    allSongsDuration.textContent = displayAllTime;
  };
});

//! 6 dynamic sum quantity of tracks in any album

const anySong = document.querySelectorAll(".song");
const showQuantity = document.getElementById("all-songs-quantity");
const allAnySongs = anySong.length;

showQuantity.textContent =
  allAnySongs === 1 ? `${allAnySongs} song` : `${allAnySongs} songs`;

//! 7 when you click on the visible dots, the visibility of the information changes
//! 8 heart click which added song to favorite in any song
//const songs = document.querySelectorAll(".song"); was declared

songs.forEach((song) => {
  const visibleInfoDiv = song.querySelector(".visible-info");
  const visibleDots = song.querySelector(".btn-3-dots-visible");
  const hiddenInfoDiv = song.querySelector(".hidden-info");
  const hiddenDots = song.querySelector(".btn-3-dots-hidden");
  const heartInSong = song.querySelectorAll(".heart-btn-in-song");

  //console.log(visibleInfoDiv, visibleDots, hiddenInfoDiv, hiddenDots, heartInSong);

  if (visibleInfoDiv) {
    heartInSong.forEach((heart) => {
      heart.addEventListener("click", (event) => {
        heart.classList.toggle("is-red");
        //if heart is clicked, it won't trigger whole song div
        event.stopPropagation();
      });
    });
    //firstly visible dots
    visibleDots.addEventListener("click", () => {
      hiddenInfoDiv.classList.remove("hidden-info");
      hiddenInfoDiv.classList.add("visible-info");
      visibleInfoDiv.classList.remove("visible-info");
      visibleInfoDiv.classList.add("hidden-info");

      //simulation click after click visible dots, duartion = 10 seconds
      setTimeout(() => {
        hiddenDots.click();
      }, 10000);
    });

    // if VISIBLE dots is clicked, it won't trigger the click for the entire song div
    visibleDots.addEventListener("click", (event) => {
      event.stopPropagation();
    });

    //hidden dots, active when visible dots was clicked
    hiddenDots.addEventListener("click", () => {
      hiddenInfoDiv.classList.remove("visible-info");
      hiddenInfoDiv.classList.add("hidden-info");
      visibleInfoDiv.classList.remove("hidden-info");
      visibleInfoDiv.classList.add("visible-info");
    });

    // if HIDDEN dots is clicked, it won't trigger the click for the entire song div
    hiddenDots.addEventListener("click", (event) => {
      event.stopPropagation();
    });
  }
});

//9 clicking  arrow link enables returning to the previous site that referred to the current page
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
