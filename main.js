$(document).ready(function () {

	//ABRIR MENU
	$('.menu-toggler').on('click', function () {
		$(this).toggleClass('open');
		$('.top-nav').toggleClass('open');
	});

	//CERRAR MENÚ Y DESAPARECER NAV EN LA PANTALLA
	$('.top-nav .nav-link').on('click', function() {
		$('.menu-toggler').removeClass('open');
		$('.top-nav').removeClass('open');
	});
	
	//DURACIÓN DE ATERRIZAJE A LOS ENLACES
	$('nav a[href*="#"]').on('click', function () {
		$('html, body').animate({
			scrollTop: $($(this).attr('href')).offset().top - 10
		},2000);
	});

});