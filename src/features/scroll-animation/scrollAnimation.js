//!this function uses the Intersection Observer to give class to things when they appear in the browser window while scrolling
//! it only happens once for everything on the page.

//1. for albums - el double m on home page
let observerExecuted = false;

const observer = new IntersectionObserver(
  (entries) => {
    if (!observerExecuted) {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("album-show");
          observerExecuted = true;
        }
      });
    }
  },
  { once: true }
);

const hiddenElements = document.querySelectorAll(".album-hidden");
//observe all hidden elements
hiddenElements.forEach((el) => observer.observe(el));

//2. for albums - others musicians on home page

let observerExecutedOthers = false;

const observerOthers = new IntersectionObserver(
  (entries) => {
    if (!observerExecutedOthers) {
      entries.forEach((entry) => {
        console.log(entry);
        if (entry.isIntersecting) {
          entry.target.classList.add("album-show-others");
          observerExecutedOthers = true;
        }
      });
    }
  },
  { once: true }
);

const hiddenElementsOthers = document.querySelectorAll(".album-hidden-others");
//observe all hidden elements
hiddenElementsOthers.forEach((el) => observerOthers.observe(el));
