$(document).ready(function () {
  // Scroll animation
  $(window).on("scroll", function () {
    $(".fade-in").each(function () {
      const bottom_of_element =
        $(this).offset().top + $(this).outerHeight() / 2;
      const bottom_of_window = $(window).scrollTop() + $(window).height();

      if (bottom_of_window > bottom_of_element) {
        $(this).addClass("visible");
      }
    });
  });

  const $hamburger = $(".hamburger");
  const $navLinks = $(".nav-links");

  // Toggle menu on hamburger click
  $hamburger.on("click", function (e) {
    e.stopPropagation();
    $navLinks.toggleClass("active");
  });

  // Close menu when a nav link is clicked
  $(".nav-links a").on("click", function () {
    $navLinks.removeClass("active");
  });

  // Close menu when clicking outside
  $(document).on("click", function (e) {
    if (
      !$navLinks.is(e.target) &&
      $navLinks.has(e.target).length === 0 &&
      !$hamburger.is(e.target)
    ) {
      $navLinks.removeClass("active");
    }
  });
});
