$(document).ready(function() {
	// Lettering
	$(".nav-food-drink, .nav-find-us, .nav-about, .nav-days, .nav-time, .nav-min-food-drink, .nav-min-find-us, .nav-min-about").lettering();
	$(".season-h2").lettering('words');
	// Mobile Navigation
	$("#smallscreen-nav-icon").click(function () {
		$('#minimized-bkgd-navigation').toggleClass('smallscreen-nav-show');
		$('.nav-min-food-drink, .nav-min-about, .nav-min-find-us, .nav-min-facebook').toggle();
	});
	// Always Reveal Minimized Navigation on Mobile and Portrait Tablet
	if($(window).width() >= 960){
		var header = $("#navigation");
		$(window).scroll(function() {
			var scroll = $(window).scrollTop();
			if (scroll > 350) {
				header.removeClass('home-navigation').addClass("minimized-navigation");
			} else {
				header.removeClass("minimized-navigation").addClass('home-navigation');
			}
			// Hiding Elements
		});
	}
	if($(window).width() <= 600){
		$(document).scroll(function() {
			$('#navigation').toggle($(this).scrollTop()<50);
		});
	}
	// Toggle Coachmark
	$('#hidden-coachmark').delay(7000).fadeOut();
	// Toggle Hidden Notes
	$(".toggle-milk").click(function (e) {
		e.preventDefault();
		$("#hover-eggs").show();
	});
	$(".toggle-pork").click(function (e) {
		e.preventDefault();
		$("#hover-pork").show();
	});
	$(".toggle-chicken").click(function (e) {
		e.preventDefault();
		$("#hover-chicken").show();
	});
	$(".toggle-flour").click(function (e) {
		e.preventDefault();
		$("#hover-flour").show();
	});
	$(".toggle-beef").click(function (e) {
		e.preventDefault();
		$("#hover-beef").show();
	});
	$(".close-gem").click(function (e) {
		e.preventDefault();
		$("#hover-eggs, #hover-pork, #hover-chicken, #hover-flour, #hover-beef").hide();
	});
});
// Scroll To
$(function() {
  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});
// Slideshow
$(function() {
    $(".slideshow").responsiveSlides();
});