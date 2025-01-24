// Import Styles
import "../styles/themeSwitcher.scss"


// Initial Dark Mode Setup ---
const darkModeSetup = (switchSelector, buttonSelector) => {
  'use strict'

  const getPreferredTheme = () => {
    const storedTheme = localStorage.getItem('theme')
    return storedTheme ? storedTheme : (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
  }
  const setTheme = theme => {
    const themeToSet = theme === 'auto' ? (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light') : theme
    document.documentElement.setAttribute('data-bs-theme', themeToSet)
  }
  setTheme(getPreferredTheme())


  const htmlElement = document.documentElement
  const switchElement = document.querySelector(switchSelector)
  const buttonElement = document.querySelector(buttonSelector)
  const isDark = htmlElement.getAttribute('data-bs-theme') === 'dark'
  const isLight = htmlElement.getAttribute('data-bs-theme') === 'light'
  const isAuto = localStorage.getItem('theme') === 'auto'

  // Initial States
  // Setup Dark Mode switch state
  if (isDark) {
    if (switchElement) {
      switchElement.checked = true
      switchElement.setAttribute('checked', 'checked')
      switchElement.setAttribute('aria-checked', 'true')
    }
    buttonElement && buttonElement.classList.remove('active')
  }
  // Setup Light Mode swithc state
  else if (isLight) {
    if (switchElement) {
      switchElement.checked = false
      switchElement.removeAttribute('checked')
      switchElement.setAttribute('aria-checked', 'false')
    }
    buttonElement && buttonElement.classList.remove('active')
  }
  // Setup Auto Mode Button Initial State
  isAuto && buttonElement && buttonElement.classList.add('active')


  // Change States based on user input
  if (buttonElement) {
    buttonElement.addEventListener('click', function () {
      const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
      localStorage.setItem('theme', 'auto')
      htmlElement.setAttribute('data-bs-theme', theme)
      buttonElement.classList.add('active')
      switchElement && (switchElement.checked = theme === 'dark')
    })
  }
  if (switchElement) {
    switchElement.addEventListener('change', function () {
      const theme = this.checked ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
      htmlElement.setAttribute('data-bs-theme', theme)
      this.setAttribute('aria-checked', this.checked)
      this.checked ? this.setAttribute('checked', 'checked') : this.removeAttribute('checked')
      buttonElement && buttonElement.classList.remove('active')
    })
  }
}


darkModeSetup('.darkModeSwitcher', '.autoModeButton')
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  darkModeSetup('.darkModeSwitcher', '.autoModeButton')
})
