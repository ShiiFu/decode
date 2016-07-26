var clipboard = new Clipboard('.copy');

clipboard.on('success', function(e) {
	angular.element(document.getElementById('controller')).scope().flashSuccess('Copy done');
});

clipboard.on('error', function(e) {
	angular.element(document.getElementById('controller')).scope().flashError('Error during copy');
});