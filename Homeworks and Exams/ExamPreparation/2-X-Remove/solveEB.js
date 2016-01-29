function solve(arr) {
    var matrix = [];
    var resultMatrix = [];

    arr.forEach(function(string) {
        matrix.push(string.toLowerCase().split(''));
        resultMatrix.push(string.split(''));
    });

    // colonite ne gi namaliavame s 2, tai kato e jagget array
    for (var row = 0; row < matrix.length - 2; row++) {
        for (var col = 0; col < matrix[row].length; col++) {
            var char = matrix[row][col];
            var isX = matrix[row][col + 2] == char &&
                matrix[row + 1][col + 1] == char &&
                matrix[row + 2][col] == char &&
                matrix[row + 2][col + 2] == char;

            if (isX) {
                resultMatrix[row][col] = " ";
                resultMatrix[row][col + 2] = " ";
                resultMatrix[row + 1][col + 1] = " ";
                resultMatrix[row + 2][col] = " ";
                resultMatrix[row + 2][col + 2] = " ";
            }
        }
    }

    var resultArray = [];
    resultMatrix.forEach(function(str) {
        // za premahvane na praznite stringove
        // ako dam pechat tuka, dava timeout na 1-2 testa
        resultArray.push(str.join('').split(" ").join(''));
    });

    resultArray.forEach(function(item) {
        console.log(item);
    });
}

solve([
          '8888888',
          '08*8*80',
          '808*888',
          '0**8*8?'
      ]);
console.log();

solve([
          '^u^',
          'j^l^a',
          '^w^WoWl',
          'adw1w6',
          '(WdWoWgPoop)'
      ]);
console.log();

solve([
          'puoUdai',
          'miU',
          'ausupirina',
          '8n8i8',
          'm8o8a',
          '8l8o860',
          'M8i8',
          '8e8!8?!'
      ])