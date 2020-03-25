$(document).ready(function () {

	console.log('JQuery!!!');

	// -----------------------initialize sliders------------------

	$('.introduce__slider').slick({
		dots: true,
		arrows: false
	});

	$('.news__slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		slidesToShow: 3,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 2
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 1,
					centerMode: true,

				}
			},
			{
				breakpoint: 660,
				settings: {
					slidesToShow: 1,
					centerMode: true,
					arrows: false
				}
			}
		]
	});

	$('.useful-links__slider').slick({
		dots: false,
		arrows: false,
		slidesToShow: 1,
		variableWidth: true
	});

	$('.news-detail__slider').slick({
		dots: true,
		arrows: true,
		responsive: [
			{
				breakpoint: 1700,
				settings: {
					dots: true,
					arrows: false,
				}
			}	
		]
	});

	// ------------------ toggle menu ----------------------

	$('.nav-btn').on('click', function () {
		$(this).toggleClass('active');
		$('.header__nav').toggleClass('active');
	});

	// ------------------ numbers ----------------------


	/* $('#basic-waypoint').waypoint(function (direction) {
		alert('CARRY OUT MY ACTION')
		this.destroy()
	}); */

	// $('.numbers__quantity').countUp();


});