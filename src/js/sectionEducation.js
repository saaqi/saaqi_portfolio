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
    ).join('')

    const output =
      `<div class="certificate-item">
        <div class="card certificate-card h-100 shadow-sm">
          <div class="card-body d-flex flex-column h-100">
            <svg class="icon award-icon h2"><use href="#award-icon"></use></svg>
            <h3 class="h4 card-title mb-3">${title}</h3>
            <div class="card-subtitle mb-2 text-muted">
              <svg class="icon award-icon small"><use href="#calendar-icon"></use></svg>
              Issued: ${date}
              <div class="d-flex gap-1 my-2">
                <div class="d-flex align-items-center gap-1">
                  <svg class="icon certificate-icon small"><use href="#certificate-icon"></use></svg>
                  <span class="me-2">From:</span>
                  ${issuerList}
                </div>
              </div>
            </div>
            <p class="card-text">${description}</p>
            <div class="fw-bolder mt-auto">Skills Learned:</div>
          </div>
          <ul class="list-group list-group-flush mt-auto">${skillsList}</ul>
          <div class="card-body my-2">
            <a href="https://coursera.org/verify/professional-cert/${id}" class="d-flex gap-1 align-items-center" title="Download ${title}" target="_blank" rel="noopener noreferrer">
              <svg class="icon certificate-icon"><use href="#certificate-icon"></use></svg>
              Verify Now:
              ${id}
            </a>
          </div>
          <div class="card-footer">
          <a href="https://www.coursera.org/account/accomplishments/certificate/${id}" class="btn btn-sm btn-outline-primary py-2 d-flex gap-1 justify-content-center" title="Download ${title}" target="_blank" rel="noopener noreferrer">
            <svg class="icon download-icon"><use href="#download-icon"></use></svg> Certificate
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
