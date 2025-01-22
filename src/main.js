/* ## Import Styles
--------------------------------------------- */
import "./main.scss"


/* ## Import JS
--------------------------------------------- */
// import "./js/icons" // Using External SVG Sprite for better browser cache

// Dark Mode Setup
import { setDarkMode } from './js/functions/handleDarkMode'
setDarkMode('.darkModeSwitcher', '.autoModeButton')
// Update switch states
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  setDarkMode('.darkModeSwitcher', '.autoModeButton')
})

import "./js/navigation"
import "./js/updateTitles"

import "./js/sectionHero"
import "./js/sectionAbout"
import "./js/sectionServices"
import "./js/sectionPortfolio"
import "./js/sectionEducation"
import "./js/sectionContact"
import "./js/sectionFooter"

import "./js/hidePreloader"
