function solve(arr) {
    var matrix = [];
    var seqLength = Number(arr[arr.length - 1]);
    for (var i = 0; i < arr.length - 1; i++) {
        var obj = arr[i].split(' ');
        matrix.push(obj);
    }
    var numbers = [].concat.apply([], matrix);
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
    for (var i = 0; i < matrix.length; i++) {
        var row = numbers.splice(0, matrix[i].length)
                         .filter(function(x) {
                             return x !== 'removed';
                         });
        if (row.length) {
            console.log(row.join(' '));
        }
        else {
            console.log('(empty)');
        }
    }
}

solve([
          '2 1 1 1',
          '1 1 1',
          '3 7 3 3 1',
          '2'
      ])