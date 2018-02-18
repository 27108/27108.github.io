'use strict';

$.fn.mytoggle = function () {
	var b = arguments;
	return this.each(function (i, el) {
		var a = function () {
			var c = 0;
			return function () {
				b[c++ % b.length].apply(el, arguments);
			};
		}();
		$(el).click(a);
	});
};

$(function () {
	$('.go_to').click(function () {
		var scroll_el = $(this).attr('href');
		if ($(scroll_el).length != 0) {
			$('html, body').animate({ scrollTop: $(scroll_el).offset().top }, 600);
		}
		return false;
	});

	$('.popup_btn').click(function (e) {
		e.preventDefault();
		$('.popupForm').arcticmodal();
	});

	$('.popup_btn_2').click(function (e) {
		e.preventDefault();
		$('.popupForm2').arcticmodal();
	});

	$('.popup_btn_3').click(function (e) {
		e.preventDefault();
		$('.popupForm3').arcticmodal();
	});

	$('.popup_btn_4').click(function (e) {
		e.preventDefault();
		$('.popupForm4').arcticmodal();
	});

	$('.popup_btn_5').click(function (e) {
		e.preventDefault();
		$('.popupForm5').arcticmodal();
	});

	$('.popup_btn_6').click(function (e) {
		e.preventDefault();
		$('.popupForm6').arcticmodal();
	});

	$('.popup_btn_7').click(function (e) {
		e.preventDefault();
		$('.popupForm7').arcticmodal();
	});

	$('.popup_btn_8').click(function (e) {
		e.preventDefault();
		$('.popupForm8').arcticmodal();
	});

	$('.sendFeedbackForm').click(function (e) {
		e.preventDefault();
		var status = true;
		var name = $(this).parent().find('.name').val();
		var phone = $(this).parent().find('.phone').val();
		var serve = $(this).parent().find('._serve').val();

		var serve_1 = $(this).parent().find('#serve_1').prop("checked");
		var serve_2 = $(this).parent().find('#serve_2').prop("checked");
		var serve_3 = $(this).parent().find('#serve_3').prop("checked");
		var serve_4 = $(this).parent().find('#serve_4').prop("checked");
		var serve_5 = $(this).parent().find('#serve_5').prop("checked");
		var serve_6 = $(this).parent().find('#serve_6').prop("checked");
		var serve_7 = $(this).parent().find('#serve_7').prop("checked");
		var serve_8 = $(this).parent().find('#serve_8').prop("checked");
		var serve_9 = $(this).parent().find('#serve_9').prop("checked");
		var serve_10 = $(this).parent().find('#serve_10').prop("checked");
		var serve_11 = $(this).parent().find('#serve_11').prop("checked");
		var serve_12 = $(this).parent().find('#serve_12').prop("checked");
		var serve_13 = $(this).parent().find('#serve_13').prop("checked");
		var serve_14 = $(this).parent().find('#serve_14').prop("checked");
		var serve_15 = $(this).parent().find('#serve_15').prop("checked");
		var serve_16 = $(this).parent().find('#serve_16').prop("checked");
		var serve_17 = $(this).parent().find('#serve_17').prop("checked");
		var serve_18 = $(this).parent().find('#serve_18').prop("checked");
		var serve_19 = $(this).parent().find('#serve_19').prop("checked");
		var serve_20 = $(this).parent().find('#serve_20').prop("checked");
		var serve_21 = $(this).parent().find('#serve_21').prop("checked");
		var serve_22 = $(this).parent().find('#serve_22').prop("checked");
		var serve_23 = $(this).parent().find('#serve_23').prop("checked");
		var serve_24 = $(this).parent().find('#serve_24').prop("checked");

		if (serve_1) {
			serve_1 = $('#serve_1').parent().find('label').html();
		} else { serve_1 = ""; }

		if (serve_2) {
			serve_2 = $('#serve_2').parent().find('label').html();
		} else { serve_2 = ""; }

		if (serve_3) {
			serve_3 = $('#serve_3').parent().find('label').html();
		} else { serve_3 = ""; }

		if (serve_4) {
			serve_4 = $('#serve_4').parent().find('label').html();
		} else { serve_4 = ""; }

		if (serve_5) {
			serve_5 = $('#serve_5').parent().find('label').html();
		} else { serve_5 = ""; }

		if (serve_6) {
			serve_6 = $('#serve_6').parent().find('label').html();
		} else { serve_6 = ""; }

		if (serve_7) {
			serve_7 = $('#serve_7').parent().find('label').html();
		} else { serve_7 = ""; }

		if (serve_8) {
			serve_8 = $('#serve_8').parent().find('label').html();
		} else { serve_8 = ""; }

		if (serve_9) {
			serve_9 = $('#serve_9').parent().find('label').html();
		} else { serve_9 = ""; }

		if (serve_10) {
			serve_10 = $('#serve_10').parent().find('label').html();
		} else { serve_10 = ""; }

		if (serve_11) {
			serve_11 = $('#serve_11').parent().find('label').html();
		} else { serve_11 = ""; }

		if (serve_12) {
			serve_12 = $('#serve_12').parent().find('label').html();
		} else { serve_12 = ""; }

		if (serve_13) {
			serve_13 = $('#serve_13').parent().find('label').html();
		} else { serve_13 = ""; }

		if (serve_14) {
			serve_14 = $('#serve_14').parent().find('label').html();
		} else { serve_14 = ""; }

		if (serve_15) {
			serve_15 = $('#serve_15').parent().find('label').html();
		} else { serve_15 = ""; }

		if (serve_16) {
			serve_16 = $('#serve_16').parent().find('label').html();
		} else { serve_16 = ""; }

		if (serve_17) {
			serve_17 = $('#serve_17').parent().find('label').html();
		} else { serve_17 = ""; }

		if (serve_18) {
			serve_18 = $('#serve_18').parent().find('label').html();
		} else { serve_18 = ""; }

		if (serve_19) {
			serve_19 = $('#serve_19').parent().find('label').html();
		} else { serve_19 = ""; }

		if (serve_20) {
			serve_20 = $('#serve_20').parent().find('label').html();
		} else { serve_20 = ""; }

		if (serve_21) {
			serve_21 = $('#serve_21').parent().find('label').html();
		} else { serve_21 = ""; }

		if (serve_22) {
			serve_22 = $('#serve_22').parent().find('label').html();
		} else { serve_22 = ""; }

		if (serve_23) {
			serve_23 = $('#serve_23').parent().find('label').html();
		} else { serve_23 = ""; }

		if (serve_24) {
			serve_24 = $('#serve_24').parent().find('label').html();
		} else { serve_24 = ""; }

		if (name == '') {
			$(this).parent().find('.name').css({ border: "1px solid red" });
			status = false;
		} else {
			$(this).parent().find('.name').css({ border: "1px solid #aaa" });
		}
		if (phone == '') {
			$(this).parent().find('.phone').css({ border: "1px solid red" });
			status = false;
		} else {
			$(this).parent().find('.phone').css({ border: "1px solid #aaa" });
		}

		if (status) {
			$.ajax({
				url: "/mail.php",
				type: "POST",
				data: {
					"name": name, "phone": phone, "serve_1": serve_1, "serve_2": serve_2,
					"serve_3": serve_3, "serve_4": serve_4,
					"serve_5": serve_5, "serve_6": serve_6,
					"serve_7": serve_7, "serve_8": serve_8,
					"serve_9": serve_9, "serve_10": serve_10,
					"serve_11": serve_11, "serve_12": serve_12,
					"serve_13": serve_13, "serve_14": serve_14,
					"serve_15": serve_15, "serve_16": serve_16,
					"serve_17": serve_17, "serve_18": serve_18,
					"serve_19": serve_19, "serve_20": serve_20,
					"serve_21": serve_21, "serve_22": serve_22,
					"serve_23": serve_23, "serve_24": serve_24,
					"serve": serve
				},
				success: function() {
					$('.feedbackForm')[0].reset();
					$('.feedbackForm2')[0].reset();
					$.arcticmodal('close');
					$('.successModal').arcticmodal();
				}
			});
		}
	});

	var slider = $('.slider');
	  slider.owlCarousel({
	    pagination: false,
	    items: 1,
	    loop: true,
	    autoplay: true,
	    autoplayTimeout: 10000,
	    autoplaySpeed: 1000
	  });

	  $('.next-slide').click(function () {
	    slider.trigger('next.owl.carousel');
	  });

	  $('.prev-slide').click(function () {
	    slider.trigger('prev.owl.carousel');
	  });

	$('.photo-grid').find('.item').click(function () {
		var src = $(this).find('.img').attr('data-slide');
		src--;
		$('.slider').trigger('to.owl.carousel', [src, 0]);
		$('.fullImgModal').arcticmodal();
	});

	$('.close').click(function () {
		$.arcticmodal('close');
	});

	$('.questions').find('.title-item').mytoggle(function () {
		$(this).parent().find('.hidden').slideDown();
	}, function () {
		$(this).parent().find('.hidden').slideUp();
	});
});