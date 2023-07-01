$(document).ready(function () {

	$('.nav a[href^="#"]').click(function () {
		//Сохраняем значение атрибута href в переменной:
		var offset = $('.nav').innerHeight();
		var target = $(this).attr('href');
		$('html, body').animate({
			scrollTop: $(target).offset().top //можно вычесть высоту меню
		}, 500);
		$('.nav a[href^="#"]').removeClass('active');
		$(this).addClass('active');
		return false;
	});

});


// Изчезающие кнопки при скроле до низу

$(function () {
    $.fn.fadeElements = function(a){
        $(this).hover(function(){
            $(this).stop(true,true).fadeTo(a.inTime,a.inOpacity);
        },function(){
            $(this).stop(true,true).delay(a.delayTime).fadeTo(a.outTime,a.outOpacity);
        });
    };
    $('#ubar').fadeElements({
        inOpacity:1,
        outOpacity:1,
        inTime:200,
        outTime:200,
        delayTime:1000
    });
    /* -- */
    var currentScrollTop = 0;
    var dH = parseInt($(document).height() - $(window).height(),10);
    $(window).scroll(function(e){
        currentScrollTop = $(window).scrollTop();
        if(dH <= currentScrollTop){
            $('#ubar').fadeOut(1000);
        } else {
            $('#ubar').fadeIn(1000);
        }
    });
});


//ServicesSlider

let slider = $("#slider");

slider.slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    fade: true,
    arrows: true,
    dots: false
});
