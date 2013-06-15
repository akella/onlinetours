$(document).ready(function() {
	$(".options__want-same").click(function(){
			$(".options-popup").slideDown();
		return false;
	});
	$(".options-popup__close").click(function(){
			$(".options-popup").slideUp();
		return false;
	});	
});

