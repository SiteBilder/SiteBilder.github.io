//Выпадающий список
let isMobile = {
	Android: function() {return navigator.userAgent.match(/Android/i);},
	BlackBerry: function() {return navigator.userAgent.match(/BlackBerry/i);},
	iOS: function() {return navigator.userAgent.match(/iPhone|iPad|iPod/i);},
	Opera: function() {return navigator.userAgent.match(/Opera Mini/i);},
	Windows: function() {return navigator.userAgent.match(/IEMobile/i);},
	any: function() {return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());}
};
		let body=document.querySelector('body');
if(isMobile.any()){
		body.classList.add('touch');
		let arrow=document.querySelectorAll('.menu__arrow');
	for(i=0; i<arrow.length; i++){
			let menuItem=arrow[i].closest('.menu__item'); 
			let thisArrow=arrow[i];


		arrow[i].addEventListener('click', function(){
			menuItem.classList.toggle('item-act');
		});
	}
}else{
	body.classList.add('mouse');
}


// Адаптивное меню
$('.header__burg').click(function() {
	$('.header__col:eq(2)').toggleClass('actMenu');
	$('.header__burgmenu').toggleClass('actBurgmenu');
	$('body').toggleClass('lock');
})

let media = window.matchMedia('(max-width: 660px)');
media.addListener(headerMenu);

function headerMenu() {
	if (media.matches) {
		$('.header__burgmenu').appendTo('.header-bottom');
		$(window).scroll(function() {
			let scrolled = $(window).scrollTop();
		 
			if ( scrolled > 0 ) {
				$('.header__col:eq(1)').slideUp('slow', 'swing');
				$('.header__col:eq(3)').slideUp('slow', 'swing');
				$('.header-container hr').slideUp('slow', 'swing');
			} else {
				$('.header__col:eq(1)').slideDown('slow', 'swing');
				$('.header__col:eq(3)').slideDown('slow', 'swing');
				$('.header-container hr').slideDown('slow', 'swing');
			}
		});
	}
	else {
		$('.header__burgmenu').appendTo('.header__col:first');
			$(window).off('scroll');

			$('.header__col:eq(1)').slideDown('slow', 'swing');
			$('.header__col:eq(3)').slideDown('slow', 'swing');
			$('.header-container hr').slideDown('slow', 'swing');
	}
}		

 headerMenu();	

//ibg
function ibg(){
$.each($('.ibg'), function(index, val) {
		if($(this).find('img').length>0){
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

$(document).ready(function(){
	$('.partners-slider').slick({
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
		asNavFor: '',
		responsive: [{
			breakpoint:1162,
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
			breakpoint:650 ,
			settings: {
				slidesToShow: 1,
			}
		}]
	})
}) 

$(document).ready(function(){
	$('.review-slider').slick({
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
	})
}) 


//Popup
$(document).ready(function() {
	  $('.product-sliderBig__item').magnificPopup({
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

//Вкладки
$('.product-sliderSmall__item').click(function() {

	let sliderSmall = $('.product-sliderSmall__item')

	for (var i = 0; i < sliderSmall.length; i++) {
		sliderSmall.eq(i).removeClass('tabActive')
	}
	$(this).addClass('tabActive');

	let attr = $(this).attr('data-tab')
	let sliderBig = $('.product-sliderBig__item');

	for (var i = 0; i < sliderBig.length; i++) {
		if(attr == i) {
			sliderBig.eq(i).addClass('slideActive')
		}else {
			sliderBig.eq(i).removeClass('slideActive')
		}

	}

})

$('.tab-item').click(function () {
	
	let tab_item = $('.tab-item');
	for (var i = 0; i < tab_item.length; i++) {
		tab_item.eq(i).removeClass('tab-itemAct');
	}
	$(this).addClass('tab-itemAct');

	let attr = $(this).attr('data-tab');
	let tabs_content = $('.tabs-content__item');
	for (var i = 0; i < tabs_content.length; i++) {
		if (attr ==i ) {
			tabs_content.eq(i).addClass('tabs-content__itemAct');
		}else {
			tabs_content.eq(i).removeClass('tabs-content__itemAct');
		}
	}
})

//Скрытие текста
let media2 = window.matchMedia('(max-width: 500px)');
	media2.addListener(textHide);

	function textHide() {
		if(media2.matches) {
			$('#txt-hide').css('display', 'none');
			$('#show').css('display', 'block');
		
			$('#show').click(function() {
				$(this).css('display', 'none');
				$('#txt-hide').css('display', 'block');
				$('#hide').css('display', 'block');
			});
			$('#hide').click(function() {
				$(this).css('display', 'none');
				$('#txt-hide').css('display', 'none');
				$('#show').css('display', 'block');
			})
		}
		else {
			$('#txt-hide').css('display', 'block');
			$('#hide').css('display', 'none');
			$('#show').css('display', 'none');
		}
	}

	textHide();