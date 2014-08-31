$(function() {
	if ( // Browser check
	  'querySelector' in document &&
	  'localStorage' in window &&
	  'addEventListener' in window
	) { // Modern browsers
		$('head').append('<link rel="stylesheet" media="screen" href="css/modern.css"/>'); // Additional CSS for modern browsers
		// yepnope.injectCss("css/modern.css"); // Or as an alternative with AJAX
		$.getScript("js/modern.js", function( data, textStatus, jqxhr ) { // Additional JS for modern browsers
			setTimeout(function(){
			  $('body').css('visibility', 'visible');
			},100); // Above function is only called after a short delay to prevent FOUC
		});
		$.getScript("js/svg4everybody.min.js", function( data, textStatus, jqxhr ) {});
		// $.getScript("js/fancybox/jquery.fancybox.pack.js", function( data, textStatus, jqxhr ) { // Fancybox
		// 	$(".fancybox").fancybox();
		// });
		// $.getScript("js/js-webshim/minified/polyfiller.js", function( data, textStatus, jqxhr ) { // Fancybox
		// 	// Form validation polyfill
		// 	$.webshims.setOptions({
		// 		// waitReady: false,
		// 		basePath: "js/js-webshim/minified/shims/"
		// 	});
			
		// 	$.webshims.setOptions('forms', {
		// 		customMessages: true,
		// 		replaceValidationUI: true
				
		// 	});

		// 	$.webshims.polyfill('forms');
		// });
	} else { // Ancient browsers
		var props = $('.overlay-search').find('input');
		var phtext = "Please enter a keyword";

		if (!Modernizr.input.placeholder) { // Fake playeholder-functionality
			props
				.val(phtext)
				.focus(function() {
					if ($(this).val() == phtext) $(this).val("");
				})
				.blur(function() {
					if ($(this).val() == '') $(this).val(phtext);
			});
		}
	}
});	

// All browsers