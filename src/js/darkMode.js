// Import Styles
import "../styles/themeSwitcher.scss"


// Initial Dark Mode Setup ---
const initialTheme = () => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) return storedTheme
    else return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute(
        'data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light')
      )
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }
  setTheme(getPreferredTheme())
}
initialTheme()
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  initialTheme()
})



// Dark Mode Switcher and Auto Button Setups ---
const setDarkMode = (switchSelector, buttonSelector) => {
  const htmlElement = document.documentElement
  const switchElement = document.querySelector(switchSelector)
  const buttonElement = document.querySelector(buttonSelector)
  const isDark = htmlElement.getAttribute('data-bs-theme') === 'dark'
  const isLight = htmlElement.getAttribute('data-bs-theme') === 'light'
  const isAuto = localStorage.getItem('theme') === 'auto'

  const initialState = () => {
    if (isDark && switchElement && buttonElement) {
      switchElement.checked = true
      switchElement.setAttribute('checked', 'checked')
      switchElement.setAttribute('aria-checked', 'true')
      buttonElement.classList.remove('active')
    } else if (isLight && switchElement && buttonElement) {
      switchElement.checked = false
      switchElement.removeAttribute('checked')
      switchElement.setAttribute('aria-checked', 'false')
      buttonElement.classList.remove('active')
    }
    if (isAuto && buttonElement) buttonElement.classList.add('active')
  }
  initialState()


  const changeStates = () => {
    // Auto Mode Button
    if (buttonElement) {
      buttonElement.addEventListener('click', function () {
        const theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
        localStorage.setItem('theme', 'auto')
        htmlElement.setAttribute('data-bs-theme', theme)
        buttonElement.classList.add('active')
        if (switchElement) switchElement.checked = theme === 'dark'
      })
    }
    if (switchElement) {
      switchElement.addEventListener('change', function () {
        const theme = this.checked ? 'dark' : 'light'
        localStorage.setItem('theme', theme)
        htmlElement.setAttribute('data-bs-theme', theme)
        this.setAttribute('aria-checked', this.checked)
        this.checked ? this.setAttribute('checked', 'checked') : this.removeAttribute('checked')
        buttonElement.classList.remove('active')
      })
    }
  }
  changeStates()
}
setDarkMode('.darkModeSwitcher', '.autoModeButton')
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  setDarkMode('.darkModeSwitcher', '.autoModeButton')
})
