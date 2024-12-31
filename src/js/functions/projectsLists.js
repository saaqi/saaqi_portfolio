import projects from '../../data/projects.json'

const projectsList = (selectorID, btn) => {
  const projectList = projects.map(sl => {
    const {
      name = '',
      url = '',
      title = '',
      icon = ''
    } = sl

    const output =
      `<div class="col-lg-4 col-md-6 col-12 d-flex portfolio-item">
        <div class="card portfolio-card">
          <img src="./img/portfolio/cct-thumb.webp" class="card-img-top" alt="PakLikte Website and Mobile App"
            loading="lazy">
          <div class="card-body">
            <h4>Auto Repair: Website</h4>
            <p>
              The auto repair service website project aimed to establish a
              strong online presence for a garage in Orange City, Florida.
            </p>
            <div class="btn-group w-100">
              <a href="https://github.com/saaqi/car-mechanic-shop" class="btn btn-outline-primary btn-icon fs-4"
                title="View Project on GitHub" rel="nofollow" target="_blank">
                <svg class="icon github-icon">
                  <use xlink:href="#github-icon"></use>
                </svg>
              </a>
              <a href="https://carclubtire.com" class="btn btn-outline-primary btn-icon fs-4"
                title="View Live Project" rel="nofollow" target="_blank">
                <svg class="icon globe-icon">
                  <use xlink:href="#globe-icon"></use>
                </svg>
              </a>
              <button type="button" class="btn btn-outline-primary btn-icon fs-4" data-bs-toggle="modal"
                data-bs-target="#cc-case-study" title="Car Club: Case Study">
                <svg class="icon content-icon">
                  <use xlink:href="#content-icon"></use>
                </svg>
              </button>
            </div>
            <div class="modal fade modal-xl" id="cc-case-study" tabindex="-1" aria-labelledby="car-club-case-study"
              aria-hidden="true">
              <div class="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                <div class="modal-content">
                  <div class="modal-header">
                    <div class="modal-title fs-5" id="car-club-case-study">Car Club: Case Study</div>
                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    <script type="module" src="./src/projects/cc-case-study.js"></script>
                  </div>
                  <div class="modal-body">
                    <div id="cc-case-study-body"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  if (parentSelector) parentSelector.innerHTML = projectList.join("")
}
export default projectsList