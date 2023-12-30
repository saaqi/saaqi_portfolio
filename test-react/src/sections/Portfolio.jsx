function Portfolio() {
  return (
    <section id="portfolio" className="section portfolio">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-heading">
            <i className="bx bxs-collection"></i> Portfolio
          </h2>
        </div>

        <div className="row portfolio-container display-flex justify-content-center">
          <div className="col-lg-4 col-md-6 col-12 d-flex portfolio-item">
            <div className="card portfolio-card bg-primary-subtle text-bg-primary-subtle">
              <img
                src="./img/portfolio/cct-thumb.webp"
                className="card-img-top"
                alt="PakLikte Website and Mobile App"
              />
              <div className="card-body">
                <h4>Auto Repair: Website</h4>
                <p>
                  The auto repair service website project aimed to establish a
                  strong online presence for a garage in Orange City, Florida.
                </p>
                <div className="btn-group w-100">
                  <a
                    href="https://github.com/saaqi/car-mechanic-shop"
                    className="btn btn-outline-primary btn-icon fs-3"
                    title="View Project on GitHub"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="bx bxl-github"></i>
                  </a>
                  <a
                    href="https://carclubtire.com"
                    className="btn btn-outline-primary btn-icon fs-3"
                    title="View Live Project"
                    rel="nofollow"
                    target="_blank"
                  >
                    <i className="bx bx-globe"></i>
                  </a>
                  <button
                    type="button"
                    className="btn btn-outline-primary btn-icon fs-3"
                    data-bs-toggle="modal"
                    data-bs-target="#cc-case-study"
                    title="Portfolio Project: Case Study"
                  >
                    <i className="bx bx-book-content"></i>
                  </button>
                </div>
                <div
                  className="modal fade modal-xl"
                  id="cc-case-study"
                  tabIndex="-1"
                  aria-labelledby="Portfolio Project: Case Study"
                  aria-hidden="true"
                >
                  <div className="modal-dialog modal-dialog-centered modal-dialog-scrollable">
                    <div className="modal-content">
                      <div className="modal-header">
                        <div
                          className="modal-title fs-5"
                          id="cc-case-study-label"
                        >
                          Portfolio Project: Case Study
                        </div>
                        <button
                          type="button"
                          className="btn btn-icon btn-outline-info rounded-circle fs-4 p-1 "
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        >
                          <i className="bx bx-x"></i>
                        </button>
                      </div>
                      <div className="modal-body">
                        <h2>Auto Repairing Garage</h2>
                        <h4>Website Design and Digital Marketing</h4>
                        <p>
                          The auto repair service website project aimed to
                          establish a strong online presence for a garage in
                          Orange City, Florida. The goal was to create a
                          user-friendly and responsive website that provided
                          essential information about services, testimonials,
                          and easy contact options. Through user research, UX
                          design, responsive development, and iterative
                          testing, a visually appealing and accessible website
                          was created to cater to the needs of local residents
                          and businesses seeking reliable auto repair
                          services.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Portfolio;
