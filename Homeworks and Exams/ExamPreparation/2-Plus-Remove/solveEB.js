function solve(input) {
    var matrix = [];
    var resultMatrix = [];
    input.forEach(function(inputLine) {
        matrix.push(inputLine.toLowerCase()
                             .split(''));
        resultMatrix.push(inputLine.split(''));
    });

    for (var row = 1; row < matrix.length - 1; row++) {
        for (var col = 1; col < matrix[row].length - 1; col++) {
            var char = matrix[row][col];
            var isPlus =
                    matrix[row - 1][col] == char &&
                    matrix[row + 1][col] == char &&
                    matrix[row][col - 1] == char &&
                    matrix[row][col + 1] == char;

            if (isPlus) {
                resultMatrix[row][col] = undefined;
                resultMatrix[row - 1][col] = undefined;
                resultMatrix[row + 1][col] = undefined;
                resultMatrix[row][col - 1] = undefined;
                resultMatrix[row][col + 1] = undefined;
            }
        }
    }
    // niama znachenie, che e dvumeren masiv, filter minava po vsichki elementi i gi filtrira, ne traibva da iterirame po row i col
    var resultArray = resultMatrix.filter(function(str) {
        return str !== undefined;
    });

    resultArray.forEach(function(item) {
        console.log(item.join(''));
    });
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

var arr = [];
require('readline')
.createInterface({
                     input : process.stdin,
                     output: process.stdout
                 })
.on('line', function(line) {
    arr.push(line);
})
.on('close', function() {
    solve(arr);
});