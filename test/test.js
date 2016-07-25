var assert = require('assert');

var fs = require('fs');
var vm = require('vm');
var path = './function.js';

var code = fs.readFileSync(path);
vm.runInThisContext(code);

describe('Converter', function() {
	it('BinaryToAscii', function() {
		var result = converter['BinaryToAscii']("1001101 1100101 1110011 1110011 1100001 1100111 1100101");
		assert.equal(result, "Message");
	});
});
