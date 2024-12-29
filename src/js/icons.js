import icons from '../data/icons.json'

// const iconsList = () => {
//   icons.map(icon => {
//   }
// }

const iconsList = () => {
  const indIcons = icons.map(ic => {
    const {
      title = '',
      path = ''
    } = ic

    const output =
      `<symbol xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" id="${title}">
        <path fill="currentColor" d="${path}" />
      </symbol>`

    return output

  })
  const iconsContainer = document.getElementById('svgSprites')
  if (iconsContainer) iconsContainer.innerHTML = indIcons.join("")
}

iconsList()