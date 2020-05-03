$(document).ready(function(){


	$.fn.forceNumbericOnly = function() {//Проверка на номер телефона
	    return this.each(function()
	    {
	        $(this).keydown(function(e)
	        {
	            var key = e.charCode || e.keyCode || 0;
	            return ( key == 8 || key == 9 || key == 46 ||(key >= 37 && key <= 40) ||(key >= 48 && key <= 57) ||(key >= 96 && key <= 105) || key == 107 || key == 109 || key == 173|| key == 61  ); });
	    });
	};

	$('#phone_input').forceNumbericOnly();
	
	$('.reviews').slick({
	  infinite: true,
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  dots: true,
	  prevArrow: '<div class="arr_left arr_slide"><img src="img/arr.png" alt=""></div>',
	  nextArrow: '<div class="arr_right arr_slide"><img src="img/arr.png" alt=""></div>',
	});
	
	$('.close').on('click', function(event) {
		$(this).parent().css('display', 'none');
	});
	
	$('.menu_mobile').on('click', function(event) {
		$('.menu').css('display', 'block');
	});

	$('.arr_to_down').click(function() {
		$("html, body").animate({scrollTop: 0}, "slow")
	});

	$("ul li").on("click","a", function (event) {
		$('.menu').css('display', 'none');
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 60;
        $('body,html').animate({scrollTop: top}, 200);
    });


	var check = 0;
	$('.rer').on('click', function(event) {
		if(check % 2 == 0) $(this).prev().attr('size',6);
		else $(this).prev().attr('size', 0);
		check = check + 1;
	});



	$('.head').on('click', function(event) {
		$('.body').not($(this).next()).slideUp(400);;
		$(this).next().slideToggle(400);
		$('.head').removeClass('active_head');
		$(this).addClass('active_head');
	});

	$('.check_acc').on('click',  function(event) {
		$('.acc_cont').slideToggle(400);
	});

	$('.check_button').on('click', function(event) {
		$('.popup').css('display', 'block');
	});
	$('.close_form').on('click', function(event) {
		$(this).parent().css('display', 'none');
	});
	$('.close_form1').on('click', function(event) {
		$(this).parent().css('display', 'none');
	});

	$("body .footer_form_teg").submit(function () {//Проверка формы

		var form_check;

		$('.footer_form_teg input').each(function(){

			if ($(this).val() == '') {
             	$(this).next().text('Будь ласка, заповніть поле.');
             	form_check = true;
         	} 
         	else return true; 

		});
	
		if (form_check) {return false;}
		else {
			event.preventDefault();

			// $.ajax({
			// 	type: $(this).attr('method'),
			// 	url: $(this).attr('action'),
			// 	data: new FormData(this),
			// 	contentType: false,
			// 	cache: false,
			// 	processData: false,
			var name = $("input[name='name']").val();
			var tel = $("input[name='tel']").val();
			var email_code = $("input[name='email_code']").val();
			var data = {
	            name : name,
	            tel : tel,
	            email_code : email_code
	        };
			$.ajax({
				type: $(this).attr('method'),
				url: $(this).attr('action'),
				dataType: "json",
				crossDomain: "true",
				contentType: "application/json; charset=utf-8",
				data: JSON.stringify(data),     
				success: function(result) {
					$('.popup2').css('display', 'block');
					$('.popup').css('display', 'none');
				},
			});
		}    

    });

});