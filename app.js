var app = angular.module('app', ['app.filter', 'ui.bootstrap', 'angular-flash.service', 'angular-flash.flash-alert-directive']);

app.config(function (flashProvider) {
	flashProvider.errorClassnames.push('alert-danger');
	flashProvider.successClassnames.push('alert-sucess');
});

app.controller('Decode', function($scope, $filter, flash) {
	// list of supported codes
	// 'Name': {
	//		steps: [
	//			'Step',
	//			'To',
	//			'Get',
	//			'Binary',
	//		],
	//		example: 'Message'
	// }
	$scope.codes = {
		'Ascii': {
			steps: [
				'Binary',
			],
			example: 'Message',
		},
		'Decimal': {
			steps: [
				'Binary',
			],
			example: '77 101 115 115 97 103 101',
		},
		'Binary': {
			steps: [
				'Binary',
			],
			example: '1001101 1100101 1110011 1110011 1100001 1100111 1100101',
		},
		'Hexadecimal': {
			steps: [
				'Binary',
			],
			example: '4d 65 73 73 61 67 65',
		},
		'Base64': {
			steps: [
				'Ascii',
				'Binary',
			],
			example: 'TWVzc2FnZQ==',
		},
		'Morse': {
			steps: [
				'Ascii',
				'Binary',
			],
			example: '-- . ... ... .- --. .',
		},
		'Shadok': {
			steps: [
				'Binary',
			],
			example: 'BUGAMEUBU BUZOBUBU BUMEUGAMEU BUMEUGAMEU BUZOGABU BUZOBUMEU BUZOBUBU',
		},
		'Octal': {
			steps : [
				'Binary',
			],
			exemple: '115 145 163 163 141 147 145',
		},
	};

	// active type
	$scope.type= 'Ascii';

	$scope.setType = function(name) {
		$scope.type = name;
	};

	$scope.flashSuccess = function(message) {
		flash.success = message;
	};

	$scope.flashError = function(message) {
		flash.error = message;
	};
});
