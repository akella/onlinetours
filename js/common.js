$(document).ready(function() {
	$(".options__want-same").click(function(){
			$(".options-popup").slideDown();
  			$(this).addClass('.js-active');
		return false;
	});
	$(".options-popup__close").click(function(){
			$(".options-popup").slideUp();
			$(this).removeClass('.js-active');
		return false;
	});	
});

