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
