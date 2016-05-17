$(document).ready(function() {
	$('body').css('opacity', '0').fadeTo(1500, 1,'swing'); 
	
	$(".nav-list").mouseenter(function() {
		$(this).fadeTo("fast", 0.6);
	});
	$(".nav-list").mouseleave(function() {
		$(this).fadeTo("fast", 1);
	});
});
