// Import Styles
import "../styles/themeSwitcher.scss"


// Initial Dark Mode Setup ---
const darkModeSetup = (switchSelector, buttonSelector) => {
  'use strict'

  const switchElement = document.querySelector(switchSelector)
  const buttonElement = document.querySelector(buttonSelector)
  const htmlElement = document.documentElement
  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'


  !localStorage.getItem('theme') && localStorage.setItem('theme', 'auto')
  const storedTheme = localStorage.getItem('theme')
  const currTheme = storedTheme === 'auto' ? deviceTheme : storedTheme
  htmlElement.setAttribute('data-bs-theme', currTheme)


  // const isLight = htmlElement.getAttribute('data-bs-theme') === 'light'
  const isDark = htmlElement.getAttribute('data-bs-theme') === 'dark'
  const isAuto = localStorage.getItem('theme') === 'auto'

  // Initial States
  if (isDark && switchElement) {
    switchElement.checked = true
    switchElement.setAttribute('checked', 'checked')
  } else if (switchElement) {
    switchElement.checked = false
    switchElement.removeAttribute('checked')
  }
  if (isAuto && buttonElement) {
    buttonElement.classList.add('active')
    buttonElement.setAttribute('aria-pressed', 'true')
  }


  // Change States based on user input
  if (buttonElement) {
    buttonElement.addEventListener('click', function () {
      localStorage.setItem('theme', 'auto')
      htmlElement.setAttribute('data-bs-theme', deviceTheme)
      buttonElement.classList.add('active')
      buttonElement.setAttribute('aria-pressed', 'true')
      switchElement && (switchElement.checked = deviceTheme === 'dark')
    })
  }
  if (switchElement) {
    switchElement.addEventListener('change', function () {
      const theme = this.checked ? 'dark' : 'light'
      localStorage.setItem('theme', theme)
      htmlElement.setAttribute('data-bs-theme', theme)
      this.checked ? this.setAttribute('checked', 'checked') : this.removeAttribute('checked')
      buttonElement && buttonElement.classList.remove('active')
      buttonElement && buttonElement.setAttribute('aria-pressed', 'false')
    })
  }
}


darkModeSetup('.darkModeSwitcher', '.autoModeButton')
window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
  darkModeSetup('.darkModeSwitcher', '.autoModeButton')
})
