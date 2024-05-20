// 헤더,푸터를 인클루드한다.
$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});

$('.banner_box_list').slick({
    dots: false,
    infinite: true,
    speed: 500,
    autoplay: true,
    arrows:false,
    fade: true,
    cssEase: 'linear'
  });
                  
