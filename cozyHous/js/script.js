//Меню бургер
document.querySelector('.header__burger').addEventListener('click', burgMenu);

function burgMenu() {
	document.querySelector('.header__menu').classList.toggle('active')
	document.querySelector('.header__burger').classList.toggle('burger')
	document.querySelector('body').classList.toggle('lock');
}

//Pop up
document.querySelector('.home__friendship').addEventListener('click', popUp);

function popUp () {
	document.querySelector('.popup').style.visibility = 'visible';
	document.querySelector('body').classList.toggle('lock');
}
document.querySelector('.popup__close').addEventListener('click', closePopUp);

function closePopUp () {
	document.querySelector('.popup').style.visibility = 'hidden';
	document.querySelector('body').classList.remove('lock');
}

//Slider
let x = 0;
let pet = document.querySelectorAll('.friends--slider__pet');

document.querySelector('.friends--slider__bttLeft').onclick = function () {
	x += 320;
	
	for (var i = 0; i < pet.length; i++) {
		if (x <= 1600) {
			pet[i].style.right = x + 'px';
		}else{
			x = 0;
			pet[i].style.right = x + 'px';
		}
	}
}

document.querySelector('.friends--slider__bttRight').onclick = 
function () {
	x -= 320;

	for (var i = 0; i < pet.length; i++) {
		if (x>=0) {
		pet[i].style.right = x + 'px';
		}else{
			x=1600
			pet[i].style.right = x + 'px';
		}
	}
}

//popupPets
document.querySelector('.friends').addEventListener('click', popupPets);

function popupPets (event) {
	let btt = document.querySelectorAll('.friends--slider__butt');
	let petsBox = document.querySelectorAll('.popupPets__box');
	let popupPets = document.querySelector('.popupPets');
	let popupPetsClose = document.querySelectorAll('.popupPets__close');
	console.log(event.target)

	for (var i = 0; i < btt.length; i++) {
		
		if (btt[i] == event.target) {
			
			popupPets.style.display = 'flex';
			petsBox[i].style.display = 'flex';
			document.querySelector('body').classList.add('lock');

		}else if (popupPetsClose[i] == event.target) {
			
			popupPets.style.display = 'none';
			petsBox[i].style.display = 'none';
			document.querySelector('body').classList.remove('lock');

		}
	}
}

document.querySelector('body').addEventListener('click', popupPet);

function popupPet (event) {
	let bt = document.querySelectorAll('.pets__butt');
	let petBox = document.querySelectorAll('.popupPets__box');
	let popupPet = document.querySelector('.popupPets');
	let popupPetClose = document.querySelectorAll('.popupPets__close');
	console.log(event)
	for (var i = 0; i < bt.length; i++) {
		
		if (bt[i] == event.target) {
			
			popupPet.style.display = 'flex';
			petBox[i].style.display = 'flex';
			document.querySelector('body').classList.add('lock');

		}else if(popupPetClose[i] == event.target) {
			
			popupPet.style.display = 'none';
			petBox[i].style.display = 'none';
			document.querySelector('body').classList.remove('lock');
		}
	}
}

//Плавная прокрутка к якорю

let nav = document.querySelectorAll('a[href*="#"]');
let logo = document.querySelector('#hom');

for(let a of nav) {
	a.addEventListener('click', function(event){
		event.preventDefault();
		console.log(event.target)

		let id = a.getAttribute('href');

		document.querySelector(id).scrollIntoView({
			behavior: 'smooth',
			block: 'start'
		})
		for (var i = 0; i < nav.length; i++) {
			nav[i].style.color = '#cdcdcd';
		}
		a.style.color = '#b09582';
		if (event.target == logo) {
			a.style.color = '#cdcdcd';
		}
	})
}

