// Import Styles
import "../styles/themeSwitcher.scss"

// Setup DarkMode Settings
const setDarkMode = (switchSelector, buttonSelector) => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) return storedTheme
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
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

  // Initial Dark Mode Setup ---
  setDarkMode('.darkModeSwitcher', '.autoModeButton')
  // Update switch states ---
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    setDarkMode('.darkModeSwitcher', '.autoModeButton')
  })








  // Dark Mode Switcher
  const htmlElement = document.documentElement

  // Dark Mode Switch
  const switchElement = document.querySelector(switchSelector)
  const isDarkMode = htmlElement.getAttribute('data-bs-theme') === 'dark'
  const updateSwitchAttributes = (isChecked) => {
    if (isChecked) {
      switchElement.checked = true
      switchElement.setAttribute('checked', 'checked')
      switchElement.setAttribute('aria-checked', 'true')
    } else {
      switchElement.checked = false
      switchElement.removeAttribute('checked')
      switchElement.setAttribute('aria-checked', 'false')
    }
  }
  updateSwitchAttributes(isDarkMode)

  const initializeSwitch = () => {
    if (switchElement) {
      switchElement.addEventListener('change', function() {
        const theme = this.checked ? 'dark' : 'light'
        htmlElement.setAttribute('data-bs-theme', theme)
        setStoredTheme(theme)
        updateSwitchAttributes(this.checked)
        if (buttonElement) {
          updateButtonClasses()
          buttonElement.classList.remove('active')
        }
      })
    }
  }
  initializeSwitch()





  // Auto Mode Button
  const buttonElement = document.querySelector(buttonSelector)
  const themeSet = getStoredTheme() === 'auto' ? true : false
  const updateButtonClasses = () => {
    themeSet ? buttonElement.classList.add('active') : buttonElement.classList.remove('active')
  }

  const deviceTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  const initializeButton = () => {
    if (buttonElement) {
      updateButtonClasses()
      buttonElement.addEventListener('click', () => {
        if (switchElement) {
          deviceTheme === 'dark' ? switchElement.checked = true : switchElement.checked = false
        }
        setStoredTheme('auto')
        htmlElement.setAttribute('data-bs-theme', `${deviceTheme === 'dark' ? 'dark' : 'light'}`)
        updateButtonClasses()
        buttonElement.classList.add('active')
      })
    }
  }
  initializeButton()
}
