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

converter['AsciiToMorse'] = function(input) {
		morseCode = [".-", "-...", "-.-.", "-..", ".", "..-.", "--.", "....", "..", ".---", "-.-", ".-..", "--", "-.", "---", ".--.", "--.-", ".-.", "...", "-", "..-", "...-", ".--", "-..-", "-.--", "--.."];
		morseObj = {};
		for (i = 97, l = 97 + morseCode.length; i < l; i++) {
			morseObj[String.fromCharCode(i)] = morseCode[i - 97];
		}
		output = '';
		for (i = 0, l = input.length; i < l; i++) {
			letter = input[i].toLowerCase();
			if (morseObj[letter]) {
				output += morseObj[letter] + ' ';
			}
		}
		output = output.slice(0, -1);
		return output;
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

converter['MorseToAscii'] = function(input) {
		morseCode = {".-": "a", "-...": "b", "-.-.": "c", "-..": "d", ".": "e", "..-.": "f", "--.": "g", "....": "h", "..": "i", ".---": "j", "-.-": "k", ".-..": "l", "--": "m", "-.": "n", "---": "o", ".--.": "p", "--.-": "q", ".-.": "r", "...": "s", "-": "t", "..-": "u", "...-": "v", ".--": "w", "-..-": "x", "-.--": "y", "--..": "z", "-----": "0", ".----": "1", "..---": "2", "...--": "3", "....-": "4", ".....": "5", "-....": "6", "--...": "7", "---..": "8", "----.": "9"};
		output = '';
		input = input.split(" ");
		for (i=0; i < input.length; i++) {
			if (morseCode[input[i]]) {
				output += morseCode[input[i]];
			}
		}
		return output;
	};
	
converter['BinaryToShadok'] = function(input) {
		shadokCode = ['GA', 'BU', 'ZO', 'MEU'];
		input = convertBaseList(2, 4, input);
		output = "";
		input = input.split(" ");
		for (i=0; i < input.length; i++) {
			for (j=0; j < input[i].length; j++) {
				output += shadokCode[input[i][j]];
			}
			output += " ";
		}
		output = output.slice(0, -1);
		return output;
	};

converter['ShadokToBinary'] = function(input) {
		ShadokCode = {"GA": "0", "BU": "1", "ZO": "2", "MEU": "3"};
		output = '';
		input = input.split(" ");
		for (j=0; j < input.length; j++) {
			for (i=0; i < input[j].length; i++) {
				if (input[j][i] == 'G' || input[j][i] == 'B' || input[j][i] == 'Z') {
					output += ShadokCode[input[j][i] + input[j][i+1]];
					i++;
				}
				else if (input[j][i] == 'M') {
					output += ShadokCode[input[j][i] + input[j][i+1] + input[j][i+2]];
					i += 2;
				}
			}
			output += " ";
		}
		output = output.slice(0, -1);
		return convertBaseList(4, 2, output);
	};

converter['BinaryToOctal'] = function(input) {
		return convertBaseList(2, 8, input);
	};

converter['OctalToBinary'] = function(input) {
		return convertBaseList(8, 2, input);
	};

converter['AsciiToCharDec'] = function(input) {
		output = '';
		for (i=0; i<input.length; i++) {
			output += input.charCodeAt(i) + " ";
		}
		output = output.slice(0, -1);
		return output;
	};

converter['CharDecToAscii'] = function(input) {
		output = '';
		input = input.split(" ");
		for (i=0; i<input.length; i++) {
			output += String.fromCharCode(input[i]);
		}
		return output;
	};
