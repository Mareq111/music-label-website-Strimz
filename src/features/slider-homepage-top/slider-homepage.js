//slider into homepage

document.addEventListener("DOMContentLoaded", function () {
  const slides = document.querySelectorAll(".section-0-slider > div");
  let currentSlide = 0;

  function showSlide(index) {
    // hide all sliders
    for (let i = 0; i < slides.length; i++) {
      slides[i].classList.remove("slider-active");
      slides[i].classList.add("slider-hidden");
    }

    // show current slider
    slides[index].classList.remove("slider-hidden");
    slides[index].classList.add("slider-active");
  }

  function nextSlide() {
    showSlide(currentSlide);
    currentSlide = (currentSlide + 1) % slides.length;
  }

  //next slider per 4seconds
  setInterval(nextSlide, 4000);
});