var writing = {
	init: function() {
		writing.registerEventHandlers(); 
		writing.split();  
	},

	registerEventHandlers: function() {
	},

	split: function() {
		var words = $('.hero__main').text().split("");
		var text = words.join("</span><span>");
		$(".hero__main").html("<span>" + text + "</span>");	

		$('.hero__main').find('span').each(function(i) {
		    $(this).delay(150*i).fadeIn(10);
		});
	},

	func: function() {
	    
	}
}

$(document).ready(function() {
	writing.init();
});