// Import Styles -
import "../styles/navigation.scss"
import svgSprite from "../assets/icons.svg"

import navigationLinks from '../data/navigationLinks.json'

// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    'btn-outline-primary': 'btn-outline-warning',
    'border-primary-subtle': 'border-warning-subtle'
  },
  ".header"
)


const navLinksInsert = () => {
  const navLinks = navigationLinks.map(ln => {
    const {
      link = '',
      text = '',
      icon = ''
    } = ln

    const output =
      `<li>
        <a href="${link}" class="link-nav btn btn-outline-primary border-primary-subtle shadow-sm scrollto" title="${text}">
          <svg class="icon ${icon}"><use xlink:href="${svgSprite+'#'+icon}"></use></svg>
          <span class="text-nav">${text}</span>
        </a>
      </li>`.replace(/\s+/g, ' ');

    return output

  })
  const mainNavContainer = document.getElementById('mainNavigation')
  if (mainNavContainer) mainNavContainer.innerHTML = navLinks.join("")
}
navLinksInsert()

// Setup Scroll Spy
document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('#navbar .scrollto');
  function highlightNavLink() {
    let scrollPosition = window.scrollY;

    sections.forEach(section => {
      const top = section.offsetTop - 0;
      const bottom = top + section.offsetHeight;

      if (scrollPosition >= top && scrollPosition < bottom) {
        const id = section.getAttribute('id');
        navLinks.forEach(link => {
          if (link.getAttribute('href').slice(1) === id) {
            link.classList.add('active');
          } else {
            link.classList.remove('active');
          }
        });
      }
    });
  }
  window.addEventListener('load', highlightNavLink);
  window.addEventListener('scroll', highlightNavLink);
  window.addEventListener('resize', highlightNavLink);
});

/**
 * Mobile Navigation Setup
 */
const body = document.querySelector("body");
const toggleButton = document.querySelector(".mobile-nav-toggle")
const toggleButtonIcon = document.querySelector(".mobile-nav-toggle svg.icon use")
const toggleNavVisibility = document.querySelector(".navbar")

// Mobile nav toggle button
if (toggleButton) {
  toggleButton.addEventListener("click", () => {
    body.classList.toggle("mobile-nav-active")
    toggleNavVisibility.classList.toggle("nav-visibility")
    if (body.classList.contains('mobile-nav-active')) {
      toggleButtonIcon.setAttribute('href', svgSprite+'#close-icon')
    } else {
      toggleButtonIcon.setAttribute('href', svgSprite+'#menu-icon')
    }
  })
}

//Hide navigation on clicking elements
const closerLinks = document.querySelectorAll("main, .scrollto")
if (closerLinks) {
  closerLinks.forEach((close) => {
    close.addEventListener("click", () => {
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active")
        toggleNavVisibility.classList.add("nav-visibility")
        toggleButtonIcon.setAttribute('href', svgSprite+'#menu-icon')
      }
    })
  })
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
      body.classList.remove("mobile-nav-active")
      toggleNavVisibility.classList.add("nav-visibility")
      toggleButtonIcon.setAttribute('href', svgSprite+'#menu-icon')
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
