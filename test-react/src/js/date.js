/* ## Current Year
--------------------------------------------- */
export function date() {
  const yearSelector = document.querySelector(".footer-year");
  if (yearSelector) {
    window.addEventListener("load", () => {
      yearSelector.innerHTML = new Date().getFullYear();
    });
  }
}
