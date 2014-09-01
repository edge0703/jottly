var typing = {
	init: function() {
		typing.type();  
	},

	type: function() {
		var words = $('.hero__main').text().split("");
		var text = words.join("</span><span>");
		$(".hero__main")
			.html("<span>" + text + "</span>")
			.find('span').each(function(i) {
			    $(this).delay(150*i).fadeIn(10);
			});
	},
}

var scroll = {
	init: function() {
		scroll.registerEventHandlers(); 
	},

	registerEventHandlers: function() {
		$('[data-start]').on('click', function(e) {
			var pos = $('.start').offset().top;
		    $('html,body').animate({scrollTop: pos}, 750);
		    $('#start__name').focus();
		    e.preventDefault();
		});
	},
}

var logo = {
	init: function() {
		logo.registerEventHandlers(); 
	},

	registerEventHandlers: function() {
		
	},
}

$(document).ready(function() {
	typing.init();
	scroll.init();
	logo.init();
});