$(document).ready(function(){
	$('button').on ('click', customizeEvent('SMClick'));
}); /* end document.ready() */



function customizeEvent (newEvent) {
	return function (event) {
		event.preventDefault();
		event.stopPropagation();

		$(this).trigger (newEvent);
	}
}