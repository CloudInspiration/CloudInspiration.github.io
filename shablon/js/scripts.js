$(document).ready(function() {
	if($(document).width() < 880) {
		// Меню
		$('.b-menu').addClass('b-menu_close');
	}
	if($(document).width() > 880) {
		// Последние новости
		$('.js-articles .b-articles__container').owlCarousel({
			loop: true,
			items: 1,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-articles .b-articles__control-button--previous').on('click', function() {
				$('.js-articles .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-articles .b-articles__control-button--next').on('click', function() {
				$('.js-articles .owl-next').trigger('next.owl.carousel');
			});
		// История просмотров
		$('.js-products-history .b-products__container').owlCarousel({
			loop: true,
			items: 1,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-products-history .b-products__control-button--previous').on('click', function() {
				$('.js-products-history .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-products-history .b-products__control-button--next').on('click', function() {
				$('.js-products-history .owl-next').trigger('next.owl.carousel');
			});
		// Слайдер
		$('.js-slider .b-slider__entry').owlCarousel({
			loop: true,
			items: 1,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-slider .b-slider__control-button--previous').on('click', function() {
				$('.js-slider .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-slider .b-slider__control-button--next').on('click', function() {
				$('.js-slider .owl-next').trigger('next.owl.carousel');
			});
		// Рекомендуемые товары
		$('.js-products-featured .b-products__container').owlCarousel({
			loop: true,
			items: 3,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-products-featured .b-products__control-button--previous').on('click', function() {
				$('.js-products-featured .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-products-featured .b-products__control-button--next').on('click', function() {
				$('.js-products-featured .owl-next').trigger('next.owl.carousel');
			});
		// Последние товары
		$('.js-products-latest .b-products__container').owlCarousel({
			loop: true,
			items: 3,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-products-latest .b-products__control-button--previous').on('click', function() {
				$('.js-products-latest .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-products-latest .b-products__control-button--next').on('click', function() {
				$('.js-products-latest .owl-next').trigger('next.owl.carousel');
			});
		// Рекомендуемые товары
		$('.js-products-related .b-products__container').owlCarousel({
			loop: true,
			items: 3,
			nav: false,
			dots: false,
			touchDrag: false,
			mouseDrag: false
		});
			$('.js-products-related .b-products__control-button--previous').on('click', function() {
				$('.js-products-related .owl-prev').trigger('prev.owl.carousel');
			});
			$('.js-products-related .b-products__control-button--next').on('click', function() {
				$('.js-products-related .owl-next').trigger('next.owl.carousel');
			});
	};
	// Меню
	$('.b-menu__header').on('click', function() {
		$('.b-menu').toggleClass('b-menu_close');
	});
	$('.b-menu__item-parent').on('click', function(e) {
		e.preventDefault();
		$(this).parent().toggleClass('b-menu__item_active');
	});
	// Пример поиска
	$('.b-search__example-link').on('click', function(e) {
		e.preventDefault();
		$('.b-search__input-block').val($(this).text());
	});
	$('.b-fullstory__additional-thumb').on('click', function(e) {
		$('.b-fullstory__image-thumb').attr('src', $(this).attr('src'));
	});
	// Кнопка (+/-)	
	$('.b-fullstory__quantity-block--minus').on('click', function () {
		var $input = $(this).parent().find('.b-fullstory__quantity-input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.b-fullstory__quantity-block--plus').on('click', function () {
		var $input = $(this).parent().find('.b-fullstory__quantity-input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
	$('.b-fullstory__quantity-input').keydown(function (e) {
		if ($.inArray(e.keyCode, [46, 8, 9, 27, 13, 110, 190]) !== -1 ||
			(e.keyCode === 65 && (e.ctrlKey === true || e.metaKey === true)) || 
			(e.keyCode >= 35 && e.keyCode <= 40)) {
				 return;
		}
		if ((e.shiftKey || (e.keyCode < 48 || e.keyCode > 57)) && (e.keyCode < 96 || e.keyCode > 105)) {
			e.preventDefault();
		}
	});
	// Вкладки
	$('.b-tabs__item').on('click', function() {
		var Class = $(this).data('class');
		$('.b-tabs__item').removeClass('b-tabs__item_active');
		$(this).addClass('b-tabs__item_active');
		$('.b-tabs__container-entry').fadeOut(0);
		$('.' + Class).fadeIn(0);
	});
});