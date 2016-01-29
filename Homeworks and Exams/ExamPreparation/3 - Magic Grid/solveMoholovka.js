"use strict";
function solve(arr) {
    var encrypted = arr[0];//.split('');
    var magicNumber = Number(arr[1]);
    var numbers = [];

    for (var i = 2; i < arr.length; i++) {
        var currenLine = arr[i].split(' ');
        for (var j = 0; j < currenLine.length; j++) {
            numbers.push(Number(currenLine[j]));
        }
    }

    console.log(numbers);

    var matrixSize = Math.sqrt(numbers.length);
    var key;

    for (var i = 0; i < numbers.length; i++) {
        var found = false;
        for (var j = i + 1; j < numbers.length; j++) {
            if (numbers[i] + numbers[j] === magicNumber) {
                var nuberIrow = parseInt(i / matrixSize);
                var numberIcol = i % matrixSize;
                var numberJrow = parseInt(j / matrixSize);
                var numberJcol = j % matrixSize;
                key = nuberIrow + numberIcol + numberJrow + numberJcol;
                found = true;
            }
        }
        if (found) {
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
        //key.compa
        output += newChar;
    }

    console.log(output);
}