function solve(input) {
    var result = [], seq = Number(input[input.length - 1]), strArr, str = '', inner = 1;
    for (var i = 0; i < input.length - 1; i++) {
        result.push(input[i].split(' '));
        str += input[i] + ' ';
    }

    strArr = str.trim()
                .split(' ')
                .filter(function(el) {
                    return el !== '';
                });

    for (var j = 1; j < strArr.length; j++) {
        var current = strArr[j];
        var prev = strArr[j - 1];

        if (current === prev) {
            inner++;
            if (inner === seq) {
                var k = j;
                for (var l = 0; l < seq; l++) {
                    strArr[k] = 'toRemove';
                    k--;
                }
                inner = 1;
            }
        }
    }

    var index = 0;
    for (var row = 0; row < result.length; row++) {
        var currentRow = result[row];
        for (var col = 0; col < currentRow.length; col++) {
            result[row][col] = strArr[index];
            index++;
        }
    }

    result.forEach(function(el) {
        el = el.filter(function(value) {
            return value !== 'toRemove';
        });

        if (el.length > 0) {
            console.log(el.join(' ')
                          .trim());
        }
        else {
            console.log('(empty)');
        }
    });

    //console.log(result);
}