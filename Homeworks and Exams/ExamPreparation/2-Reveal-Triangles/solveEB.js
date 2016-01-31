function solve(input) {
    // Initialize the output as char[][], holding the input chars
    var output = [];
    input.forEach(function(str) {
        output.push(str.split(''));
    });

    // Replace all triangles with '*' (with overlapping)
    for (var row = 0; row < input.length - 1; row++) {
        var maxCol = Math.min(
            input[row].length,
            input[row + 1].length - 1);
        for (var col = 1; col < maxCol; col++) {
            var a = input[row][col];
            var b = input[row + 1][col];
            var c = input[row + 1][col - 1];
            var d = input[row + 1][col + 1];
            if (a == b && b == c && c == d) {
                // Triangle found --> fill it with '*'
                output[row][col] = '*';
                output[row + 1][col] = '*';
                output[row + 1][col - 1] = '*';
                output[row + 1][col + 1] = '*';
            }
        }
    }

    // Print the result
    output.forEach(function(str) {
        console.log(str.join(''));
    })
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// -----------------------------------------------------------

solve([
          'abcdexgh',
          'bbbdxxxh',
          'abcxxxxx'
      ]);
