$(document).ready(function() {
    var logoIcon = $('div.logo_icon');  // .logo_icon을 가진 div를 선택
    $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {  // 스크롤 위치가 0px에서 벗어나면
            logoIcon.addClass('on');  // .on 클래스 추가
        } else {
            logoIcon.removeClass('on');  // 그렇지 않으면 .on 클래스 제거
        }
    });
});
