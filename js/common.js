$(document).ready(function() {
// options popup
	$(".options__want-same").click(function(){
			$(".options-popup").slideDown();
		return false;
	});
	$(".options-popup__close").click(function(){
			$(".options-popup").slideUp();
		return false;
	});	
// faq popup
	$(".order-btn_faq").click(function(){
			$(".faq-popup").slideDown();
		return false;
	});
	$(".faq-popup__close").click(function(){
			$(".faq-popup").slideUp();
		return false;
	});




});

