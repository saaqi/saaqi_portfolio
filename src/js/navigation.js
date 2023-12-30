(function () {
  ("use strict");

  /**
   * Easy selector helper function
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)];
    } else {
      return document.querySelector(el);
    }
  };

  /**
   * Easy event listener function
   */
  const on = (type, el, listener, all = false) => {
    let selectEl = select(el, all);
    if (selectEl) {
      if (all) {
        selectEl.forEach((e) => e.addEventListener(type, listener));
      } else {
        selectEl.addEventListener(type, listener);
      }
    }
  };

  /**
   * Easy on scroll event listener
   */
  const onscroll = (el, listener) => {
    el.addEventListener("scroll", listener);
  };

  /**
   * Navbar links active state on scroll
   */
  let navbarlinks = select("#navbar .scrollto", true);
  const navbarlinksActive = () => {
    let position = window.scrollY + 200;
    navbarlinks.forEach((navbarlink) => {
      if (!navbarlink.hash) return;
      let section = select(navbarlink.hash);
      if (!section) return;
      if (
        position >= section.offsetTop &&
        position <= section.offsetTop + section.offsetHeight
      ) {
        navbarlink.classList.add("active");
      } else {
        navbarlink.classList.remove("active");
      }
    });
  };
  window.addEventListener("load", navbarlinksActive);
  onscroll(document, navbarlinksActive);

  /**
   * Mobile nav toggle
   */
  on(
    "click",
    ".mobile-nav-toggle",
    function (e) {
    select("body").classList.toggle("mobile-nav-active");
    });
  
  on(
    "click",
    ".mobile-nav-toggle i",
    function (e) {
    this.classList.toggle("bx-menu");
    this.classList.toggle("bx-x");
  });


  // Hide navigation on clicking outside the bar
  on(
    "click",
    "main, .scrollto",
    function (e) {
      const body = select("body");
      if (body.classList.contains("mobile-nav-active")) {
        body.classList.remove("mobile-nav-active");

        const navbarToggle = select(".mobile-nav-toggle i");
        navbarToggle.classList.toggle("bx-menu");
        navbarToggle.classList.toggle("bx-x");
      }
    },
    true
  );

})();
