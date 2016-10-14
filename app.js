var app = angular.module('app', ['app.filter', 'ui.bootstrap', 'angular-flash.service', 'angular-flash.flash-alert-directive']);

app.config(function (flashProvider) {
	flashProvider.errorClassnames.push('alert-danger');
	flashProvider.successClassnames.push('alert-sucess');
});

app.controller('Decode', function($scope, $filter, flash) {
	// list of categories
	//	Name : parent
	$scope.categories = {
		'Common': {
			parent: null,
			firstChild: 'Character',
		},
		'Character': {
			parent: 'Common',
			firstChild: 'Ascii',
		},
		'Base': {
			parent: 'Common',
			firstChild: 'Binary',
		},
		'Web': {
			parent: 'Common',
			firstChild: 'URLEncode',
		},
		'Language': {
			parent: null,
			firstChild: 'Human',
		},
		'Human': {
			parent: 'Language',
			firstChild: 'Morse',
		},
		'Obfuscation': {
			parent: 'Language',
			firstChild: 'ROT13',
		},
	}
	
	$scope.selectedCategorie= 'Common';
	$scope.setCategorie = function(name) {
		$scope.selectedCategorie = name;
		$scope.selectedSubCategorie = $scope.categories[name].firstChild;
		$scope.type = $scope.categories[$scope.selectedSubCategorie].firstChild;
	};
	
	$scope.selectedSubCategorie= 'Character';
	$scope.setSubCategorie = function(name) {
		$scope.selectedSubCategorie = name;
		$scope.type = $scope.categories[name].firstChild;
	};
	
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
			parent: 'Character',
		},
		'Decimal': {
			steps: [
				'Binary',
			],
			example: '77 101 115 115 97 103 101',
			parent: 'Base',
		},
		'Binary': {
			steps: [
				'Binary',
			],
			example: '1001101 1100101 1110011 1110011 1100001 1100111 1100101',
			parent: 'Base',
		},
		'Hexadecimal': {
			steps: [
				'Binary',
			],
			example: '4d 65 73 73 61 67 65',
			parent: 'Base',
		},
		'Base64': {
			steps: [
				'Ascii',
				'Binary',
			],
			example: 'TWVzc2FnZQ==',
			parent: 'Base',
		},
		'Morse': {
			steps: [
				'Ascii',
				'Binary',
			],
			example: '-- . ... ... .- --. .',
			parent: 'Human',
		},
		'Shadok': {
			steps: [
				'Binary',
			],
			example: 'BUGAMEUBU BUZOBUBU BUMEUGAMEU BUMEUGAMEU BUZOGABU BUZOBUMEU BUZOBUBU',
			parent: 'Obfuscation',
		},
		'Octal': {
			steps : [
				'Binary',
			],
			exemple: '115 145 163 163 141 147 145',
			parent: 'Base',
		},
		'CharDec': {
			steps : [
				'Ascii',
				'Binary',
			],
			example: '77 101 115 115 97 103 101',
			parent: 'Character',
		},
		'URLEncode': {
			steps : [
				'Ascii',
				'Binary',
			],
			example: 'Message',
			parent: 'Web',
		},
		'ROT13': {
			steps : [
				'Ascii',
				'Binary',
			],
			example: 'Zrffntr',
			parent: 'Obfuscation',
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
	
	$scope.oneAccordionAtATime = true;
});
