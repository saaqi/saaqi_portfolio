function Header() {
  return (
    <header
      id="header"
      className="header d-flex flex-column justify-content-center"
    >
      <button
        className="mobile-nav-toggle rounded-circle fs-1 shadow-sm p-1 btn btn-outline-primary btn-icon d-lg-none"
        title="Navigation Menu"
        >
        <i className="bx bx-menu-alt-left"></i>
      </button>
      <nav id="navbar" className="navbar nav-menu">
        <ul className="list-unstyled">
          <li>
            <a
              href="#hero"
              className="nav-link btn btn-outline-primary shadow-sm scrollto active"
            >
              <i className="bx bx-home"></i> <span>Home</span>
            </a>
          </li>
          <li>
            <a
              href="#about"
              className="nav-link btn btn-outline-primary shadow-sm scrollto"
              >
              <i className="bx bx-user"></i> <span>About</span>
            </a>
          </li>
          {/* <li>
          <a href="#resume" className="nav-link btn btn-outline-primary shadow-sm scrollto">
            <i className="bx bx-file-blank"></i> <span>Resume</span>
            </a>
          </li> */}
          <li>
            <a
              href="#portfolio"
              className="nav-link btn btn-outline-primary shadow-sm scrollto"
            >
              <i className="bx bx-book-content"></i> <span>Portfolio</span>
            </a>
          </li>
          {/* <li>
          <a href="#services" className="nav-link btn btn-outline-primary shadow-sm scrollto">
            <i className="bx bx-server"></i> <span>Services</span>
            </a>
          </li> */}
          <li>
            <a
              href="#contact"
              className="nav-link btn btn-outline-primary shadow-sm scrollto"
            >
              <i className="bx bxs-contact"></i> <span>Contact</span>
            </a>
          </li>
          {/* <li>
          <a href="#testimonials" className="nav-link btn btn-outline-primary shadow-sm scrollto">
          <i className="bx bx-conversation"></i> <span>Testimonials</span>
          </a>
        </li> */}
        </ul>
      </nav>
    </header>
  );
}

export default Header;

