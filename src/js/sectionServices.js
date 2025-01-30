// Import Icons
import svgSprite from "../assets/icons.svg"

import 'bootstrap/js/dist/modal.js'
// ".modal-backdrop, .fad, .show, .modal-open"

// Import Styles
import "../styles/draggable.scss"

import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('servicesContainer')

import services from '../data/services.json'


// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    "btn-outline-primary": "btn-outline-light",
    "btn-outline-secondary": "btn-outline-warning",
  },
  ".servicesContainer .serviceCard"
)
handleDarkMode(
  {
    "btn-outline-danger": "btn-outline-warning"
  },
  ".servicesContainer .modal-footer"
)

const servicesLists = selectorID => {
  const serviceList = services.map((sr, index) => {
    const {
      title = '',
      copy = '',
      more = '',
      icons = []
    } = sr

    // Generate icons HTML by mapping over the icons array
    const iconsHTML = icons.map(icon =>
      `<svg class="icon ${icon}"><use xlink:href="${svgSprite + '#' + icon}"></use></svg>`
    ).join('')

    const output =
      `<div class="draggableItem">
        <div class="card serviceCard h-100 shadow-sm">
          <div class="card-header fs-4 d-flex gap-4">${iconsHTML}</div>
          <div class="card-body d-flex flex-column">
            <h3 class="card-title fw-semibold h4 mb-3">${title}</h3>
            <p class="card-text">${copy}</p>
          </div>
          <div class="card-footer">
            <div class="btn-group w-100">
            <a href="#contact" class="btn btn-outline-secondary w-50 btn-icon d-flex align-items-center justify-content-center gap-1 scrollto" title="Hire Me!">
              <svg class="icon handshake-icon"><use xlink:href="${svgSprite}#handshake-icon"></use></svg> Hire Me!
            </a>
            ${more &&
            `<button type="button" class="btn btn-outline-primary w-50 btn-icon d-flex align-items-center justify-content-center gap-1" data-bs-toggle="modal" data-bs-target="#${`service-` + index}" title="Get More Info">
              <svg class="icon content-icon"><use xlink:href="${svgSprite}#content-icon"></use></svg> Info
            </button>`}
            </div>
          </div>
        </div>
        ${more &&
        `<div class="modal fade" id="${`service-` + index}" tabindex="-1" aria-labelledby="${`label-service-` + index}" aria-hidden="true">
          <div class="modal-dialog modal-xl modal-dialog-centered modal-dialog-scrollable">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title fs-5" id="${`label-service-` + index}">${title}</div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body">${more}</div>
              <div class="modal-footer py-1">
                <button type="button" class="btn btn-outline-danger py-2 px-3 d-flex align-items-center" data-bs-dismiss="modal">
                  <svg class="icon close-icon fs-4"><use xlink:href="${svgSprite}#close-icon"></use></svg> Close
                </button>
              </div>
            </div>
          </div>
        </div>`}
      </div>`.replace(/\s+/g, ' ');

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = serviceList.join(""))
}
servicesLists('servicesContainer')