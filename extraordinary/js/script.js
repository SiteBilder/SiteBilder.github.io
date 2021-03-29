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
	})

});