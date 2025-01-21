// Usage: import { setDarkMode } from './functions/setDarkMode.js';
export const setDarkMode = () => {
  'use strict'

  const getStoredTheme = () => localStorage.getItem('theme')
  const setStoredTheme = theme => localStorage.setItem('theme', theme)

  const getPreferredTheme = () => {
    const storedTheme = getStoredTheme()
    if (storedTheme) {
      return storedTheme
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }

  const setTheme = theme => {
    if (theme === 'auto') {
      document.documentElement.setAttribute('data-bs-theme', (window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'))
    } else {
      document.documentElement.setAttribute('data-bs-theme', theme)
    }
  }

  setTheme(getPreferredTheme())

  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', () => {
    const storedTheme = getStoredTheme()
    if (storedTheme !== 'light' && storedTheme !== 'dark') {
      setTheme(getPreferredTheme())
    }
  })

  window.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-bs-theme-value]')
      .forEach(toggle => {
        toggle.addEventListener('click', () => {
          const theme = toggle.getAttribute('data-bs-theme-value')
          setStoredTheme(theme)
          setTheme(theme)
        })
      })
  })


  // Dark Mode Switcher
  const htmlElement = document.documentElement;
  const switchElement = document.querySelector('.darkModeSwitcher');
  if (switchElement) {
    const currentTheme = getStoredTheme() || 'light';
    // htmlElement.setAttribute('data-bs-theme', currentTheme);
    switchElement.checked = currentTheme === 'dark'
    switchElement.addEventListener('change', function () {
      if (this.checked) {
        htmlElement.setAttribute('data-bs-theme', 'dark')
        localStorage.setItem('theme', 'dark')
      } else {
        htmlElement.setAttribute('data-bs-theme', 'light')
        localStorage.setItem('theme', 'light')
      }
    })
  }

}