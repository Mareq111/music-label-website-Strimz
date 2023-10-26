//!to delete



const myAudio = document.getElementById("myAudio");
const durationContainer = document.getElementById("trackDuration");

myAudio?.addEventListener("timeupdate", () => {
  const totalSeconds = Math.round(myAudio.duration);
  const currentTime = Math.round(myAudio.currentTime);

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  durationContainer.textContent = ` ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds} / ${totalMinutes}:${
    remainingSeconds < 10 ? "0" : ""
  }${remainingSeconds}`;
});

// dziala wmaire piosenka odlicza sie po sekundzie ale bez "/"

const songDiv = document.querySelector(".song");
const audio = document.getElementById("myAudio");
let isPlaying = false;

const durationElement = document.getElementById("trackDuration");

const updateDuration = () => {
  const currentTime = audio.currentTime;
  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);
  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
};

audio.addEventListener("loadedmetadata", () => {
  const duration = audio.duration;
  const minutes = Math.floor(duration / 60);
  const seconds = Math.floor(duration % 60);
  durationElement.textContent = `0:00 / ${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}`;
});

songDiv?.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
  }
});

audio.addEventListener("timeupdate", updateDuration);

// dziala ale nie do konca
const songDiv = document.querySelector(".song");
const audio = document.getElementById("myAudio");

let isPlaying = false;

const durationElement = document.getElementById("trackDuration");

const updateDuration = () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds} / ${totalMinutes}:${totalSeconds < 10 ? "0" : ""}${totalSeconds}`;
};

audio.addEventListener("loadedmetadata", () => {
  const duration = audio.duration;
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);
  durationElement.textContent = `0:00 / ${totalMinutes}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds}`;
});

songDiv?.addEventListener("click", () => {
  if (isPlaying) {
    audio.pause();
    isPlaying = false;
  } else {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
  }
});

audio.addEventListener("timeupdate", updateDuration);

// inny wczesniejsze  chyba do usuniecia //test
/* dziala to 
const myAudio = document.getElementById("myAudio");
  const durationContainer = document.getElementById("trackDuration");

  myAudio?.addEventListener("timeupdate", () => {
    const totalSeconds = Math.round(myAudio.duration);
    const currentTime = Math.round(myAudio.currentTime);

    const minutes = Math.floor(currentTime / 60);
    const seconds = currentTime % 60;

    const totalMinutes = Math.floor(totalSeconds / 60);
    const remainingSeconds = totalSeconds % 60;

    durationContainer.textContent = ` ${minutes}:${seconds < 10 ? '0' : ''}${seconds} / ${totalMinutes}:${remainingSeconds < 10 ? '0' : ''}${remainingSeconds}`;
  }); */

//testing
/* const myAudio = document.getElementById("myAudio");
const durationContainer = document.getElementById("trackDuration");

myAudio?.addEventListener("timeupdate", () => {
  const totalSeconds = Math.round(myAudio.duration);
  const currentTime = Math.round(myAudio.currentTime);

  const minutes = Math.floor(currentTime / 60);
  const seconds = currentTime % 60;

  const totalMinutes = Math.floor(totalSeconds / 60);
  const remainingSeconds = totalSeconds % 60;

  durationElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;

}); */

//! cos dziala ale nie odklikuje i ten kod if chyba nic nie robi

/* const songDiv = document.querySelector(".song");
const audio = document.querySelector(".audio-song")

let isPlaying = false;

songDiv?.addEventListener("click", () => {
  isPlaying
    ? (audio?.pause(), (isPlaying = false))
    : (audio?.play(), (isPlaying = true));

if (isPlaying === true) {
    songDiv.classList.add('song-clicked');
    } else {
      songDiv.classList.remove('song-clicked');
    }
} )


const myAudio = document.getElementById("myAudio");
  const durationElement = document.getElementById("trackDuration");
  myAudio?.addEventListener("loadedmetadata", (event) => {
    const duration = myAudio.duration;

  
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    durationElement.textContent = `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }); */

//! testowa kopia tego powyzej
/* 


  const songDiv = document.querySelector(".song");
const audio = document.querySelector(".audio-song")

let isPlaying = false;

songDiv?.addEventListener("click", () => {
  isPlaying
    ? (audio?.pause(), (isPlaying = false))
    : (audio?.play(), (isPlaying = true));

if (isPlaying === true) {
    songDiv.classList.add('song-clicked');
    } else {
      songDiv.classList.remove('song-clicked');
    }
} )


const myAudio = document.getElementById("myAudio");
  const durationElement = document.getElementById("trackDuration");
  myAudio?.addEventListener("loadedmetadata", (event) => {
    const duration = myAudio.duration;

  
    const minutes = Math.floor(duration / 60);
    const seconds = Math.floor(duration % 60);
    durationElement.textContent = `${minutes }:${seconds < 10 ? '0' : '0'}${seconds} / ${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  });  */

//!najlepszy vol2
//dziala ale nie dziaala hover tego diva i odlicza 0:00 / 0:08 i nie odklikuje
const songDiv = document.querySelector(".song");
const audio = document.getElementById("myAudio");

let isPlaying = false;

const durationElement = document.getElementById("trackDuration");

const updateDuration = () => {
  const currentTime = audio.currentTime;
  const duration = audio.duration;

  const minutes = Math.floor(currentTime / 60);
  const seconds = Math.floor(currentTime % 60);

  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);

  // playback duration / overall duration
  durationElement.textContent = `${minutes}:${
    seconds < 10 ? "0" : ""
  }${seconds}  ${totalMinutes}:${totalSeconds < 10 ? "0" : ""}${totalSeconds}`;
};

audio.addEventListener("loadedmetadata", () => {
  const duration = audio.duration;
  const totalMinutes = Math.floor(duration / 60);
  const totalSeconds = Math.floor(duration % 60);
  durationElement.textContent = `${totalMinutes}:${
    totalSeconds < 10 ? "0" : ""
  }${totalSeconds}`;
});

songDiv?.addEventListener("click", () => {
  if (isPlaying) {
    audio?.pause();
    isPlaying = false;
  } else {
    audio.currentTime = 0;
    audio.play();
    isPlaying = true;
  }
 
  if (isPlaying === true) {
    songDiv.classList.add("song-clicked");
  } else {
    songDiv.classList.remove("song-clicked");
  }
});

audio.addEventListener("timeupdate", updateDuration);


// old code click
//dziala  ale sie nie odklikuje po koncu utworu
const songDiv = document.querySelector(".song");
const audio = document.querySelector(".audio-song")

let isPlaying = false;

songDiv?.addEventListener("click", () => {
  isPlaying
    ? (audio?.pause(), (isPlaying = false))
    : (audio?.play(), (isPlaying = true));



songDiv.classList.toggle("song-clicked");
}); 