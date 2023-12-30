function Hero() {
  return (
  <section id="hero" className="section hero">
      <div className="container">
        <div className="row flex-lg-row-reverse align-items-center gap-5 gap-lg-0">
          <div className="graphic-col col-lg-6">
            <img className="hero-graphic" src="./img/graphic.svg" alt="Hero Grahphic"/  >
          </div>
          <div className="text-col d-flex flex-column gap-2 text-center text-lg-start col-lg-6 position-relative">
            <div className="lead fw-medium">Hi there, I'M</div>
            <h1 className="text-primary display-3 fw-bold m-0">Saqib Islam</h1>
              <p className="lead fw-medium">
                a Full Stack Web Developer and UX/UI Designer certified by Google,
                passionate about creating meaningful user experiences. Let's shape the future together!
              </p>
              <ul className="social-links list-unstyled d-flex flex-wrap gap-3 my-4 justify-content-center justify-content-lg-start m-0">
                <li>
                  <a href="https://linkedin.com/in/saaqi" className="linkedin" title="Linked In Profile" target="_blank" rel="nofollow">
                    <i className="bx bxl-linkedin btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/saaqi" className="github" title="Github Profile" target="_blank" rel="nofollow">
                    <i className="bx bxl-github btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="mailto:saaqi.grw@gmail.com?subject=Hi,&nbsp;Saqib&nbsp;Let's&nbsp;talk!" title="Email Me!" rel="nofollow">
                    <i className="bx bxl-gmail btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="https://wa.me/+923006412193" className="whatsApp" title="WhatsApp" rel="nofollow" target="_blank">
                    <i className="bx bxl-whatsapp btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="tel:+923006412193" className="phone" target="_blank" title="Call Me!" rel="nofollow">
                    <i className="bx bx-phone-call btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/saaqi" className="twitter" title="Twitter Profile" target="_blank" rel="nofollow">
                    <i className="bx bxl-twitter btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>
                <li>
                  <a href="https://facebook.com/saqibislam" className="facebook" title="Facebook Profile" target="_blank" rel="nofollow">
                    <i className="bx bxl-facebook btn btn-info rounded-circle p-2 fs-4"></i>
                  </a>
                </li>                
              </ul>
              
              <div className="col-12 m-0 hire-me-button">
                <a href="#contact" className="btn btn-secondary scrollto" title="Hire Me!">
                  <i className="bx bx-conversation"></i> Hire Me!
                </a>
              </div>
            
          </div>
        </div>
        
      </div>
    </section>
  );
}

export default Hero;
