import 'bootstrap/js/dist/modal.js'
// ".modal-backdrop, .fad, .show, .modal-open"

import projects from '../../data/projects.json'

const projectsList = (selectorID) => {
  const projectList = projects.map((pl, index) => {
    const {
      cover = '',
      title = '',
      copy = '',
      github = '',
      link = '',
      caseStudy = ''
    } = pl

    const output =
      `<div class="col-lg-4 col-md-6 portfolio-item">
        <div class="card portfolio-card h-100">
          <img src="./portfolio/${cover}" class="card-img-top border-bottom" alt="PakLikte Website and Mobile App"
            loading="lazy">
          <div class="card-body d-flex flex-column">
            <h3 class="h4">${title}</h3>
            <p>${copy}</p>
            <div class="btn-group w-100 mt-auto">
              ${github && `<a href="${github}" class="btn btn-outline-primary btn-icon fs-4"
                title="View ${title} Project on GitHub" rel="nofollow" target="_blank">
                <svg class="icon github-icon">
                  <use xlink:href="#github-icon"></use>
                </svg>
              </a>`}
              ${link && `<a href="${link}" class="btn btn-outline-primary btn-icon fs-4"
                title="View ${title} Live Project" rel="nofollow" target="_blank">
                <svg class="icon globe-icon">
                  <use xlink:href="#globe-icon"></use>
                </svg>
              </a>`}
              ${caseStudy &&
                `<button type="button" class="btn btn-outline-primary btn-icon fs-4" data-bs-toggle="modal" data-bs-target="#${`cc-`+index}" title="Car Club: Case Study">
                  <svg class="icon content-icon">
                    <use xlink:href="#content-icon"></use>
                  </svg>
                </button>`}
            </div>
            ${caseStudy &&
            `<div class="modal fade modal-fullscreen modal-xl" id="${`cc-`+index}" tabindex="-1" aria-labelledby="${`cc-label-`+index}"
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
          </div>
        </div>
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  if (parentSelector) parentSelector.innerHTML = projectList.join("")
}
export default projectsList