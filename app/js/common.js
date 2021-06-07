(function ($) {
	$(document).ready(function () {
		var swiper = new Swiper(".mySwiper", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next",
				prevEl: ".swiper-button-prev",
			},
			pagination: {
				el: ".swiper-dots",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		var swiper_1 = new Swiper(".mySwiper_1", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next-1",
				prevEl: ".swiper-button-prev-1",
			},
			pagination: {
				el: ".swiper-dots-1",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		var swiper_2 = new Swiper(".mySwiper_2", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next-2",
				prevEl: ".swiper-button-prev-2",
			},
			pagination: {
				el: ".swiper-dots-2",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		var swiper_3 = new Swiper(".mySwiper_3", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next-3",
				prevEl: ".swiper-button-prev-3",
			},
			pagination: {
				el: ".swiper-dots-3",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		var swiper_4 = new Swiper(".mySwiper_4", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next-4",
				prevEl: ".swiper-button-prev-4",
			},
			pagination: {
				el: ".swiper-dots-4",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		var swiper_5 = new Swiper(".mySwiper_5", {
			loop: true,
			slidesPerView: 3,
			spaceBetween: 30,
			grabCursor: true,
			autoplay: {
				delay: 2500,
				disableOnInteraction: false,
			},
			navigation: {
				nextEl: ".swiper-button-next-5",
				prevEl: ".swiper-button-prev-5",
			},
			pagination: {
				el: ".swiper-dots-5",
				type: "fraction",
				formatFractionCurrent: addZero,
        		formatFractionTotal: addZero
			}
		});
		function addZero(num){
			return (num > 9) ? num : '0' + num;
		}

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
		var allCurrentSlide = $(".full-page--vertical").slick("getSlick").slideCount
		$( ".all-slider" ).html('0'+ allCurrentSlide);

		
		
	});
})(jQuery);