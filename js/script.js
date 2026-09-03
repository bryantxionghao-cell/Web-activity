// ==========================================================================
// Brewhaven Coffee Co. — Site Script
// Handles: mobile nav toggle, footer year, back-to-top button,
// and contact form validation.
// ==========================================================================

document.addEventListener('DOMContentLoaded', function () {

  // ---- Footer year ----
  var yearEl = document.getElementById('year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

  // ---- Mobile nav toggle ----
  var navToggle = document.getElementById('navToggle');
  var mainNav = document.getElementById('mainNav');

  if (navToggle && mainNav) {
    navToggle.addEventListener('click', function () {
      var isOpen = mainNav.classList.toggle('open');
      navToggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });

    // Close menu when a link is clicked (mobile)
    mainNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        mainNav.classList.remove('open');
        navToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ---- Back to top button ----
  var backToTop = document.getElementById('backToTop');
  if (backToTop) {
    window.addEventListener('scroll', function () {
      if (window.scrollY > 400) {
        backToTop.classList.add('visible');
      } else {
        backToTop.classList.remove('visible');
      }
    });

    backToTop.addEventListener('click', function () {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    });
  }

  // ---- Contact form validation ----
  var form = document.getElementById('contactForm');
  if (form) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');
    var successMsg = document.getElementById('formSuccess');

    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    function setError(input, errorId, message) {
      var errorEl = document.getElementById(errorId);
      var group = input.closest('.form-group');
      if (errorEl) errorEl.textContent = message;
      if (group) {
        if (message) {
          group.classList.add('invalid');
        } else {
          group.classList.remove('invalid');
        }
      }
    }

    function validateName() {
      if (nameInput.value.trim().length < 2) {
        setError(nameInput, 'nameError', 'Please enter your full name.');
        return false;
      }
      setError(nameInput, 'nameError', '');
      return true;
    }

    function validateEmail() {
      if (!emailPattern.test(emailInput.value.trim())) {
        setError(emailInput, 'emailError', 'Please enter a valid email address.');
        return false;
      }
      setError(emailInput, 'emailError', '');
      return true;
    }

    function validateMessage() {
      if (messageInput.value.trim().length < 10) {
        setError(messageInput, 'messageError', 'Message should be at least 10 characters.');
        return false;
      }
      setError(messageInput, 'messageError', '');
      return true;
    }

    nameInput.addEventListener('blur', validateName);
    emailInput.addEventListener('blur', validateEmail);
    messageInput.addEventListener('blur', validateMessage);

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      var isNameValid = validateName();
      var isEmailValid = validateEmail();
      var isMessageValid = validateMessage();

      if (isNameValid && isEmailValid && isMessageValid) {
        successMsg.textContent = 'Thanks, ' + nameInput.value.trim() + '! Your message has been sent.';
        form.reset();
        setError(nameInput, 'nameError', '');
        setError(emailInput, 'emailError', '');
        setError(messageInput, 'messageError', '');
      } else {
        successMsg.textContent = '';
      }
    });
  }

});
