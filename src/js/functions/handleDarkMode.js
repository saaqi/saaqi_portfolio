export const handleDarkMode = (classReplacements, parentSelector = null) => {
  document.addEventListener("DOMContentLoaded", () => {
    // Function to update classes based on the theme
    const updateClassesForTheme = () => {
      const isDarkTheme = document.documentElement.getAttribute("data-bs-theme") === "dark"

      // Get all containers if a parentSelector is provided, otherwise use the document
      const containers = parentSelector ? document.querySelectorAll(parentSelector) : [document]

      containers.forEach((container) => {
        // Iterate over the class replacements
        for (const [originalClass, newClass] of Object.entries(classReplacements)) {
          // Select elements with the original or new class within the container
          const elements = container.querySelectorAll(`.${originalClass}, .${newClass}`)

          // Replace or revert the classes based on the current theme
          elements.forEach((element) => {
            if (isDarkTheme) {
              element.classList.remove(originalClass)
              element.classList.add(newClass)
            } else {
              element.classList.remove(newClass)
              element.classList.add(originalClass)
            }
          })
        }
      })
    }

    // Run the function initially to handle the current theme
    updateClassesForTheme()

    // Observe changes to the `data-bs-theme` attribute
    const observer = new MutationObserver(() => { updateClassesForTheme() })
    observer.observe(document.documentElement, {
      attributes: true, // Observe attribute changes
      attributeFilter: ["data-bs-theme"], // Only watch `data-bs-theme`
    })
  })
}