	//Animations on scroll
	
	//Elements to animate
	$(function() {
		var features_wp = $('.js--wp-features');
		var screen_wp = $('.js--wp-screen');
		var cities_wp = $('.js--wp-cities');
		var premium_wp = $('.js--wp-premium');
		
		features_wp.waypoint(function(direction) {
			features_wp.addClass('animated fadeIn');
		}, {
			offset: "50%"
		});

		screen_wp.waypoint(function(direction) {
			screen_wp.addClass('animated fadeInUp');
		}, {
			offset: "50%"
		});

		cities_wp.waypoint(function(direction) {
			cities_wp.addClass('animated fadeIn');
		}, {
			offset: "40%"
		});

		premium_wp.waypoint(function(direction) {
			premium_wp.addClass('animated pulse');
		}, {
			offset: "50%"
		});		
	});