"use strict";
function solve(input) {
    var seqLength = Number(input[input.length - 1]);
    var numbers = [];
    var matrix = [];

    for (var i = 0; i < input.length - 1; i++) {
        var inputLine = input[i].split(' ');
        matrix.push(inputLine);
        inputLine.forEach(function(str) {
            numbers.push(str);
        });
    }

    // tova reshenie dava 60/100, ne moga da otkria zasto
    //var counter=1;
    //for (var j = 1; j < numbers.length; j++) {
    //    var current = numbers[j];
    //    var prev = numbers[j - 1];
    //
    //    if (current === prev) {
    //        counter++;
    //        if (counter === seqLength) {
    //            var lastIndex = j;
    //            for (var l = 0; l < seqLength; l++) {
    //                numbers[lastIndex] = 'removed';
    //                lastIndex--;
    //            }
    //            counter = 1;
    //            j++;
    //        }
    //    }
    //}
    for (var i = 0; i < numbers.length; i++) {
        var repeats = 1;
        for (var j = i + 1; j < i + seqLength; j++) {
            if (numbers[i] === numbers[j]) {
                repeats++;
            }
        }
        if (repeats === seqLength) {
            for (var j = i; j < i + seqLength; j++) {
                numbers[j] = 'removed';
            }
        }
    }

    var currentNumberPositon = 0;
    for (var row = 0; row < matrix.length; row++) {
        var currentRow = [];
        for (var col = 0; col < matrix[row].length; col++) {
            if (numbers[currentNumberPositon] !== 'removed') {
                currentRow.push(matrix[row][col]);
            }
            currentNumberPositon++;
        }
        if (currentRow.length > 0) {
            console.log(currentRow.join(' '))
        }
        else {
            console.log("(empty)");
        }
    }
}

//solve([
//          '3 3 3 2 5 9 9 9 9 1 2',
//          '1 1 1 1 1 2 5 8 1 1 7',
//          '7 7 1 2 3 5 7 4 4 1 2',
//          '2'
//      ]);

//solve([
//          '1 2 3 3',
//          '3 5 7 8',
//          '3 2 2 1',
//          '3'
//      ]);

solve([
          '2 1 1 1',
          '1 1 1',
          '3 7 3 3 1',
          '2'
      ]);