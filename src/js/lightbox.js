// Import Bootstrap's Modal JS
import "bootstrap/js/dist/modal"

// Include the classes added by Bootstrap Modal to keep them from purging on build from stylesheet ;)
const keepStyles = document.querySelectorAll(".modal-backdrop, .fadm .show .modal-open");