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

  // Form validation
  $("#contactForm").on("submit", function (e) {
    e.preventDefault();

    const name = $("#name").val().trim();
    const email = $("#email").val().trim();
    const message = $("#message").val().trim();
    const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;

    // Clear previous message
    $("#formMessage").text("");

    // Validation checks
    if (name === "") {
      $("#formMessage").text("Please enter your name.").css("color", "red");
      return;
    }

    if (email === "") {
      $("#formMessage").text("Please enter your email.").css("color", "red");
      return;
    }

    if (!emailPattern.test(email)) {
      $("#formMessage")
        .text("Please enter a valid email address.")
        .css("color", "red");
      return;
    }

    if (message === "") {
      $("#formMessage").text("Please enter your message.").css("color", "red");
      return;
    }

    // If everything is valid
    $("#formMessage").text("Message sent successfully!").css("color", "green");
    $(this)[0].reset(); // reset the form
  });
});
