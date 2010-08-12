(function($) {
	$.fn.checkmate = function(){
		var matchmaker = $(this).attr('name');
		var checkedstatus = $('input[name=' + matchmaker + '].mirrorcontrol').attr('checked');
		var target = $('input[name=' + matchmaker + ']');

		if (checkedstatus == true) {
			target.attr('checked',true);
		} else {				
			target.attr('checked',false);
		}	
	
	};
})(jQuery);