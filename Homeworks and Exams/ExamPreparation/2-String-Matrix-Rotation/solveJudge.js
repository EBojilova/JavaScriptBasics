function matrixRotation(input) {
    // Read and parse the rotation command    
    var command = input[0];
    var degrees = command.replace(/[^0-9]/g, '') % 360;
    
    // Create the matrix of chars for rotation
    var matrix = [];
    var len = 0;
    for (var i = 1; i < input.length; i++) {
        var line = input[i];
        matrix.push(line.split(''));
        if (line.length > len) {
            len = line.length;
        }
    }
    
    // Pad the shorter lines with spaces at the end
    for (var i = 0; i < matrix.length; i++) {
        while (matrix[i].length < len) {
            matrix[i].push(' ');
        }
    }
    
    //console.log(matrix);
    
    // Rotate the matrix to 90 degrees (degrees / 90) times
    while (degrees > 0) {
        matrix = rotate90degrees(matrix);
        degrees -= 90;
    }

    //console.log(matrix);
    
    for (var i in matrix) {
        console.log(matrix[i].join(''));
    }

    function rotate90degrees(matrix) {
        var height = matrix.length - 1;
        var width = matrix[0].length - 1;
        var rotated = new Array(width);
        for (var col = 0; col <= width; col++) {
            rotated[col] = new Array(height);
            for (var row = 0; row <= height; row++) {
                rotated[col][height - row] = matrix[row][col];
            }
        }
        return rotated;
    }
}


// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

var arr = [];
require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
}).on('line', function (line) {
    arr.push(line);
}).on('close', function () {
    matrixRotation(arr);
});
