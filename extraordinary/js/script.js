// стан готовності DOM
$(document).ready(function() {

	// slick slider
	$('.slider').slick({
		rows: 0,
		autoplay: true
	});

	// прослуховувння події зміни розмірів вікна браузера
	$(window).resize(function() {
		// якщо ширина екрану меньше 1200px
		if($(window).width() <= 1200) {
			$('.comments').appendTo('.article');
		} // більше 1200px
		else {
			$('.comments').appendTo('.article__right');
		}
	});

	// lazy loading(ліниве завантаження)
	function lazyLoading() {

		// зображення для лінивого завантаження
		let imgs = $('img[data-src]');

		if(imgs.length > 0) {

			// позиція зображень по відношенню до початку документа
			let pos_imgs = [];

			// висота вікна браузера	
			let height_window = $(window).height();
			// величина прокрутки
			let scrollTop = $(window).scrollTop();

			let sum = height_window + scrollTop;

			$.each(imgs, function(index, value) {
				let pos = $(this).offset();
				pos_imgs.push(pos.top);
			});

			$.each(pos_imgs, function(index, value) {
				// якщо зображення з'явилося в полі зору користувача
				if(sum > value) {
					// запис в src значення атрибуту data-src
					$(imgs[index]).attr('src', $(imgs[index]).attr('data-src'));
					// видалення атрибуту data-src
					$(imgs[index]).removeAttr('data-src');
				}
			});
		}

	}

	// виклик функції
	lazyLoading();
	// виклик функції при прокрутці
	$(window).scroll(function() {lazyLoading()});

});