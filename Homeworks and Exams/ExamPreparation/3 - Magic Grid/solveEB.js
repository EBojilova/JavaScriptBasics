"use strict";
function solve(arr) {
    var encrypted = arr[0];
    var magicNumber = Number(arr[1]);
    var numbers = [];

    for (var i = 2; i < arr.length; i++) {
        var currenLine = arr[i].split(' ');
        for (var j = 0; j < currenLine.length; j++) {
            numbers.push(Number(currenLine[j]));
        }
    }

    //console.log(numbers);

    var matrixSize = Math.sqrt(numbers.length);
    var key;

    for (var i = 0; i < numbers.length; i++) {
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === magicNumber) {
                var nuberIrow = parseInt(i / matrixSize);
                var numberIcol = i % matrixSize;
                var numberJrow = parseInt(j / matrixSize);
                var numberJcol = j % matrixSize;
                key = nuberIrow + numberIcol + numberJrow + numberJcol;
            }
        }
        if (key) {
            break;
        }
    }

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
}

solve([
          'QqdvSpg',
          '400',
          '100 200 120',
          '120 300 310',
          '150 290 370'
      ]);