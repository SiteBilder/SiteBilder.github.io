//ibg
function ibg(){
$.each($('.ibg'), function(index, val) {
		if($(this).find('img').attr('data-lazy')){
			$(this).css('background-image','url("'+$(this).find('img').attr('data-lazy')+'")');
		}
		else if($(this).find('img').attr('src')) {
			$(this).css('background-image','url("'+$(this).find('img').attr('src')+'")');
		}
	});
}

ibg();

//Sliders
$(document).ready(function(){
	$('.first-slider').slick({
		arrows:false,
		dots: false,
		adaptiveHeigh: true,
		slidesToShow: 1,
		slidesToScroll:1,
		speed: 1000,
		easing: 'linear',
		infinite: true,
		initialSlide:0,
		autoplay: true,
		autoplaySpeed: 3000,
		pauseOnFocus: true,
		pauseOnHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waiteForAnimate: false,
		centerMode: false,
		variableWith: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: true,
		verticalSwiping: false,
		fade: false,
	})
	$('.wish-slider').slick({
		centerMode: true,
	    arrows:false,
		dots: false,
		adaptiveHeigh: true,
		slidesToShow: 1,
		slidesToScroll:1,
		speed: 1000,
		easing: 'linear',
		infinite: true,
		initialSlide:0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waiteForAnimate: false,
		variableWith: true,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
	});
	$('.instr__slider').slick({
		arrows:false,
		dots: true,
		adaptiveHeigh: true,
		slidesToShow: 1,
		slidesToScroll:1,
		speed: 1000,
		easing: 'linear',
		infinite: true,
		initialSlide:0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waiteForAnimate: false,
		centerMode: false,
		variableWith: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		asNavFor: '.instr__slider',
	})
	$('.review-slider').slick({
		arrows:true,
		dots: true,
		adaptiveHeigh: true,
		slidesToShow: 1,
		slidesToScroll:1,
		speed: 1000,
		easing: 'linear',
		infinite: true,
		initialSlide:0,
		autoplay: true,
		autoplaySpeed: 2000,
		pauseOnFocus: true,
		pauseOnHover: true,
		pauseOnDotsHover: true,
		draggable: true,
		swipe: true,
		touchThreshold: 5,
		touchMove: true,
		waiteForAnimate: false,
		centerMode: false,
		variableWith: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		asNavFor: '',
	})
})



// Планая прокрутка
let nav = document.querySelectorAll('a[href*="#"]');

for(let a of nav) {
	a.addEventListener('click', function(event){
		event.preventDefault();

		let id = a.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
	})
}

//Скрытие текста
let media = window.matchMedia('(max-width: 515px)');
media.addListener(textHide);

function textHide() {
	if(media.matches) {
		$('.hide').css('display', 'none');
		$('.btt-show').css('display', 'block');
	
		$('.btt-show').click(function() {
			$(this).css('display', 'none');
			$(this).siblings('.btt-hide').css('display', 'block');
			$(this).siblings('.hide').css('display', 'block');
		});
		$('.btt-hide').click(function() {
			$(this).css('display', 'none');
			$(this).siblings('.btt-show').css('display', 'block');
			$(this).siblings('.hide').css('display', 'none');
		})
	}
	else {
		$('.hide').css('display', 'block');
		$('.btt-show').css('display', 'none');
	}
}

textHide();

//Popup
$(document).ready(function() {
  $('.document__gallery').magnificPopup({
  	type:'image',
  	zoom: {
			enabled: true,
			duration: 300,
			opener: function(element) {
				return element.find('img');
			}
	}
  });			
});
