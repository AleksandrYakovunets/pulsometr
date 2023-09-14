$(document).ready(function () {
  $(".carousel_inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    fade: true,
    cssEase: "linear",
    //adaptiveHeight: true,
    prevArrow: '<button type="button" class="slick-prev"><img src="../icons/carousel/left_arrow.png"/></button>',
    nextArrow: '<button type="button" class="slick-next"><img src="../icons/carousel/right_arrow.png"/></button>'
  });
});
