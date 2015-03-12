(function (root, factory) {
  'use strict';

  if (typeof define === 'function' && define.amd) {
    // AMD style
    define([], factory);

  } else if (typeof exports === 'object') {
    // CommonJS style
    module.exports = factory();

  } else {

    // Browser style
    root.baseToBase = factory();
  }

}(this, function () {
  'use strict';

  var convert = function convert(number, base, toBase) {
    if (base === 10 && toBase === 2) {
      return decimalToBinary(number);
    } else if (base === 10 && toBase === 16) {
      return decimalToHex(number);
    } else if (base === 2 && toBase === 10) {
      return binaryToDecimal(number);
    } else if (base === 2 && toBase === 16) {
      return binaryToHexa(number);
    } else if (base === 16 && toBase === 10) {
      return hexaToDecimal(number);
    } else if (base === 16 && toBase === 2) {
      return hexaToBinary(number);
    }
  };

  function reverse(string) {
    return string.split('').reverse().join('');
  }

  var getNumber = (function () {
    var hexTable = {};

    for (var i = 0; i < 10 ; i++) {
      hexTable[i] = i.toString();
    }

    hexTable['10'] = 'A';
    hexTable['11'] = 'B';
    hexTable['12'] = 'C';
    hexTable['13'] = 'D';
    hexTable['14'] = 'E';
    hexTable['15'] = 'F';

    Object.keys(hexTable).forEach(function (k) {
      hexTable[hexTable[k]] = k.toString();
    });

    return function getNumber(number) {
      return hexTable[number.toString()];
    };
  }());

  function hexaToBinary(number) {
    var result  = [],
        numbers = number.toString().split('').reverse();

    for (var i = 0, len = numbers.length; i < len; i++) {
      result.push(convert(getNumber(numbers[i]), 10, 2));
    }

    return result.reverse().join('');
  }

  function hexaToDecimal(number) {
    var result        = 0,
        numbers       = number.toString().split('').reverse(),
        currentNumber = 0;

    for (var i = 0, len = numbers.length; i < len; i++) {
      currentNumber = parseInt(getNumber(numbers[i]), 10);
      result += currentNumber * Math.pow(16, i);
    }

    return result;
  }

  function binaryToHexa(number) {
    var result  = '',
        numbers = number.toString().split('');

    for (var i = 0, len = numbers.length; i < len; i += 4) {
      result += getNumber(convert(numbers.splice(0, 4).join(''), 2, 10));
    }

    return result;
  }


  function binaryToDecimal(number) {
    var numbers = number.split('').reverse(),
        result  = 0;

    for (var i = 0, len = numbers.length; i < len; i++) {
      if (numbers[i] === '1') {
        result += Math.pow(2, i);
      }
    }

    return result;
  }

  function decimalToBinary(number) {
    var result = '';
        number = Number(number);

    while(number > 0) {
      result += '' + parseInt(number % 2, 10);
      number = parseInt(number / 2, 10);
    }

    if (result.length < 4) {
      result += '0';
    }

    return reverse(result);
  }

  function decimalToHex(number) {
    var result = '';
        number = Number(number);

    while (number > 0) {
      result += '' + getNumber(parseInt(number % 16, 10));
      number = parseInt(number / 16, 10);
    }

    return reverse(result);
  }

  return convert;
}));
