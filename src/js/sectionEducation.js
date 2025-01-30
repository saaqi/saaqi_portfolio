// Import Icons
import svgSprite from "../assets/icons.svg"

import 'bootstrap/js/dist/modal.js'
// ".modal-backdrop, .fad, .show, .modal-open"

// Import Styles
import "../styles/draggable.scss"

import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('certificatesContainer')

import certificates from '../data/certificates.json'

// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    'btn-outline-primary': 'btn-outline-light',
    'text-secondary': 'text-warning'
  },
  '.certificatesContainer'
)


const certificatesList = (selectorID) => {
  const certificateList = certificates.map((cr) => {
    const {
      title = '',
      description = '',
      id = '',
      date = '',
      skills = [],
      issuer = []
    } = cr

    // Generate Skills List
    const skillsList = skills.map(skill => `
      <li class="list-group-item">
        <svg style="--icon-fill: var(--bs-body-color)" class="icon ${skill.icon}-icon small">
          <use xlink:href="${svgSprite + '#' + skill.icon}-icon"></use>
        </svg> ${skill.text}
      </li>
    `).join('')

    const issuerList = issuer.map(authority =>
      `<div class="issuer-item">
        <svg class="icon ${authority.toLowerCase().split(" ").join("")}-icon small">
          <use xlink:href="${svgSprite +'#' + authority.toLowerCase().split(" ").join("")}-icon"></use>
        </svg> ${authority}
      </div>`
    ).join(' - ')

    const output =
      `<div class="draggableItem">
        <div class="card certificateCard h-100 shadow-sm">
          <div class="card-body d-flex flex-column h-100">
            <svg class="icon award-icon h2 text-secondary"><use xlink:href="${svgSprite}#award-icon"></use></svg>
            <h3 class="h4 card-title fw-semibold mb-3">${title}</h3>
            <div class="card-subtitle mb-2">
              <svg class="icon award-icon small "><use xlink:href="${svgSprite}#calendar-icon"></use></svg>
              Issued: ${date}
              <div class="d-flex gap-1 my-2">
                <div class="d-flex align-items-center gap-1">
                  <svg class="icon certificate-icon small"><use xlink:href="${svgSprite}#certificate-icon"></use></svg>
                  <span class="me-1">From:</span> ${issuerList}
                </div>
              </div>
            </div>
            <p class="card-text mb-4">${description}</p>
            <div class="fw-semibold mt-auto">Skills Learned:</div>
          </div>
          <ul class="list-group list-group-flush mt-auto">${skillsList}</ul>
          <div class="card-body text-center">
            <svg class="icon certificate-icon small"><use xlink:href="${svgSprite}#certificate-icon"></use></svg>
            Verify Now:
            <a href="https://coursera.org/verify/professional-cert/${id}" title="Verify ${title}" class="text-body fw-medium" target="_blank" rel="noopener noreferrer">
              ${id}
            </a>
          </div>
          <div class="card-footer p-0">
          <a href="https://www.coursera.org/account/accomplishments/certificate/${id}" class="btn btn-outline-primary py-3 rounded-0 rounded-bottom-2 border-0 w-100" title="Download ${title}" target="_blank" rel="noopener noreferrer">
            <svg class="icon download-icon"><use xlink:href="${svgSprite}#download-icon"></use></svg> Certificate
          </a>
          </div>
        </div>
      </div>`.replace(/\s+/g, ' ');
    return output
  })
  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = certificateList.join(""))
}
certificatesList('certificatesContainer')
