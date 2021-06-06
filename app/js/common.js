(function ($) {
	$(document).ready(function () {
		var mySlider = $('.full-page--vertical');

		mySlider.slick({
			dots: true,
			arrows: false,
			vertical: true,
			slidesToScroll: 1,
			slidesToShow: 1,
			infinite: false
		});
	
		mySlider.mousewheel(function(e) {
			e.preventDefault();
		
			if (e.deltaY < 0) {
				$(this).slick('slickNext');
			} else {
				$(this).slick('slickPrev');
			}
			var currentSlide = $('.full-page--vertical').slick('slickCurrentSlide');
			var summ = currentSlide + 1;
			$( ".index-slider" ).html('0'+ summ);
		});
		
	});
})(jQuery);