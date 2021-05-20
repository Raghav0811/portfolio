$(document).ready(function () {
  $(document).on("click", 'a[href^="#"]', function (event) {
    event.prventDefault();

    $("html, body").animate(
      {
        scrollTop: $($attr(this, "href")).offset().top,
      },
      500
    );
  });
});
