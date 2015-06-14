$body.on('click', '.back', function() {
	window.history.back();
}).on('click', '.next', function() {
	var $this = $(this),
		next = $this.data('url');

	window.location.hash = next;
});