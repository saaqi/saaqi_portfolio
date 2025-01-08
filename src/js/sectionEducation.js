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
      id = '',
      date = '',
      skills = []
    } = cr

    // Generate Skills List
    const skillsList = skills.map(skill => `
      <li class="list-group-item">
        <svg class="icon skill-icon small">
          <use href="#skill-icon"></use>
        </svg> ${skill}
      </li>
    `).join('')

    const output =
      `<div class="certificate-item">
        <div class="card certificate-card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <svg class="icon award-icon h2"><use href="#award-icon"></use></svg>
            <h3 class="h5 card-title mb-2">${title}</h3>
            <div class="card-subtitle mb-2 text-body-secondary">
              <svg class="icon award-icon small">
                <use href="#calendar-icon"></use>
              </svg> ${date}
            </div>
            <p class="card-text">${description}</p>
            <div class="fw-bolder mt-auto">Skills Learned:</div>
          </div>
          <ul class="list-group list-group-flush">${skillsList}</ul>
          <div class="card-footer d-flex gap-2 align-items-center">
            <svg class="icon certificate-icon small"><use href="#certificate-icon"></use></svg>
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
