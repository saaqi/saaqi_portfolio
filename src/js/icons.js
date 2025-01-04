import icons from '../data/icons.json'

const iconsList = () => {
  const indIcons = icons.map(ic => {
    const {
      title = '',
      paths = [],
      path = '',
      path2 = '',
      viewbox = '0 0 512 512',
      colorpath = 'currentColor',
      colorpath2 = 'currentColor',
    } = ic

    // Handle dynamic paths (if provided)
    const pathsHTML = paths.map(p =>
      `<path fill="var(--icon-fill, ${p.fill || 'currentColor'})" fill-rule="evenodd" d="${p.d}" />`
    ).join('')

    // Fallback to single or dual path rendering if no "paths" array is defined
    const fallbackHTML = `
      <path fill="var(--icon-fill, ${colorpath})" fill-rule="evenodd" d="${path}" />
      ${path2 ? `<path fill="${colorpath2}" fill-rule="evenodd" d="${path2}" />` : ''}
    `

    // Render either pathsHTML or fallbackHTML
    const output = `
      <symbol id="${title}" viewBox="${viewbox}">
        ${pathsHTML || fallbackHTML}
      </symbol>
    `

    return output
  })

  // Insert icons into the container
  const iconsContainer = document.getElementById('svgSprites')
  if (iconsContainer) iconsContainer.innerHTML = indIcons.join("")
}

iconsList()
