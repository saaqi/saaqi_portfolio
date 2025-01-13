import icons from '../data/icons.json'

const iconsList = () => {
  const indIcons = icons.map(ic => {
    const {
      title = '',
      paths = [],
      viewbox = '0 0 512 512'
    } = ic

    // Handle dynamic paths (if provided)
    const pathsHTML = paths.map(p =>
      `<path fill="var(--icon-fill, ${p.fill || 'currentColor'})" fill-rule="evenodd" d="${p.d}" />`
    ).join("")

    // Render either pathsHTML or fallbackHTML
    return `<symbol id="${title}-icon" viewBox="${viewbox}">${pathsHTML}</symbol>`
  })

  // Insert icons into the container
  const iconsContainer = document.getElementById('svgSprites')
  if (iconsContainer) iconsContainer.innerHTML = indIcons.join("")
}

iconsList()
