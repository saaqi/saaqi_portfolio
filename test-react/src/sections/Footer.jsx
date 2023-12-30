function Footer() {
  return (
    <footer id="footer" className="bg-primary text-bg-primary py-5">
      <div className="container py-2">
        <div className="row align-items-center g-4">
          <h2 className="col-12 col-lg-4 text-center text-lg-start">
            Saqib Islam
          </h2>
          <ul className="social-links col-12 col-lg-4 d-flex flex-wrap justify-content-center gap-3 list-unstyled">
            <li>
              <a
                href="https://linkedin.com/in/saaqi"
                className="linkedin"
                title="Linked In Profile"
                target="_blank"
                rel="nofollow"
              >
                <i className="bx bxl-linkedin btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/saaqi"
                className="github"
                title="Github Profile"
                target="_blank"
                rel="nofollow"
              >
                <i className="bx bxl-github btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="mailto:saaqi.grw@gmail.com?subject=Hi,&nbsp;Saqib&nbsp;Let's&nbsp;talk!"
                title="Email Me!"
                rel="nofollow"
              >
                <i className="bx bxl-gmail btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/+923006412193"
                className="whatsApp"
                title="WhatsApp"
                rel="nofollow"
                target="_blank"
              >
                <i className="bx bxl-whatsapp btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="tel:+923006412193"
                className="phone"
                target="_blank"
                title="Call Me!"
                rel="nofollow"
              >
                <i className="bx bx-phone-call btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com/saaqi"
                className="twitter"
                title="Twitter Profile"
                target="_blank"
                rel="nofollow"
              >
                <i className="bx bxl-twitter btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
            <li>
              <a
                href="https://facebook.com/saqibislam"
                className="facebook"
                title="Facebook Profile"
                target="_blank"
                rel="nofollow"
              >
                <i className="bx bxl-facebook btn btn-outline-secondary rounded-circle p-2"></i>
              </a>
            </li>
          </ul>
          <div className="copyright col-12 col-lg-4 text-center text-lg-end">
            &copy; <span className="footer-year">2024</span> Saqib Islam. All
            Rights Reserved
          </div>
        </div>
      </div>
      <a href="#main" className="top-link scrollto" title="Go To Top">
        <i className="bx bx-arrow-to-top btn btn-outline-info p-2 rounded-circle"></i>
      </a>
    </footer>
  );
}

export default Footer;
