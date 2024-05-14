// 헤더,푸터를 인클루드한다.
$(function() {
    $("#header").load("header.html");
    $("#footer").load("footer.html");
});



$('.banner_box_list').slick({
    speed: 1200,
    dots: false,
    arrows:false,
    autoplay: true,
    slidesToShow: 1,
    autoplaySpeed: 10000,
    slidesToScroll: 1,
        responsive: [
        {
            breakpoint: 1024,
            settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
        }
    },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2,
                slidesToScroll: 2
        }
    },
        {
            breakpoint: 480,
            settings: {
                slidesToShow: 1,
                slidesToScroll: 1
            }
        }
    ]
});
