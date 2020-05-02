//Адаптивное меню
$('.rowDown__burger').click(menuShow);

function menuShow() {

	$('.rowDown__burger').toggleClass('actBurg');
	$('.rowDown__menu').toggleClass('actMenu');
	$('body').toggleClass('lock')
}

let header = $('.header-up');
let header2 = $('.header-top');

let media3 = window.matchMedia('(max-width: 1222px)');
media3.addListener(headerHide);

function headerHide() {
	if (media3.matches) {
		$('.header-up').prependTo('.header');
		$(window).scroll(function() {
			let scrolled = $(window).scrollTop();
			if ( scrolled > 0 ) {
				header.slideUp('slow', 'swing');
				header2.slideUp('slow', 'swing');
			} else {
				header.slideDown('slow', 'swing');
				header2.slideDown('slow', 'swing');
			}
		});
	}
	else {
		$('.header-up').appendTo('.header-hide');
		$(window).scroll(function() {
			let scrolled = $(window).scrollTop();
			if ( scrolled > 0 ) {
				header2.slideUp('slow', 'swing');
			} else {
				header2.slideDown('slow', 'swing');
			}
		});
	}	
}

headerHide(); 

//Адаптив
let media = window.matchMedia('(max-width: 600px)');

function adapt(media) {
	if (media.matches) {

		$('.header-top span:first a').html('Физ.лицам');
		$('.header-top span:last a').html('Юр.лицам');
		$('.rowDown__search img').replaceWith('<img src="img/header/icon/icon6.2.png" alt="">')

	}else {

		$('.header-top span:first a').html('Физическим лицам');
		$('.header-top span:last a').html('Юридическим лицам');
		$('.rowDown__search img').replaceWith('<img src="img/header/icon/icon6.png" alt="">')
	}
}

media.addListener(adapt);

adapt(media);

//Slider
$(document).ready(function(){
	$('.sale-slider').slick({
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
	})
})


//Скрывание текста
let media2 = window.matchMedia('(max-width: 768px)');

media2.addListener(txtHide);

function txtHide() {
	if (media2.matches) {

		$('.txtHide').css('display', 'none');
		$('.readMore').css('display', 'inline');
		$('.dotts').css('display', 'inline');
	}
	else {

		$('.txtHide').css('display', 'inline');
		$('.readMore').css('display', 'none');
		$('.dotts').css('display', 'none');
	}
}

txtHide();


$('.readMore').click(function () {

	if ($('.txtHide').css('display') == 'none') {

		$('.txtHide').css('display', 'inline');
		$('.readMore').html('скрыть');
		$('.dotts').css('display', 'none');		
	}
	else {

		$('.txtHide').css('display', 'none');
		$('.readMore').html('читать далее');
		$('.dotts').css('display', 'inline');
	}
})

//Slider-Tab
$(document).ready(function(){
	$('.service-slider').slick({
		arrows:true,
		dots: false,
		adaptiveHeigh: true,
		slidesToShow: 4,
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
		responsive: [{
			breakpoint:993,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint:768 ,
			settings: {
				slidesToShow: 2,
			}
		},	
		{
			breakpoint:520 ,
			settings: {
				slidesToShow: 1,
			}
		}]
	})
})


let tab = $('.service-slider__item');

$('.service-tab__item').eq(0).css('display', 'flex');

tab.click(function(e) {
	let attr = $(this).attr('data-tab');

	let block = $('.service-tab__item');

	for (var i = 0; i < block.length; i++) {
		if(attr == i) {
			$('.service-tab__item').eq(i).css('display', 'flex');
		}
		else {
			$('.service-tab__item').eq(i).css('display', 'none');
		}
	}
})

//Выпадающее меню
$('.transp__header input').focus(function() {

	$('.transp__body').slideDown();
	$('.transp__header span').addClass('arrow');
})


$('.transp__header input').blur(function(e) {

	$('.transp__body').slideUp();
	$('.transp__header span').removeClass('arrow');
})

let transp = $('.transp__li');

transp.click(function(e) {
	let select = $(this).html();

	$('.transp__header input').val(select)
})

//Revers
$('.calc__img img').click(function() {
	
	let from = $('input[name=from]').val();
	let where = $('input[name=where]').val();

	$('input[name=from]').val(where);
	$('input[name=where]').val(from);

})

let media4 = window.matchMedia('(max-width: 993px)');

media4.addListener(placeHolder);


function placeHolder() {

	if(media4.matches){
		$('.transp__header input').attr('placeholder', '   Выбор транспорта ')
	}else {
		$('.transp__header input').attr('placeholder', '   Выбор транспорта для перевозки вашего груза')
	}
}

placeHolder();

//Slider(autopark)
$(document).ready(function(){
	$('.autopark__slider').slick({
		arrows:true,
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
		centerMode: false,
		variableWith: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		asNavFor: '.review__slider',
	})
})

//Slider(review)
$(document).ready(function(){
	$('.review__slider').slick({
		arrows:true,
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
		centerMode: false,
		variableWith: false,
		rows: 1,
		slidesPerRow: 1,
		vertical: false,
		verticalSwiping: false,
		fade: false,
		asNavFor: '.autopark__slider',
	})
})

//Spoilers
let media5 = matchMedia('(max-width: 993px)');

media5.addListener(spoiler);

function spoiler() {
	if(media5.matches) {
		$('.column__title').click(function() {

			$('.column__title').not($(this)).removeClass('actSpoiler');
			$('.column__body').not($(this).next()).slideUp();


			$(this).toggleClass('actSpoiler').next().slideToggle();
		})
	}else {return false}
}

 spoiler();


let autopark = $('title').html();

if(autopark == 'Автопарк' || autopark == 'Услуги' ){
	$('.header').css('background', 'url("img/slider.jpg") center / cover')

	$('header').css('height', '244px');
}

//Slider(brands)
$(document).ready(function(){
	$('.slider-brand__box').slick({
		arrows:true,
		dots: false,
		adaptiveHeigh: true,
		slidesToShow: 4,
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
		responsive: [{
			breakpoint:1024 ,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint:778 ,
			settings: {
				slidesToShow: 2,
			}
		},	
		{
			breakpoint:500 ,
			settings: {
				slidesToShow: 1,
			}
		}]
	})
})


//Slider(services)
$(document).ready(function(){
	$('.services-photo__slider').slick({
		arrows:true,
		dots: false,
		adaptiveHeigh: true,
		slidesToShow: 4,
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
		responsive: [{
			breakpoint:1222 ,
			settings: {
				slidesToShow: 3,
			}
		},
		{
			breakpoint:993 ,
			settings: {
				slidesToShow: 2,
			}
		},	
		{
			breakpoint:600 ,
			settings: {
				slidesToShow: 1,
			}
		}]
	})
})

//Pop-up
$('.popCall').click(function() {

	$('.popUp-call').fadeIn();
	$('body').addClass('lock');
})
$('.popUp-call__close').click(function() {

	$('.popUp-call').fadeOut();
	$('body').removeClass('lock');
})

$('.popBuy').click(function() {

	$('.popUp-buy').fadeIn();
	$('body').addClass('lock');
})
$('.popUp-buy__close').click(function() {

	$('.popUp-buy').fadeOut();
	$('body').removeClass('lock');
})

$('.popOut').click(function() {

	$('.popUp-buy').fadeOut();
	$('.popUp-call').fadeOut();
	$('.popUp-out').fadeIn();
})
$('.popUp-out__close').click(function() {

	$('.popUp-out').fadeOut();
	$('body').removeClass('lock');
})
