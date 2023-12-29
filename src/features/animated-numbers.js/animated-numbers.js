//animated numbers for about page with quantity of stats

//! albums
const quantityAlbums = document.getElementById("quantity-albums");
const targetAlbums = 14;
let currentAlbums = 0;
let animatedTextAlbums;

//ALBUM function that its starting if is visible on user screen , it starts if shows 50% of their content
function startAnimation(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animatedTextAlbums = setInterval(() => {
        if (currentAlbums < targetAlbums) {
          quantityAlbums.innerText = ++currentAlbums;
        } else {
          clearInterval(animatedTextAlbums);
        }
      }, 100);
    } else {
      clearInterval(animatedTextAlbums);
    }
  });
}

// 50% of element must be visible to start animation
const options = {
  threshold: 0.5,
};

const observer = new IntersectionObserver(startAnimation, options);

// start to observe element
observer.observe(quantityAlbums);

//!singles
const quantitySingle = document.getElementById("quantity-singles");
const targetSingles = 30;
let currentSingles = 0;
let animatedTextSingles;

//Singles function that its starting if is visible on user screen , it starts if shows 50% of their content

function startAnimationSingles(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animatedTextSingles = setInterval(() => {
        if (currentSingles < targetSingles) {
          quantitySingle.innerText = ++currentSingles;
        } else {
          clearTimeout(animatedTextSingles);
        }
      }, 100);
    } else {
      clearInterval(animatedTextSingles);
    }
  });
}
// 50% of element must be visible to start animation
const optionsSingles = {
  threshold: 0.5,
};

const observerSingles = new IntersectionObserver(
  startAnimationSingles,
  optionsSingles
);
// start to observe element
observerSingles.observe(quantitySingle);

//!musicians
const quantityMusicians = document.getElementById("quantity-musicians");
const targetMusicians = 4;
let currentMusicians = 0;
let animatedTextMusicians;

//Singles function that its starting if is visible on user screen , it starts if shows 50% of their content

function startAnimationMusicians(entries) {
  entries.forEach((entry) => {
    if (entry.isIntersecting) {
      animatedTextMusicians = setInterval(() => {
        if (currentMusicians < targetMusicians) {
          quantityMusicians.innerText = ++currentMusicians;
        } else {
          clearTimeout(animatedTextMusicians);
        }
      }, 300);
    } else {
      clearInterval(animatedTextMusicians);
    }
  });
}
// 50% of element must be visible to start animation
const optionsMusicians = {
  threshold: 0.5,
};

const observerMusicians = new IntersectionObserver(
  startAnimationMusicians,
  optionsMusicians
);
// start to observe element
observerMusicians.observe(quantityMusicians);
