import certificates from '../../data/certificates.json'

const certificatesList = (selectorID) => {
  const certificateList = certificates.map((cr, index) => {
    const {
      title = '',
      description = '',
      id = ''
    } = cr

    const output =
      `<div class="col-lg-4 col-md-6 certificate-item">
        <div class="card bg-transparent border-0 portfolio-card h-100 border-start ps-2 rounded-0 border-primary border-3">
          <div class="card-body d-flex flex-column p-0">
            <h3 class="h4">
              <svg class="icon award-icon">
                <use xlink:href="#award-icon"></use>
              </svg>
              ${title}
            </h3>
            <p>${description}</p>
            <div class="mt-auto d-flex gap-2 align-items-center">
              <div>
                Verify
                <svg class="icon certificate-icon">
                  <use xlink:href="#certificate-icon"></use>
                </svg>
                :
              </div>
              <a href="https://coursera.org/verify/professional-cert/${id}" class="text-decoration-underline" target="_blank" rel="noopener noreferrer">${id}</a>
            </div>
          </div>
        </div>
      </div>`

    return output

  })

  const parentSelector = document.getElementById(selectorID);
  if (parentSelector) parentSelector.innerHTML = certificateList.join("")
}
export default certificatesList