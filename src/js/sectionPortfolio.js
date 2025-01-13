// Import Styles -
import "../styles/sectionPortfolio.scss"


import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('portfolio-container')


import projects from '../data/projects.json'
import 'bootstrap/js/dist/modal.js'
// ".modal-backdrop, .fad, .show, .modal-open"

const projectsList = selectorID => {
  const projectList = projects.map((pl, index) => {
    const {
      cover = '',
      title = '',
      techStack = [],
      copy = '',
      github = '',
      link = '',
      caseStudy = ''
    } = pl

    // Generate Tech Stack List

      const techStackList = techStack.map(ts =>
      `<li class="list-group-item">
        <svg class="icon ${ts.icon}-icon"><use href="#${ts.icon}-icon"></use></svg > ${ts.text}
      </li>`).join('')

    const output =
      `<div class="portfolio-item">
        <div class="card portfolio-card h-100 shadow-sm">
          <img src="./portfolio/${cover}" class="card-img-top border-bottom" alt="Screenshot of ${title}"
            loading="lazy" draggable="false">
          <div class="card-body d-flex flex-column">
            <h3 class="h4 card-title fw-semibold mb-3">${title}</h3>
            <p class="card-text mb-4">${copy}</p>
            <div class="fw-semibold mt-auto">Tech Stack:</div>
          </div>
          <ul class="list-group list-group-flush mt-auto">${techStackList}</ul>
          <div class="card-footer bg-transparent">
            <div class="btn-group w-100">
              ${github && `<a href="${github}" class="btn btn-outline-primary btn-icon fs-5"
                title="View ${title} Project on GitHub" rel="nofollow" target="_blank">
                <svg class="icon github-icon"><use href="#github-icon"></use></svg>
              </a>`}
              ${link && `<a href="${link}" class="btn btn-outline-primary btn-icon fs-5"
                title="View ${title} Live Project" rel="nofollow" target="_blank">
                <svg class="icon globe-icon"><use href="#globe-icon"></use></svg>
              </a>`}
              ${caseStudy &&
              `<button type="button" class="btn btn-outline-primary btn-icon fs-5" data-bs-toggle="modal" data-bs-target="#${`cc-` + index}" title="Read Case Study">
                <svg class="icon content-icon"><use href="#content-icon"></use></svg>
              </button>`}
            </div>
          </div>
        </div>
        ${caseStudy &&
        `<div class="modal fade modal-fullscreen modal-xl" id="${`cc-` + index}" tabindex="-1" aria-labelledby="${`cc-label-` + index}"
          aria-hidden="true">
          <div class="modal-dialog modal-dialog-centered h-75">
            <div class="modal-content">
              <div class="modal-header">
                <div class="modal-title fs-5" id="${`cc-label-` + index}">${title}</div>
                <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div class="modal-body p-0" style="scrollbar-width: none; overflow-y: hidden;">
                <embed src="/portfolio/${caseStudy}" type="application/pdf" width="100%" height="100%" />
              </div>
            </div>
          </div>
        </div>`}
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = projectList.join(""))
}

projectsList('portfolio-container')