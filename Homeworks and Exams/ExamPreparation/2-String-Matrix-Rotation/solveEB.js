"use strict";
function solve(input) {
    // Read and parse the rotation command
    var command = input[0];
    var degrees = command.replace(/[^0-9]/g, '') % 360;

    // Create the matrix of chars for rotation
    var matrix = [];
    var width = 0;
    for (var i = 1; i < input.length; i++) {
        var line = input[i];
        matrix.push(line.split(''));
        if (line.length > width) {
            width = line.length;
        }
    }

    // Pad the shorter lines with spaces at the end
    for (i = 0; i < matrix.length; i++) {
        while (matrix[i].length < width) {
            matrix[i].push(' ');
        }
    }
    var height = matrix.length;

    // Rotate the matrix
    var result;
    if (degrees == 0) {
        for (var row = 0; row < height; row++) {
            console.log((matrix[row].join('')));
        }
    }

    else if (degrees == 180) {
        for (row = height - 1; row >= 0; row--) {
            result = "";
            for (var col = width - 1; col >= 0; col--) {
                result += (matrix[row][col]);
            }
            console.log(result);
        }
    }
    else if (degrees == 90) {
        for (col = 0; col < width; col++) {
            result = "";
            for (row = height - 1; row >= 0; row--) {
                result += (matrix[row][col]);
            }
            console.log(result);
        }
    }
    else if (degrees == 270) {
        for (col = width - 1; col >= 0; col--) {
            result = "";
            for (row = 0; row < height; row++) {
                result += (matrix[row][col]);
            }
            console.log(result);
        }
    }
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

solve([
          'Rotate(90)',
          'hello',
          'softuni',
          'exam'
      ]);

console.log();

solve([
          'Rotate(90)',
          'hello',
          'softuni',
          'exam'
      ]);

console.log();

solve([
          'Rotate(180)',
          'hello',
          'softuni',
          'exam'
      ]);

console.log();

solve([
          'Rotate(720)',
          'js',
          'exam'
      ]);

console.log();

solve([
          'Rotate(810)',
          'js',
          'exam'
      ]);

console.log();

solve([
          'Rotate(0)',
          'js',
          'exam'
      ]);