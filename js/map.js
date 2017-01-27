(function() {
	var map = new GMaps ({
		div: '#map',
		lat: 37.759,
		lng: -122.39,
		zoom: 11
	});
	
	map.addMarker({
		lat: 37.759905,
		lng: -122.474706,
		title: 'Premium Food Delivery',
		infoWindow: {
			content: '<div class="map-info-box"><h3>Premium Food Delivery</h3><p>Our San Francisco Office</p></div>'
		}
	});
})();