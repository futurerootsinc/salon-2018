jQuery(document).ready(function($) {

	// Initiate AOS animatin library
	AOS.init({
		disable: function () {
			// disable for mobile
			var maxWidth = 1024;
			return window.innerWidth < maxWidth;
		}
	});

});
