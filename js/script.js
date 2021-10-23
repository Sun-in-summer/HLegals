var swiperAchievement = new Swiper(".achievement-slider", {
  // Optional parameters
  slidesPerView: 1,
  loop: true,
  autoplay: {
    delay: 5000,
  },
  spaceBetween: 40,
  breakpoints: {
    // when window width is >= 320px
    480: {
      slidesPerView: 2,
    },
    // when window width is >= 480px
    680: {
      slidesPerView: 3,
    },
    // when window width is >= 640px
    992: {
      slidesPerView: 4,
    },
  },

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },
});

var swiper = new Swiper(".mySwiper", {
  spaceBetween: 10,
  slidesPerView: 1,
  freeMode: true,
  watchSlidesProgress: true,
  direction: "vertical",
  thumbs: {
    swiper: swiper2,
  },
});
var swiper2 = new Swiper(".mySwiper2", {
  spaceBetween: 10,
  slidesPerView: "auto",
  slideToClickedSlide: true,
  direction: "vertical",
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

$(".intro-scroll-down").click(function () {
  console.log("click");
  $("html, body").animate(
    {
      scrollTop: $("#team").offset().top,
    },
    300
  );
});

$(".publications-more").click(function () {
  $(".publications-container").addClass("publications-open");
  $(this).hide();
  $(".shade").hide();
});

// var $grid = $(".grid").imagesLoaded(function () {
//   // init Masonry after all images have loaded
//   $grid.masonry({
//     // options...
//   });
// });

// $(".grid").masonry({
//   // set itemSelector so .grid-sizer is not used in layout
//   // itemSelector: ".grid-item",
//   // use element for option
//   columnWidth: ".grid-sizer",
//   percentPosition: true,
//   gutter: 40,
// });

console.log("проверка");
