// text type animation

var typed = new Typed(".typed", {
  strings: ["I'm a frontend developer", "I love to create"],
  typeSpeed: 50,
  loop: true,
  loopCount: Infinity,
});

// fade effect on scroll

AOS.init({
  duration: 1500,
});

// active links toggle

$(".header__menu .header__menu-item a").click(function () {
  $("a").removeClass("active");
  $(this).closest("a").addClass("active");
});

$(".header__list span").click(function () {
  $(".header__menu .header__menu-item a").removeClass("active");
});
