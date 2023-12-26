// 1 feature
//!this function uses the Intersection Observer to give class to things when they appear in the browser window while scrolling
//! it only happens once for everything on the page.

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("album-show");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElements = document.querySelectorAll(".album-hidden");
hiddenElements.forEach((el) => observer.observe(el));

//other musician albums

const observerOthers = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("album-show-others");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElementsOthers = document.querySelectorAll(".album-hidden-others");
hiddenElementsOthers.forEach((el) => observerOthers.observe(el));
