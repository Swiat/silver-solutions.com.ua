	jQuery(document).ready(function($){
	$('.info-text-link').click(function(){
	$('.inv-text-1').fadeTo(200,1);
	$('#info-text').css({height:'auto'});
	$('.inv-text-2').fadeTo(200,1);
	$('.inv-text-3').fadeTo(200,1);
	$('.inv-text-4').fadeTo(200,1);
	$('.info-text-link').css({opacity:'0'});
	return false;
 });
	$('.our-work-row').mouseenter(function(){
	$('#years').animateNumber(
		{number: 10}, 3000);
	$('#projects').animateNumber(
		{number: 350}, 3000);
	$('#hours').animateNumber(
		{number: 100000}, 3000);
	$('#coffee').animateNumber(
		{number: 300000}, 3000);
});
});