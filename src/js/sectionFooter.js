// Import Styles
import "../styles/sectionFooter.scss"

// Import the socialMediaLists function from the functions directory
import socialMediaLists from "./functions/socialMediaLists"

// Attach socialMediaLists to 'footerSocialLinks' with btn style
socialMediaLists('footerSocialLinks', true, 'warning')

/**
 * Back to top button
 */
const topLink = selector => {
  const backtotop = document.getElementById(selector)
  backtotop && window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      backtotop.classList.add("active")
    } else {
      backtotop.classList.remove("active")
    }
  })
}
topLink("topLink")


/* ## Current Year
  --------------------------------------------- */
const currentYear = selector => {
  const yearSelector = document.getElementById(selector)
  yearSelector && window.addEventListener("load", () => {
    yearSelector.innerHTML = new Date().getFullYear()
  })
}
currentYear("footerYear")
