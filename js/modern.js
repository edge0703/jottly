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
		$('.action-btn, .mainnav__start').on('click', function(e) {
			var pos = $('.start').offset().top;
		    $('html,body').animate({scrollTop: pos}, 750);
		    e.preventDefault();
		});
	},
}

$(document).ready(function() {
	typing.init();
	scroll.init();
});