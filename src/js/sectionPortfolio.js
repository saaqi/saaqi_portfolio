// Import Icons
import svgSprite from "../assets/icons.svg"

import 'bootstrap/js/dist/modal.js'
// ".modal-backdrop, .fad, .show, .modal-open"

// Import Styles
import "../styles/draggable.scss"

import draggableContainer from "./functions/draggableContainer.js"
draggableContainer('portfolioContainer')

// Import Projects Data
import projects from '../data/projects.json'


// Handle Dark Mode Changess
import { handleDarkMode } from "./functions/handleDarkMode"
handleDarkMode(
  {
    'btn-outline-primary': 'btn-outline-light',
    'btn-outline-danger': 'btn-outline-warning'
  },
  ".portfolioCard"
)

// Import Portfolio Media Folder
const portfolioMedia = import.meta.glob('../assets/portfolio/*', { eager: true });

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

    // const coverImage = portfolioMedia[`../assets/images/${cover}`]?.default || '/path/to/placeholder.jpg';
    const coverImage = portfolioMedia[`../assets/portfolio/${cover}`]?.default || '';
    const caseStudyPdf = portfolioMedia[`../assets/portfolio/${caseStudy}`]?.default || '';

    // Generate Tech Stack List
    const techStackList = techStack.map(ts =>
      `<li class="list-group-item">
        <svg class="icon ${ts.icon}-icon"><use xlink:href="${svgSprite + '#' + ts.icon}-icon"></use></svg>
        ${ts.text}
      </li>`).join('')

    const output =
      `<div class="draggableItem">
        <div class="card portfolioCard h-100 shadow-sm">
          <img src="${coverImage}" class="card-img-top border-bottom" alt="Screenshot of ${title}" loading="lazy" draggable="false">
          <div class="card-body d-flex flex-column">
            <h3 class="h4 card-title fw-semibold mb-3">${title}</h3>
            <p class="card-text mb-4">${copy}</p>
            <div class="fw-semibold mt-auto">Tech Stack:</div>
          </div>
          <ul class="list-group list-group-flush mt-auto">${techStackList}</ul>
          <div class="card-footer">
            <div class="btn-group w-100">
              ${github && `<a href="${github}" class="btn btn-outline-primary btn-icon fs-5"
                title="View ${title} Project on GitHub" rel="nofollow" target="_blank">
                <svg class="icon github-icon"><use xlink:href="${svgSprite}#github-icon"></use></svg>
              </a>`}
              ${link && `<a href="${link}" class="btn btn-outline-primary btn-icon fs-5"
                title="View ${title} Live Project" rel="nofollow" target="_blank">
                <svg class="icon globe-icon"><use xlink:href="${svgSprite}#globe-icon"></use></svg>
              </a>`}
              ${caseStudy &&
              `<button type="button" class="btn btn-outline-primary btn-icon fs-5" data-bs-toggle="modal" data-bs-target="#${`cc-` + index}" title="Read Case Study">
                <svg class="icon content-icon"><use xlink:href="${svgSprite}#content-icon"></use></svg>
              </button>`}
            </div>
          </div>
          ${caseStudy &&
          `<div class="modal fade" id="${`cc-` + index}" tabindex="-1" aria-labelledby="${`label-cc-` + index}" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered modal-fullscreen">
              <div class="modal-content">
                <div class="modal-header">
                  <div class="modal-title fs-5" id="${`label-cc-` + index}">${title}: Case Study</div>
                  <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body p-0" style="scrollbar-width: none; overflow-y: hidden;">
                  <embed src="${caseStudyPdf}" type="application/pdf" style="width: 100%; height: 100%;" />
                </div>
                <div class="modal-footer py-1">
                  <button type="button" class="btn btn-outline-danger py-2 px-3 d-flex align-items-center" data-bs-dismiss="modal">
                    <svg class="icon close-icon fs-4"><use xlink:href="${svgSprite}#close-icon"></use></svg> Close
                  </button>
                </div>
              </div>
            </div>
          </div>`}
        </div>
      </div>`.replace(/\s+/g, ' ');

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  parentSelector && (parentSelector.innerHTML = projectList.join(""))
}

projectsList('portfolioContainer')