// адаптация
let media = window.matchMedia('(max-width: 640px)');
media.addListener(adapt);

function adapt() {
	if(media.matches) {
		$('#location__adapt').css('display', 'block');
		$('.location__txt').css('display', 'none');
	}	
	else {
		$('#location__adapt').css('display', 'none');
		$('.location__txt').css('display', 'block');
	}
}

adapt();

//Popup
$(document).ready(function() {
	  $('.price-bott__box a').magnificPopup({
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
