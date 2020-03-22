//Адаптивное меню
document.querySelector('.header__burger').addEventListener('click', menuShow);

function menuShow() {
	document.querySelector('.header').classList.toggle('activemenu');
	document.querySelector('body').classList.toggle('lock');	
} 

//Tabs
let tabs = document.querySelector('.menu__tabs');
let tab = document.querySelectorAll('.menu__tab');
let list = document.querySelectorAll('.menu__list');

tab[0].classList.add('activetab');
list[0].style.display = 'flex';

tabs.addEventListener('click', tabShow);

function tabShow (event) {
	if(event.target.className == 'menu__tab') {
		let attr = event.target.getAttribute('data-tab');
		
		for (var i = 0; i < tab.length; i++) {
			if(attr == i) {
				list[i].style.display = 'flex';
				tab[i].classList.add('activetab');
			}
			else {
				list[i].style.display = 'none';
				tab[i].classList.remove('activetab');
			}
		}
	}
}

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