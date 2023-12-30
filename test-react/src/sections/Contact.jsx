function Contact() {
  return (
    <section id="contact" className="section contact">
      <div className="container">
        <div className="heading-container">
          <h2 className="section-heading">
            <i className="bx bxs-contact"></i> Contact Me
          </h2>
        </div>

        <p className="section-copy mb-5">
          I'd love to hear from you! If you have any questions, project
          inquiries, or just want to say hello, please on't hesitate to reach
          out. I look forward to connecting with you!
        </p>

        <div className="row mt-4">
          <div className="col-lg-3 col-12 info d-flex flex-column gap-3 gap-lg-5">
            <a href="mailto:saaqi.grw@gmail.com?subject=Hi,&nbsp;Saqib&nbsp;Let's&nbsp;talk!">
              <div className="email">
                <i className="bx bx-envelope"></i>
                <h4>Email:</h4>
                <p>saaqi.grw@gmail.com</p>
              </div>
            </a>
            <a href="tel:+923006412193">
              <div className="phone">
                <i className="bx bx-phone-call"></i>
                <h4>Call:</h4>
                <p>+92 300 6412193</p>
              </div>
            </a>
            <a href="https://wa.me/+923006412193" target="_blank">
              <div className="phone whatsapp">
                <i className="bx bxl-whatsapp"></i>
                <h4>WhatsApp:</h4>
                <p>+92 300 6412193</p>
              </div>
            </a>
            <div className="address">
              <i className="bx bx-map"></i>
              <h4>Location:</h4>
              <p>Azizia Town, Gujranwala, Pakistan</p>
            </div>
          </div>

          <div className="col-lg-9 col-12 mt-5 mt-lg-0">
            <form id="contact-email-form" className="contact-email-form">
              <div className="row">
                <div className="col-md-6 form-group">
                  <label htmlFor="name">
                    <i className="bx bx-user"></i> Name:
                  </label>
                  <input
                    type="text"
                    name="name"
                    className="form-control"
                    id="name"
                    placeholder="Enter Your Full Name *"
                    required
                    />
                </div>
                <div className="col-md-6 form-group mt-3 mt-md-0">
                  <label htmlFor="email">
                    <i className="bx bx-envelope"></i> Email Address:
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    name="email"
                    id="email"
                    placeholder="Enter Your Email *"
                    required
                    />
                </div>
              </div>
              <div className="form-group mt-3">
                <label htmlFor="subject">
                  <i className="bx bx-message"></i> Subject:
                </label>
                <input
                  type="text"
                  className="form-control"
                  name="subject"
                  id="subject"
                  placeholder="Enter The subject"
                  />
              </div>
              <div className="form-group mt-3">
                <label htmlFor="message">
                  <i className="bx bx-message-alt-detail"></i> Message:
                </label>
                <textarea
                  className="form-control"
                  name="message"
                  id="message"
                  rows="5"
                  placeholder="What is on your mind? *"
                  required
                ></textarea>
              </div>
              <div className="my-3">
                <div className="loading">Loading</div>
                <div className="error-message"></div>
                <div className="sent-message">
                  Your message has been sent. Thank you!
                </div>
              </div>
              <div className="text-center">
                <button type="submit" className="btn btn-primary">
                  <i className="bx bx-mail-send"></i> Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>  
  );
}

export default Contact;
