var convert = require('../lib/base_convert.js');
var assert = require('assert');

describe('Base Convert', function() {
  context('to decimal', function () {
    it('should convert any number in decimal base to binary base', function() {
      assert.equal(convert(5, 10, 2), '0101');
      assert.equal(convert(10, 10, 2), '1010');
      assert.equal(convert(4, 10, 2), '0100');
    });

    it('should convert any number in decimal base to hexadecimal base', function() {
      assert.equal(convert(5, 10, 16), '5');
      assert.equal(convert(10000, 10, 16), '2710');
    });
  });

  context('to binary', function () {
    it('should convert any number in binary base to decimal base', function() {
      assert.equal(convert('0101', 2, 10), 5);
      assert.equal(convert('0010', 2, 10), 2);
    });

    it('should convert any number in binary base to hexa base', function() {
      assert.equal(convert('0101', 2, 16), '5');
      assert.equal(convert('11111100', 2, 16), 'FC');
    });
  });

  context('to hexadecimal', function() {
    it('should convert any number in hexadecimal to decimal base', function() {
      assert.equal(convert('A64', 16, 10), 2660);
      assert.equal(convert('FFF', 16, 10), 4095);
    });

    it('should convert any number in hexadecimal to binary', function() {
      assert.equal(convert('64', 16, 2), '01100100');
      assert.equal(convert('FFF', 16, 2), '111111111111');
    });
  });

});
