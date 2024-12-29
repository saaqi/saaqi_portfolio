import icons from '../data/icons.json'

const iconsList = () => {
  const indIcons = icons.map(ic => {
    const {
      title = '',
      path = '',
      viewbox = '0 0 512 512'
    } = ic

    const output =
      `<symbol xmlns="http://www.w3.org/2000/svg" viewBox="${viewbox}" id="${title}">
        <path fill="currentColor" d="${path}" />
      </symbol>`

    return output

  })
  const iconsContainer = document.getElementById('svgSprites')
  if (iconsContainer) iconsContainer.innerHTML = indIcons.join("")
}

iconsList()