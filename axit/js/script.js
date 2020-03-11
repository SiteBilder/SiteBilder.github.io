//Адаптивное меню
document.querySelector('.header__burger').addEventListener('click', menu);

function menu (event) {
	document.querySelector('.header__burger').classList.toggle('active');
	document.querySelector('.header__menu').classList.toggle('active');
	document.querySelector('body').classList.toggle('lock');
};

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


//Вкладки
document.querySelector('.tab__left').addEventListener('click',fTab)

function fTab(event) {
	let tabss = document.getElementsByClassName('tab__tabs');
	let atr = event.target.getAttribute('data-tab');
	let clmn = document.getElementsByClassName('column');

	console.log(clmn.length)

	for (let i = 0; i < clmn.length; i++) {
			clmn[i].classList.remove('active2');
	};

	event.target.classList.add('active2');		

	for(let i=0;i<tabss.length;i++) {
		if(i == atr) {
			tabss[i].style.display = 'block';
		} else {tabss[i].style.display = 'none';}
	}
};


//Анимация картинок
window.onload = function (){
	AOS.init({
	  // Global settings:
	  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
	  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
	  initClassName: 'aos-init', // class applied after initialization
	  animatedClassName: 'aos-animate', // class applied on animation
	  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
	  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
	  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
	  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)
	  

	  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
	  offset: 120, // offset (in px) from the original trigger point
	  delay: 0, // values from 0 to 3000, with step 50ms
	  duration: 700, // values from 0 to 3000, with step 50ms
	  easing: 'ease', // default easing for AOS animations
	  once: false, // whether animation should happen only once - while scrolling down
	  mirror: false, // whether elements should animate out while scrolling past them
	  anchorPlacement: 'top-botton', // defines which position of the element regarding to window should trigger the animation

	});
}


//Плавная прокрутка к якорю
document.querySelector('.header__list').addEventListener('click', navig);
let list = document.querySelector('.header__list');
let link = document.querySelectorAll('.header__list li a');

function navig (event) {

	for (var i = 0; i < link.length; i++) {
			link[i].classList.remove('act')
		};

	if (event.target !== list) {
		event.target.classList.add('act');
	}else {return false};
};

document.querySelector('.header__logo').onclick = function () {
		for (var i = 0; i < link.length; i++) {
			link[i].classList.remove('act')
		}
};

