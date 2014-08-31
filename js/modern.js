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

		$('.hero__main').find('span').each(function() {
		    setTimeout(function() {
		    	console.log("Hallo");		        
		    }, 1000);
		}, function() {
		    console.log("Abcs");
		})

		// var i = 1;                     //  set your counter to 1

		// function myLoop () {           //  create a loop function
		//    setTimeout(function () {    //  call a 3s setTimeout when the loop is called
		//       alert('hello');          //  your code here
		//       i++;                     //  increment the counter
		//       if (i < 10) {            //  if the counter < 10, call the loop function
		//          myLoop();             //  ..  again which will trigger another 
		//       }                        //  ..  setTimeout()
		//    }, 3000)
		// }

		// myLoop();     
	},

	func: function() {
	    
	}
}

$(document).ready(function() {
	writing.init();
});