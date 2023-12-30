function About() {
  return (
    <section id="about" className="section about">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-heading">
            <i className="bx bx-user"></i> About Me
          </h2>
        </div>

        <div className="row justify-content-center">
          <div className="col-2 col-lg-2">
            <a
              type="button"
              className="profile-image"
              data-bs-toggle="modal"
              data-bs-target="#profile-picture"
              title="Saqib Islam: Profile Photo"
            >
              <img
                src="./img/profile-thumb.webp"
                className="img-fluid profile rounded-3 shadow"
                alt="Saqib Islam, Profile Photo"
              />
            </a>
            <div
              className="modal fade modal-lg text-center"
              id="profile-picture"
              tabIndex="-1"
              aria-labelledby="profile-picture-label"
              aria-hidden="true"
            >
              <div className="modal-dialog modal-dialog-centered">
                <div className="modal-content">
                  <div className="modal-body p-0">
                    <div className="profile-container position-relative">
                      <button
                        type="button"
                        className="btn btn-icon btn-outline-info rounded-circle fs-4 p-1 position-absolute"
                        data-bs-dismiss="modal"
                        aria-label="Close"
                      >
                        <i className="bx bx-x"></i>
                      </button>
                      <img
                        src="./img/profile.webp"
                        className="img-fluid rounded-bottom-3"
                        alt="Profile Picture"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-10 col-lg-7">
            <p className="mb-0">
              With a deep understanding of intuitive UX design principles and
              a knack for crafting user-centered interfaces, I bring a unique
              blend of creativity and technical expertise to every project.
              Whether it's frontend development, backend development, or
              fullstack solutions, I strive to deliver seamless interactions
              that captivate and engage users. With a commitment to innovation
              and a love for problem-solving, I'm dedicated to shaping the
              digital landscape with transformative designs and memorable user
              journeys.
            </p>
          </div>
        </div>

        <article className="statistics mt-5">
          <div className="heading-container">
            <h4 className="section-heading">
              <i className="bx bx-stats"></i> Stats
            </h4>
          </div>
          <div className="row stats g-3 row-gap-4 mt-4">
            <div className="col-lg-3 col-6 text-break">
              <div className="count-box pt-4 pb-3 px-3 text-center border border-primary rounded-3 h-100">
                <i className="p-3 bg-primary text-bg-primary rounded-circle bx bx-smile"></i>
                <span className="statcounter happy fs-2 fw-medium">22</span>
                <p className="mb-0 fw-medium">Happy Clients</p>
              </div>
            </div>
            <div className="col-lg-3 col-6  text-break">
              <div className="count-box pt-4 pb-3 px-3 text-center border border-primary rounded-3 h-100">
                <i className="p-3 bg-primary text-bg-primary rounded-circle bx bx-notepad"></i>
                <span className="statcounter project fs-2 fw-medium">59</span>
                <p className="mb-0 fw-medium">Projects</p>
              </div>
            </div>
            <div className="col-lg-3 col-6  text-break">
              <div className="count-box pt-4 pb-3 px-3 text-center border border-primary rounded-3 h-100">
                <i className="p-3 bg-primary text-bg-primary rounded-circle bx bx-support"></i>
                <span className="statcounter support fs-2 fw-medium">
                  1463
                </span>
                <p className="mb-0 fw-medium">Hours Of Support</p>
              </div>
            </div>
            <div className="col-lg-3 col-6  text-break">
              <div className="count-box pt-4 pb-3 px-3 text-center border border-primary rounded-3 h-100">
                <i className="p-3 bg-primary text-bg-primary rounded-circle bx bx-certification"></i>
                <span className="statcounter certificate fs-2 fw-medium">
                  8
                </span>
                <p className="mb-0 fw-medium">Certificates</p>
              </div>
            </div>
          </div>
        </article>

        <article className="expertise mt-5">
          <div className="heading-container">
            <h4 className="section-heading">
              <i className="bx bx-code-curly"></i> Skills
            </h4>
          </div>
          <div className="row g-3 skills">
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-html5"></i> HTML
                {/* <i className="val">100%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="HTML Skill"
                  aria-valuenow="100"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-css3"></i> CSS
                {/* <i className="val">98%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="CSS Skill"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-javascript"></i> JavaScript
                {/* <i className="val">75%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="Javascript Skill"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-figma"></i> Figma
                {/* <i className="val">75%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="Figma Skill"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-php"></i> PHP
                {/* <i className="val">75%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="PHP Skill"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-wordpress"></i> WordPress/CMS
                {/* <i className="val">95%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="WordPress / CMS Skill"
                  aria-valuenow="90"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-adobe"></i> Photoshop
                {/* <i className="val">75%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="Adobe Photoshop Skill"
                  aria-valuenow="75"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
            <div className="col-6 progress d-block h-auto bg-transparent">
              <div className="skill pb-2 fs-6 fw-medium">
                <i className="bx bxl-adobe"></i> Adobe XD
                {/* <i className="val">80%</i> */}
              </div>
              <div className="progress-bar-wrap bg-primary-subtle rounded-pill">
                <div
                  className="progress-bar bg-primary rounded-pill"
                  role="progressbar"
                  aria-label="Adobe XD Skill"
                  aria-valuenow="80"
                  aria-valuemin="0"
                  aria-valuemax="100"
                ></div>
              </div>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}

export default About;
