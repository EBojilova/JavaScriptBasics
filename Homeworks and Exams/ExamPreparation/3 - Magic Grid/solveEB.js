"use strict";
function solve(input) {
    var encrypted = input[0];
    var magicNumber = Number(input[1]);
    var numbers = [];

    for (var i = 2; i < input.length; i++) {
        var inputLine = input[i].split(/\s+/)
                                .forEach(function(str) {
                                    numbers.push(Number(str));
                                });
    }

    var matrixSize = Math.sqrt(numbers.length);

    var key = findKey();

    var output = '';
    for (var i = 0; i < encrypted.length; i++) {
        var code = encrypted.charCodeAt(i);
        var newChar;
        if (i % 2 === 0) {
            newChar = String.fromCharCode(code + key);
        }
        else {
            newChar = String.fromCharCode(code - key);
        }
        output += newChar;
    }
    console.log(output);

    function findKey() {
        var key = 0;
        for (var i = 0; i < numbers.length; i++) {
            for (var j = i + 1; j < numbers.length; j++) {
                if (numbers[i] + numbers[j] === magicNumber) {
                    var nuberIrow = parseInt(i / matrixSize);
                    var numberIcol = i % matrixSize;
                    var numberJrow = parseInt(j / matrixSize);
                    var numberJcol = j % matrixSize;
                    key = nuberIrow + numberIcol + numberJrow + numberJcol;
                    return key;
                }
            }
        }
        return key;
    }
}

solve([
          'QqdvSpg',
          '400',
          '100 200 120',
          '120 300 310',
          '150 290 370'
      ]);