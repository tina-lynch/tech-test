

$(document).ready(function(){

	function loadActive(){
		$('.section-1, #section-1').addClass('active');
	};

	setTimeout(loadActive, 500);

	$('.section').on('click', function(){
		var e = $(this).attr('id');

		if($('#'+e).hasClass('active')){
			$('.section-content, .section').removeClass('active');
		}else {
			$('.section-content, .section').removeClass('active');
			$('.'+e + ', #'+e).addClass('active');
		}
	})

});