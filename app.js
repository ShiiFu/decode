angular.module('app', ['app.filter', 'ui.bootstrap'])
.controller('Decode', function($scope) {
	// list of supported codes
	// 'Name': {
	//		steps: [
	//			'Step',
	//			'To',
	//			'Get',
	//			'Binary',
	//		]
	// }
	$scope.codes = {
		'Ascii': {
			steps: [
				'Binary',
			]
		},
		'Decimal': {
			steps: [
				'Binary',
			]
		},
		'Binary': {
			steps: [
				'Binary',
			]
		},
		'Hexadecimal': {
			steps: [
				'Binary',
			]
		},
		'Base64': {
			steps: [
				'Ascii',
				'Binary',
			]
		},
	};

	// active type
	$scope.type= 'Ascii';

	$scope.setType = function(name) {
		$scope.type = name;
	};
});