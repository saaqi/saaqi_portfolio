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
window.addEventListener("load", navbarlinksActive);
document.addEventListener("scroll", navbarlinksActive);

/**
 * Mobile Navigation Setup
 */
const body = document.querySelector("body");
const toggleButton = document.querySelector(".mobile-nav-toggle");
const toggleButtonIcon = document.querySelector(".mobile-nav-toggle i");

// Mobile nav toggle button
toggleButton.addEventListener("click", () => {
  body.classList.toggle("mobile-nav-active");
  toggleButtonIcon.classList.toggle("bx-x");
});

//Hide navigation on clicking elements
const closerLinks = document.querySelectorAll("main, .scrollto");
closerLinks.forEach((close) => {
  close.addEventListener("click", () => {
    if (body.classList.contains("mobile-nav-active")) {
      body.classList.remove("mobile-nav-active");
      toggleButtonIcon.classList.remove("bx-x");
    }
  });
});

/**
 * Scroll with ofset on page load with hash links in the url
 */
window.addEventListener("load", () => {
  if (window.location.hash) {
    if (select(window.location.hash)) {
      scrollto(window.location.hash);
    }
  }
});

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
