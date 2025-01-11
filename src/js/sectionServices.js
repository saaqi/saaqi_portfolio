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
          <div class="card-header fs-4 d-flex gap-4">${iconsHTML}</div>
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-semibold h4 mb-3">${title}</h3>
            <p class="card-text mb-3">${copy}</p>
          </div>
          <div class="card-footer">
            <a href="#contact" class="btn btn-sm rounded-pill btn-outline-secondary scrollto" title="Hire Me!">
              <svg class="icon handshake-icon"><use href="#handshake-icon"></use></svg>
              Hire Me!
            </a>
          </div>
        </div>
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = serviceList.join(""))
}
servicesLists('services-container')