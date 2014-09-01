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

var logo = {
	init: function() {
		logo.registerEventHandlers(); 
		// $('#logosel').hide();
		// document.getElementById('logosel').setAttribute('display', 'none');
		// document.getElementById('logosel').setAttribute('display', 'none');
		// $('#svgstore46cf7ac42ac6a1ded4f355f66645fd1bFill-1').hide();
	},

	registerEventHandlers: function() {
		
	},
}

$(document).ready(function() {
	typing.init();
	scroll.init();
	logo.init();
});