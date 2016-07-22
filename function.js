function isFunction(object) {
	var getType = {};
	return object && getType.toString.call(object) === '[object Function]';
}

function isConverter(from, to) {
	return from == to ? true : isFunction(converter[from + 'To' + to]);
}

function convertBase(baseFrom, baseTo, num) {
	return parseInt(num, baseFrom).toString(baseTo);
}

function convertBaseList(baseFrom, baseTo, list) {
	// convert list of word separe by a space
	output = "";
	list = list.split(" ");
	for (i=0; i < list.length; i++) {
		output += convertBase(baseFrom, baseTo, list[i]) + " ";
	}
	output = output.slice(0, -1);
	return output;
}

function convert(from, to, value) {
	if (from == to) {
		return value;
	}
	else {
		return converter[from + 'To' + to](value);
	}
}

var converter = [];

converter['AsciiToBinary'] = function(input) {
		output = "";
		for (i=0; i < input.length; i++) {
			output +=input[i].charCodeAt(0).toString(2) + " ";
		}
		output = output.slice(0, -1);
		return output;
	};

converter['AsciiToBase64'] = function(input) {
		return window.btoa(input);
	};

converter['DecimalToBinary'] = function(input) {
		return convertBaseList(10, 2, input);
	};


converter['BinaryToAscii'] = function(input) {
		output = "";
		input = input.split(" ");
		for (i=0; i < input.length; i++) {
			output += String.fromCharCode(parseInt(input[i], 2));
		}
		return output;
	};

converter['BinaryToDecimal'] = function(input) {
		return convertBaseList(2, 10, input);
	};

converter['BinaryToHexadecimal'] = function(input) {
		return convertBaseList(2, 16, input);
	};

converter['HexadecimalToBinary'] = function(input) {
		return convertBaseList(16, 2, input);
	};

converter['Base64ToAscii'] = function(input) {
		return window.atob(input);
	};