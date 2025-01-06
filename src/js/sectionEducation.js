// Import Styles
import "../styles/sectionEducation.scss"

import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('certificates-container')

import certificates from '../data/certificates.json'
const certificatesList = (selectorID) => {
  const certificateList = certificates.map((cr) => {
    const {
      title = '',
      description = '',
      id = ''
    } = cr

    const output =
      `<div class="certificate-item">
        <div class="card certificate-card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <svg class="icon award-icon h2">
              <use href="#award-icon"></use>
            </svg>
            <h3 class="h4 card-title">
              ${title}
            </h3>
            <p class="card-text">${description}</p>
          </div>
          <div class="card-footer d-flex gap-2 align-items-center">
            <svg class="icon certificate-icon">
              <use href="#certificate-icon"></use>
            </svg>
            Verify :
            <a href="https://coursera.org/verify/professional-cert/${id}" class="text-decoration-underline" target="_blank" rel="noopener noreferrer" title="Verify ${title} Certificate">${id}</a>
          </div>
        </div>
      </div>`
    return output
  })
  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = certificateList.join(""))
}
certificatesList('certificates-container')
