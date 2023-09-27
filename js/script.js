$(document).ready(function () {
  $(".carousel_inner").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1200,
    fade: true,
    cssEase: "linear",
    //adaptiveHeight: true,
    prevArrow:
      '<button type="button" class="slick-prev"><img src="icons/carousel/left_arrow.png"/></button>',
    nextArrow:
      '<button type="button" class="slick-next"><img src="icons/carousel/right_arrow.png"/></button>',
    responsive: [
      {
        breakpoint: 991,
        settings: {
          arrows: false,
          dots: true,
          adaptiveHeight: true,
        },
      },
    ],
  });

  $("ul.catalog_tabs").on("click", "li:not(.catalog_active)", function () {
    $(this)
      .addClass("catalog_active")
      .siblings()
      .removeClass("catalog_active")
      .closest("div.container")
      .find("div.catalog_content")
      .removeClass("catalog_content_active")
      .eq($(this).index())
      .addClass("catalog_content_active");
  });

  $(".catalog_item_link").each(function (i) {
    $(this).on("click", function (e) {
      e.preventDefault();
      $(".catalog_item_detail").eq(i).toggleClass("catalog_item_detail_active");
      if ($(".catalog_item_link").eq(i).html() == "подробнее") {
        $(".catalog_item_link").eq(i).html("назад");
      } else {
        $(".catalog_item_link").eq(i).html("подробнее");
      }
    });
  });

  //Modal
  $("[data-modal = consultation]").on("click", function () {
    $(".overlay, #consultation").fadeIn("slow");
  });

  $(".modal_close").on("click", function () {
    $(".overlay, #consultation, #order, #thanks").fadeOut("slow");
  });

  $(".catalog_item_btn").each(function(i) {
    $(this).on('click', function(){
      $('#order .modal_descr').text($('.catalo_item_title').eq(i).text());
      $(".overlay, #order").fadeIn("slow");
    });
  });
});
