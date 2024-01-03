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

//! 2 .singles section
// Single El double m
const singleObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("single-show");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElementsSingle = document.querySelectorAll(".single-hidden");
hiddenElementsSingle.forEach((el) => singleObserver.observe(el));

// Single others musicians
const singleObserverOthers = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("single-show-others");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenElementsSingleOthers = document.querySelectorAll(
  ".single-hidden-others"
);
hiddenElementsSingleOthers.forEach((el) => singleObserverOthers.observe(el));

//! contact us page social links
const socialObserver = new IntersectionObserver((entries, observer) => {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      entry.target.classList.add("social-show-animation");
      observer.unobserve(entry.target);
    }
  });
});

const hiddenSocials = document.querySelectorAll(".social-hidden-animation");
hiddenSocials.forEach((el) => socialObserver.observe(el));

