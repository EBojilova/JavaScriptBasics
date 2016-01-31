"use strict";
function solve(input) {
    var matrix = [];
    input.forEach(function(inputLine) {
        matrix.push(inputLine.split(''));
    });
    var result = {
        "I": 0,
        "L": 0,
        "J": 0,
        "O": 0,
        "Z": 0,
        "S": 0,
        "T": 0
    };

    for (var row = 0; row < matrix.length; row++) {
        for (var col = 0; col < matrix[0].length; col++) {
            result.I += countShape( row, col, row + 1, col, row + 2, col, row + 3, col);
            result.L += countShape( row, col, row + 1, col, row + 2, col, row + 2, col + 1);
            result.J += countShape( row, col, row + 1, col, row + 2, col, row + 2, col - 1);
            result.O += countShape( row, col, row + 1, col, row, col + 1, row + 1, col + 1);
            result.Z += countShape( row, col, row, col + 1, row + 1, col + 1, row + 1, col + 2);
            result.S += countShape( row, col, row, col + 1, row - 1, col + 1, row - 1, col + 2);
            result.T += countShape (row, col, row, col + 1, row + 1, col + 1, row, col + 2);
        }
    }

    console.log(JSON.stringify(result));

    function countShape(row1, col1, row2, col2, row3, col3, row4, col4) {
        if (matrix[row1] &&
            matrix[row2] &&
            matrix[row3] &&
            matrix[row4]
        )  {
            if (matrix[row1][col1] == 'o' &&
                matrix[row2][col2] == 'o' &&
                matrix[row3][col3] == 'o' &&
                matrix[row4][col4] == 'o') {
                return 1;
            }
        }
        return 0;
    }
}

solve([
          '--o--o-',
          '--oo-oo',
          'ooo-oo-',
          '-ooooo-',
          '---oo--'
      ]);
