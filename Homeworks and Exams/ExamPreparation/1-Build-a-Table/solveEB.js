"use strict";
function solve(input) {
    // mnogo e vajno da se parsvat chislata kam Num
    var startNum = Number(input[0]);
    var endNum = Number(input[1]);
    var fibNums = calcFibonacciNums(endNum);
    console.log('<table>');
    console.log('<tr><th>Num</th><th>Square</th><th>Fib</th></tr>');
    for (var num = startNum; num <= endNum; num++) {
        var numSquare = num * num;
        var isFibonacci = fibNums[num] ?
                          "yes" :
                          "no";
        console.log("<tr><td>%d</td><td>%d</td><td>%s</td></tr>", num, numSquare, isFibonacci);
    }
    console.log('</table>');

    function calcFibonacciNums(maxNum) {
        var fibNums = {1: true};
        var f1 = 1;
        var f2 = 1;
        while (true) {
            var f3 = f1 + f2;
            if (f3 > maxNum) {
                return fibNums;
            }
            fibNums[f3] = true;
            f1 = f2;
            f2 = f3;
        }
    }
}

solve([
          '2',
          '6'
      ]);
