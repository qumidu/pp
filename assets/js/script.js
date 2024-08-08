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
  // Typing animation
  new Typed("#type-it", {
    strings: ["Designer", "Developer", "Freelancer"],
    typeSpeed: 100,
    loop: true,
  });
});
