angular.module('app.filter', []);
angular.module('app.filter')
	.filter('decode', function($filter) {
		return function(value, type, code, codes) {
			// default value for exemple
			exemple = {
				'Ascii': "Message",
				'Decimal': "77 101 115 115 97 103 101 ",
				'Binary': "1001101 1100101 1110011 1110011 1100001 1100111 1100101",
				'Hexadecimal': "4d 65 73 73 61 67 65 ",
				'Base64': "TWVzc2FnZQ== ",
				'Morse': "-- . ... ... .- --. .",
			}
			value = typeof value == 'undefined' || !value ? exemple[type] : value;

			// steps to binary
			step = codes[type].steps.length;
			temporalType = type;
			for (t=0; t < step; t++) {
				if (isConverter(temporalType, codes[type].steps[t])) {
					value = convert(temporalType, codes[type].steps[t], value);
					temporalType = codes[type].steps[t];
				}
				else {
					return "Error, converter doesn't exist. steps fail : " + temporalType + 'To' + codes[type].steps[t];
				}
			}
			// steps to last step before code
			step = codes[code].steps.length-2;
			for (t=step; t >= 0; t--) {
				if (isConverter(temporalType, codes[code].steps[t])) {
					value = convert(temporalType, codes[code].steps[t], value);
					temporalType = codes[code].steps[t];
				}
				else {
					return "Error, converter doesn't exist. steps fail : " + temporalType + 'To' + codes[code].steps[t];
				}
			}
			// steps to needed code
			if (isConverter(temporalType, code)) {
				return convert(temporalType, code, value);
			}
			else {
				return "Error, converter doesn't exist. steps fail : " + temporalType + 'To' + code;
			}
		};
	})
;