$(document).ready(function(){
$('.burger').click(function(){
	$(this).toggleClass('toggle');
	$('.nav-links').toggleClass('active');
	$('#shadow').addClass('active');
});


$('#shadow').click(function(){
$(this).removeClass('active');
$('.nav-links').removeClass('active');
$('.burger').removeClass('toggle');
});

$(' .nav-links li a').on('click',function(){
$('.nav-links li a').removeClass('active');
$('.nav-links').removeClass('active');
$('.burger').removeClass('toggle');

$(this).addClass('active');

var data = $(this).data('menu');
var H = $(data).offset().top;
$('html,body').animate({
scrollTop: H
},1000);

});




});