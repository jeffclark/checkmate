(function($) {
	$.fn.checkmate = function(){
		var matchmaker = $(this).attr('name'); // name of the control item
		var controller = $(this).attr('class'); // class of the control item

		var checkedstatus = $('input[name=' + matchmaker + '].' + controller).attr('checked'); // is the controller checked or not?
		var target = $('input[name=' + matchmaker + ']'); // grab the "real" input

		target.attr('checked',checkedstatus);
	
	};
})(jQuery);