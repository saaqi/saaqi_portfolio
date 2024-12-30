import icons from '../data/icons.json'

const iconsList = () => {
  const indIcons = icons.map(ic => {
    const {
      title = '',
      path = '',
      path2 = '',
      viewbox = '0 0 512 512'
    } = ic

    const output =
      `<symbol id="${title}" viewBox="${viewbox}">
        <path fill="currentColor" fill-rule="evenodd" d="${path}" />
        ${path2 ? `<path fill="currentColor" fill-rule="evenodd" d="${path2}" />` : ''}
      </symbol>`

    return output

  })
  const iconsContainer = document.getElementById('svgSprites')
  if (iconsContainer) iconsContainer.innerHTML = indIcons.join("")
}

iconsList()