$(document).ready(function(){
	$('img').fadeTo('slow', 0.5);

	$('img').mouseenter(function(){
		$(this).fadeTo('fast', 1)
	});

	$('img').mouseleave(function(){
		$(this).fadeTo('fast', 0.5)
	});
});
