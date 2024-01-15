//slider into homepage

document.addEventListener("DOMContentLoaded", function () {
  //array with any slider id
  const slideIDs = ["slider1", "slider2", "slider3", "slider4"];
  //set start with slide number 0
  let currentSlide = 0;
  let isPaused = false; // initially pause state variable

  // function displays the correct slide by comparing the index with the ID of a single slide whether its the same
  // if are the same add or remove a class
  function showSlide(index) {
    slideIDs.forEach((slideID, i) => {
      const slide = document.getElementById(slideID);
      if (!slide) return;

      if (i === index) {
        slide.classList.add("slider-active");
        slide.classList.remove("slider-hidden");
      } else {
        slide.classList.remove("slider-active");
        slide.classList.add("slider-hidden");
      }
    });
  }

  function nextSlide() {
    //checking that slider isnt in 'pause' mod so show current stopped slide or if its in play mode shows another slider

    if (!isPaused) {
      showSlide(currentSlide);
      // after reaching the last slide thanks to the modulo(%) operation, we return to the first slide
      currentSlide = (currentSlide + 1) % slideIDs.length;
    }
  }

  //next slider per 3.5seconds
  const sliderInterval = setInterval(nextSlide, 3500);

  //!2 toggle play / pause button for slider into home page

  const pausePlayBtns = document.querySelectorAll(".pause-play-div");

  //function that pause or play a slider
  function toggleSlider() {
    const playBtn = this.querySelector(".p-play-info");
    const pauseBtn = this.querySelector(".p-pause-info");

    playBtn?.classList.toggle("hidden-info");
    pauseBtn?.classList.toggle("hidden-info");

    //change state of pause
    isPaused = !isPaused;
  }

  // eventlistener for any pausePlay btn to toggle them

  pausePlayBtns.forEach((pausePlayBtn) => {
    pausePlayBtn.addEventListener("click", toggleSlider);

    //add more accessibility so function to chose pause or play with check by enter
    pausePlayBtn.addEventListener("keydown", (event) => {
      if (event.key === "Enter") {
        toggleSlider.call(pausePlayBtn);
      }
    });
  });

});
