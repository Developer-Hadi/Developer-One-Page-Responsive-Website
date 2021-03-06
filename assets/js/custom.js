$(document).ready(function () {

	// Project image popup js code
	$('.img-popup').magnificPopup({
		type: 'image',
		gallery: {
			enabled: true
		}
	});

	// counter section active code
	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// video popup js code
	$('.video-popup').magnificPopup({
		type: 'iframe'
	});

	// Testimonial slick slider
	$('.testimonial').slick({
		dots: true,
		arrows: false,
		infinite: true,
		autoplay: true,
		slidesToShow: 2,
		slidesToScroll: 1,
		responsive: [{
			breakpoint: 800,
			settings: {
				slidesToShow: 1,
				slidesToScroll: 1
			}
		}]
	});

	// Clients slick slider
	$('.clients').slick({
		arrows: false,
		autoplay: true,
		slidesToShow: 5,
		slidesToScroll: 1,
		responsive: [{
				breakpoint: 1024,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1
				}
			},
			{
				breakpoint: 480,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1
				}
			}
		]
	});

	// Navigation current menu select
	$('#nav').onePageNav();

});

// Sticky Navigation menu

$(window).on('scroll', function () {
	if ($(this).scrollTop() > 1) {
		$('.header-area').addClass('sticky-nav');
	} else {
		$('.header-area').removeClass('sticky-nav');
	}
});