//Адаптивное меню
document.querySelector('.header__burger').addEventListener('click', menuShow);

function menuShow() {
	document.querySelector('.header__menu').classList.toggle('activemenu');
	document.querySelector('.header__burger').classList.toggle('activeburger');
	document.querySelector('body').classList.toggle('lock');
}

//Slider
$(document).ready(function(){
	$('.slider').slick({
		arrows: true,
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
		pauseOnFocus: false,
		pauseOnHover: false,
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
		// asNavFor: '',
		responsive: [{
			breakpoint: 1054 ,
			settings: {
				arrows: false,
			}
		}]
		// mobileFirst:
		// атрибут <img> data-lazy:''
	})
})

$(document).ready(function(){
	$('.post__slider').slick({
		arrows: true,
		dots: true,
		adaptiveHeigh: true,
		slidesToShow: 3,
		slidesToScroll:1,
		speed: 1000,
		easing: 'linear',
		infinite: true,
		initialSlide:0,
		// autoplay: true,
		// autoplaySpeed: 2000,
		// // pauseOnFocus: false,
		// pauseOnHover: false,
		// pauseOnDotsHover: true,
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
		// asNavFor: '',
		responsive: [{
			breakpoint:1225 ,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint:1000 ,
			settings: {
				slidesToShow: 1,
			}
		}]

		// mobileFirst:
		// атрибут <img> data-lazy:''
	})
})

let item = document.querySelectorAll('.items');

for (var i = 0; i < item.length; i++) {
	item[i].onmouseenter = function(event) {

		event.target.classList.add('itemsactive');
	}
	item[i].onmouseleave = function(event) {

		event.target.classList.remove('itemsactive');
	}
}

document.querySelector('.projects__btt').addEventListener('click', itemsShow);

function itemsShow () {
	document.querySelector('.items__hide').style.width = '100%';
}

document.querySelector('.projects__tabs').onclick = function (event) {
	
	let tabs = document.querySelectorAll('a[href*="#"]');
	let id = event.target.getAttribute('href');
	let miss = document.querySelector('.projects__tabs');
	let misstwo = document.querySelectorAll(' .projects__tabs span');

	for (var i = 0; i < misstwo.length; i++) {
		if (event.target == miss || event.target == misstwo[i]) {return false}
		misstwo[i].classList.remove('activetab');	
	}

	for(let tab of tabs ){
		let atrb = tab.getAttribute('href');
		document.querySelector(atrb).style.display = 'none';	
	}

	event.target.parentElement.classList.add('activetab');
	

	document.querySelector(id).style.display = 'flex';	
}


let post = document.querySelectorAll('.post__item');



for (var i = 0; i < post.length; i++) {
	post[i].onmouseenter = function(event) {
		event.target.classList.add('postactive');
	}
	post[i].onmouseleave = function(event) {

		event.target.classList.remove('postactive');
	}
}
