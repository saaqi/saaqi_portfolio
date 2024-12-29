// Import Bootstrap's alert component
import "bootstrap/js/dist/alert.js";

// Define the form ID and get the form element
const formId = 'contact-email-form';
const contactForm = document.getElementById(formId);

if (contactForm) {
  const nameInput = document.querySelector('#' + formId + ' #contact-form-name');
  const emailInput = document.querySelector('#' + formId + ' #contact-form-email');
  const messageInput = document.querySelector('#' + formId + ' #contact-form-message');

  // Function to validate email format using a regular expression
  /**
   * @function validateEmail
   * @description Validates the email format using a regular expression.
   * @param {string} email - The email address to validate.
   * @returns {boolean} True if the email format is valid, otherwise false.
   */
  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return emailRegex.test(email);
  }

  const alertPlaceholder = document.querySelector('#' + formId + ' #errorAlerts');

  // Function to append an alert message to the alert placeholder
  /**
   * @function appendAlert
   * @description Appends an alert message to the alert placeholder.
   * @param {string} message - The alert message to display.
   */
  const appendAlert = message => {
    alertPlaceholder.innerHTML = [
      `<div class="alert alert-danger alert-dismissible" role="alert">`,
      `<div>${message}</div>`,
      '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('');
  }

  // Function to validate the form inputs
  /**
   * @function validateForm
   * @description Validates the form inputs.
   * @returns {boolean} True if all form inputs are valid, otherwise false.
   */
  const validateForm = () => {
    if (nameInput.value.trim() === '') {
      appendAlert('Please enter your name');
      return false;
    }
    if (emailInput.value.trim() === '' || !validateEmail(emailInput.value)) {
      appendAlert('Please enter a valid email address.');
      return false;
    }
    if (messageInput.value.trim() === '') {
      appendAlert('Please enter a message.');
      return false;
    }
    return true;
  }

  // Add an event listener for form submission
  contactForm.addEventListener("submit", function (event) {
    event.preventDefault();

    const alertDismiss = this.querySelectorAll('#' + formId + ' #errorAlerts > *');
    if (alertDismiss) {
      alertDismiss.forEach(e => {
        e.remove();
      });
    }
    if (!validateForm()) {
      return false;
    } else {
      const receiveEmail = "saaqi.grw@gmail.com";
      const subjectInput = document.querySelector('#' + formId + ' #contact-form-subject');
      const subjectDefault = `[Contact-Form] ${nameInput.value}`;
      const body = `${messageInput.value}\n\n${nameInput.value}\n${emailInput.value}`;
      const mailtoUrl = `mailto:${encodeURIComponent(receiveEmail)}?subject=${encodeURIComponent(subjectInput ? subjectInput : subjectDefault)}&body=${encodeURIComponent(body)}`;
      window.open(mailtoUrl);
    }
  });
}