console.log("Sanity Check: JS is working!");

$(document).ready(function(){

	var main = function() {
		$('.btn').click(function() {
			var post = $('.status-box').val();
			$('<li>').text(post).prependTo('.posts');
			$('.status-box').val('');
			$('.counter').text('140');
			$('.btn').addClass('disabled');

		});
	}
	
	$('.status-box').keypress(function() {
		var postLength = $(this).val().length;
		var charactersLeft = 140 - postLength;
		$('.counter').text(charactersLeft);
		
		if(charactersLeft < 0) {
			$('.btn').addClass('disabled'); 
		}
		else {
			$('.btn').removeClass('disabled');
		}
	});
	
	$('.btn').addClass('disabled');


	$(document).ready(main); 


});


