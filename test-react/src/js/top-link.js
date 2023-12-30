/**
 * Back to top button
 */
export function topLink() {
  const backtotop = document.querySelector(".top-link");
  if (backtotop) {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        backtotop.classList.add("active");
      } else {
        backtotop.classList.remove("active");
      }
    });
  }
}
