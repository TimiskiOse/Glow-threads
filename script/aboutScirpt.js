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
  
    // Hamburger toggle
    $(".hamburger").click(function () {
      $(".nav-links").toggleClass("active");
    });
});  