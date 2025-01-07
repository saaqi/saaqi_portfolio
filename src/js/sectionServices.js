// Import Styles
import "../styles/sectionServices.scss"


import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('services-container')

import services from '../data/services.json'

const servicesLists = selectorID => {
  const serviceList = services.map(sr => {
    const {
      title = '',
      copy = '',
      icons = []
    } = sr

    // Generate icons HTML by mapping over the icons array
    const iconsHTML = icons.map(icon => `
      <svg class="icon ${icon}">
        <use href="#${icon}"></use>
      </svg>
    `).join('')

    const output =
      `<div class="services-item col-md-6 col-lg-4">
        <div class="card services-card h-100 shadow-sm">
          <h3 class="card-header fw-bold h6">${title}</h3>
          <div class="card-body d-flex flex-column">
            <p class="card-text">${copy}</p>
          </div>
          ${icons.length > 0 ?
          `<div class="card-footer">
            <div class="fs-4 d-flex gap-4">
              ${iconsHTML}
            </div>
          </div>` : '' }
        </div>
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = serviceList.join(""))
}
servicesLists('services-container')