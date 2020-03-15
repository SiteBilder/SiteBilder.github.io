//Адаптивное меню
document.querySelector('.header__burger').addEventListener('click', menuShow);

function menuShow() {
	document.querySelector('.header__menu').classList.toggle('activemenu');
	document.querySelector('.header__burger').classList.toggle('activeburger');
	document.querySelector('body').classList.toggle('lock');
}

//Slider
$(document).ready(function(){
	$('.slider__polosa').slick({
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
		// asNavFor: '',
		// responsive: [{
		// 	breakpoint: ,
		// 	settings: {
		// 	}
		// }]
		// mobileFirst:
		// атрибут <img> data-lazy:''
	})
})

//Плавная прокрутка к якорю

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