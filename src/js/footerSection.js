// Import the socialMediaLists function from the functions directory
import socialMediaLists from "./functions/socialMediaLists"

// Attach socialMediaLists to 'footer-social-links' with btn style
socialMediaLists('footer-social-links', true)

/* ## Current Year
  --------------------------------------------- */
const yearSelector = document.querySelector(".footer-year");
if (yearSelector) {
  window.addEventListener("load", () => {
    yearSelector.innerHTML = new Date().getFullYear();
  });
}
