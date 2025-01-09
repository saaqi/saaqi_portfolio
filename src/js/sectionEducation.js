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
      skills = [],
      issuer = []
    } = cr

    // Generate Skills List
    const skillsList = skills.map(skill => `
      <li class="list-group-item">
        ${skill}
      </li>
    `).join('')

    const issuerList = issuer.map(authority =>
      `<div class="issuer-item">
        <svg class="icon ${authority.toLowerCase().split(" ").join("")}-icon small">
          <use href="#${authority.toLowerCase().split(" ").join("")}-icon"></use>
        </svg> ${authority}
      </div>`
    ).join(', ')

    const output =
      `<div class="certificate-item">
        <div class="card certificate-card h-100 shadow-sm">
          <div class="card-body d-flex flex-column">
            <svg class="icon award-icon h2"><use href="#award-icon"></use></svg>
            <h3 class="h5 card-title mb-3">${title}</h3>
            <div class="card-subtitle mb-2 text-body-secondary">
              <svg class="icon award-icon small"><use href="#calendar-icon"></use></svg>
              Issued: ${date}
              <div class="d-flex gap-1 my-2">
                <div>
                  <svg class="icon certificate-icon small"><use href="#certificate-icon"></use></svg>
                  Issued By:
                </div>
                <div class="d-flex gap-2">${issuerList}</div>
              </div>
            </div>
            <p class="card-text">${description}</p>
            <div class="fw-bolder mt-auto">Skills Learned:</div>
          </div>
          <ul class="list-group list-group-flush">${skillsList}</ul>
          <div class="btn-group">
            <a href="https://coursera.org/verify/professional-cert/${id}" class="w-50 btn btn-outline-primary py-2 fw-bolder d-flex gap-2 justify-content-center" title="Download ${title}" target="_blank" rel="noopener noreferrer">
              <svg class="icon certificate-icon"><use href="#certificate-icon"></use></svg> Verify
            </a>
            <a href="https://www.coursera.org/account/accomplishments/certificate/${id}" class="w-50 btn btn-outline-primary py-2 fw-bolder d-flex gap-2 justify-content-center" title="Download ${title}" target="_blank" rel="noopener noreferrer">
              <svg class="icon download-icon"><use href="#download-icon"></use></svg> Download
            </a>
          </div>
        </div>
      </div>`
    return output
  })
  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = certificateList.join(""))
}
certificatesList('certificates-container')
