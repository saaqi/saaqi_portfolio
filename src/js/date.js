/* ## Current Year
  --------------------------------------------- */
const yearSelector = document.querySelector(".footer-year");
if (yearSelector) {
  window.addEventListener("load", () => {
    yearSelector.innerHTML = new Date().getFullYear();
  });
}
