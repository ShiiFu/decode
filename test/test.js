var assert = require('assert');

var jsdom = require("jsdom").jsdom;
var document = jsdom("hello world");
global.window = document.defaultView;

var fs = require('fs');
var vm = require('vm');
var path = './function.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('Converter', function() {

	it('AsciiToBinary', function() {
		var result = converter['AsciiToBinary']("Message");
		assert.equal(result, "1001101 1100101 1110011 1110011 1100001 1100111 1100101");
	});

	it('AsciiToBase64', function() {
		var result = converter['AsciiToBase64']("Message");
		assert.equal(result, "TWVzc2FnZQ==");
	});

	it('AsciiToMorse', function() {
		var result = converter['AsciiToMorse']("message");
		assert.equal(result, "-- . ... ... .- --. .");
	});

	it('DecimalToBinary', function() {
		var result = converter['DecimalToBinary']("77 101 115 115 97 103 101");
		assert.equal(result, "1001101 1100101 1110011 1110011 1100001 1100111 1100101");
	});

	it('BinaryToAscii', function() {
		var result = converter['BinaryToAscii']("1001101 1100101 1110011 1110011 1100001 1100111 1100101");
		assert.equal(result, "Message");
	});

	it('BinaryToDecimal', function() {
		var result = converter['BinaryToDecimal']("1001101 1100101 1110011 1110011 1100001 1100111 1100101");
		assert.equal(result, "77 101 115 115 97 103 101");
	});

	it('BinaryToHexadecimal', function() {
		var result = converter['BinaryToHexadecimal']("1001101 1100101 1110011 1110011 1100001 1100111 1100101");
		assert.equal(result, "4d 65 73 73 61 67 65");
	});

	it('HexadecimalToBinary', function() {
		var result = converter['HexadecimalToBinary']("4d 65 73 73 61 67 65");
		assert.equal(result, "1001101 1100101 1110011 1110011 1100001 1100111 1100101");
	});

	it('Base64ToAscii', function() {
		var result = converter['Base64ToAscii']("TWVzc2FnZQ==");
		assert.equal(result, "Message");
	});

	it('MorseToAscii', function() {
		var result = converter['MorseToAscii']("-- . ... ... .- --. .");
		assert.equal(result, "message");
	});

});
