/**
 * Navbar links active state on scroll
 */
const navbarlinks = document.querySelectorAll("#navbar .scrollto");
const navbarlinksActive = () => {
  let position = window.scrollY + 200;
  navbarlinks.forEach((navbarlink) => {
    if (!navbarlink.hash) return;
    let section = document.querySelector(navbarlink.hash);
    if (!section) return;
    if (
      position >= section.offsetTop &&
      position <= section.offsetTop + section.offsetHeight
    ) {
      navbarlink.classList.add("active");
    } else {
      navbarlink.classList.remove("active");
    }
  });
};
if (navbarlinksActive) {
  window.addEventListener("load", navbarlinksActive);
  document.addEventListener("scroll", navbarlinksActive);
}

/**
 * Mobile Navigation Setup
 */
const body = document.querySelector("body");
const toggleButton = document.querySelector(".mobile-nav-toggle");
const toggleButtonIcon = document.querySelector(".mobile-nav-toggle i");

// Mobile nav toggle button
if (toggleButton) {
toggleButton.addEventListener("click", () => {
    body.classList.toggle("mobile-nav-active");
    toggleButtonIcon.classList.toggle("bx-x");
  });
}

//Hide navigation on clicking elements
const closerLinks = document.querySelectorAll("main, .scrollto");
if (closerLinks) {
closerLinks.forEach((close) => {
    close.addEventListener("click", () => {
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");
        toggleButtonIcon.classList.remove("bx-x");
      }
    });
  });
}


//Hide navigation on swiping left
let min_horizontal_move = 30;
// let max_vertical_move = 30;
let within_ms = 1000;

let start_xPos;
// let start_yPos;
let start_time;
function touch_start(event) {
  start_xPos = event.touches[0].pageX;
  // start_yPos = event.touches[0].pageY;
  start_time = new Date();
}

function touch_end(event) {
  let end_xPos = event.changedTouches[0].pageX;
  // let end_yPos = event.changedTouches[0].pageY;
  let end_time = new Date();
  let move_x = end_xPos - start_xPos;
  // let move_y = end_yPos - start_yPos;
  let elapsed_time = end_time - start_time;
  if (
    Math.abs(move_x) > min_horizontal_move &&
    // Math.abs(move_y) < max_vertical_move &&
    elapsed_time < within_ms
  ) {
    if (move_x < 0) {
      body.classList.remove("mobile-nav-active");
      toggleButtonIcon.classList.remove("bx-x");
    }
  }
}

const swipeAble = document.getElementById("header");
if (swipeAble) {
  swipeAble.addEventListener("touchstart", touch_start);
  swipeAble.addEventListener("touchend", touch_end);
}


/**
 * Scroll with ofset on page load with hash links in the url
 */
if (window.location.hash) {
window.addEventListener("load", () => {
  const winHash = document.querySelector(window.location.hash)
    if (winHash) {
      document.addEventListener("scroll", winHash);
    }
  });
}
  
/**
 * Link Scrolling to avoid url update hash
 */
// document.querySelectorAll('.scrollto').forEach((anchor) => {
//   anchor.addEventListener("click", function (e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth",
//     });
//   });
// });
