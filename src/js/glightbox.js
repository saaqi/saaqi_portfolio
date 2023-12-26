/**
 * Initiate portfolio lightbox
 */
import "glightbox/dist/css/glightbox.css"
import GLightbox from "glightbox";

const portfolioLightbox = GLightbox({
  selector: ".portfolio-lightbox",
});

/**
 * Initiate portfolio details lightbox
 */
const portfolioDetailsLightbox = GLightbox({
  selector: ".portfolio-details-lightbox",
  width: "90%",
  height: "90vh",
});
