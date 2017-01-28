"use strict";

(function() {
	//Make the sticky nav appear when we get to the features section
	$(".js--section-features").waypoint(function(direction) {
		if(direction === "down") {
			$("nav").addClass("sticky-nav");
		} else {
			$("nav").removeClass("sticky-nav");
		}
	}, {
		offset: "60px;"
	});
	
	//Scroll to sections on click
	//Smooth Scrolling: https://css-tricks.com/snippets/jquery/smooth-scrolling/
	$(function() {
	  $('a[href*="#"]:not([href="#"])').click(function() {
		if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
		  var target = $(this.hash);
		  target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
		  if (target.length) {
			$('html, body').animate({
			  scrollTop: target.offset().top-50
			}, 1000);
			return false;
		  }
		}
	  });
	});
	

	//Show/Hide mobile nav and change icon
	$(function() {
		$('.js--mobile-nav-btn, .js--main-nav li a').click(function() 
		{
			var main_nav = $('.js--main-nav');
			var nav_icon = $('.js--mobile-nav-btn i');

			var open_icon_name = 'ion-navicon-round';
			var close_icon_name = 'ion-close-round';

			//main_nav.slideToggle(200);
			main_nav.toggleClass('active');
			if(nav_icon.hasClass(open_icon_name)) {
				nav_icon.removeClass(open_icon_name);
				nav_icon.addClass(close_icon_name);
			} else {
				nav_icon.removeClass(close_icon_name);
				nav_icon.addClass(open_icon_name);
			}
		});
	});
})();