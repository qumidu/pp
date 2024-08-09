// ==================== window scroll ====================
$(window).on(`scroll`, function () {
  const scrollTop = $(window).scrollTop();
  if (scrollTop >= 100) {
    $(`body`).addClass(`fixed-header`);
  } else {
    $(`body`).removeClass(`fixed-header`);
  }
});

// ==================== document ready ====================
$(document).ready(function () {
  // typing animation
  new Typed("#type-it", {
    strings: ["Designer", "Developer", "Freelancer"],
    typeSpeed: 100,
    loop: true,
  });

  // owl carousel
  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 2,
    margin: 30,
    autoplay: true,
    autoplayTimeout: 2000,
    responsive: {
      0: {
        items: 1,
      },
      900: {
        items: 2,
      },
    },
  });

  // one page scroll
  $.scrollIt({
    easing: "linear",
    topOffset: -70,
  });
});

// nav hide
const navLinks = document.querySelectorAll(`.nav-link`);
const navCollapse = document.querySelector(`.navbar-collapse.collapse`);
const navToggler = document.querySelector(`.navbar-toggler`);
const main = document.querySelector(`main`);
const navBrand = document.querySelector(`.navbar-brand`);

function handleNavToggle() {
  navCollapse.classList.remove("show");
  navToggler.classList.add("collapsed");
}

navLinks.forEach(function (navLink) {
  navLink.addEventListener(`click`, handleNavToggle);
});
main.addEventListener(`click`, handleNavToggle);
navBrand.addEventListener(`click`, handleNavToggle);
