$( document ).ready(function() {

	console.log( 'JQuery!!!' );

	// -----------------------initialize sliders------------------
	
	$('.introduce__slider').slick({
		dots: true,
		arrows: false
	});

	$('.news__slider').slick({
		dots: false,
		arrows: true,
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

});