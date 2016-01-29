function solve(input) {
    var maxSum = Number.NEGATIVE_INFINITY;
    // we skip first and last input lines
    for (var i = 2; i < input.length - 1; i++) {
        var regex = /<td>(.*?)<\/td>/g;
        var sum    = 0,
            values = [],
            match;
        while (match = regex.exec(input[i])) {
            var num = Number(match[1]);
            if (!isNaN(num)) {
                values.push(match[1]);
                sum += num;
            }
        }

        if (sum > maxSum && values.length > 0) {
            maxSum = sum;
            var maxSumDetails = values.join(' + ');
        }
    }
    if (maxSumDetails) {
        console.log(maxSum + ' = ' + maxSumDetails);
    }
    else {
        console.log("no data");
    }
}

solve([
          '<table>',
          '<tr><th>Town</th><th>Store1</th><th>Store2</th><th>Store3</th></tr>',
          '<tr><td>Sofia</td><td>26.2</td><td>8.20</td><td>-</td></tr>',
          '<tr><td>Varna</td><td>11.2</td><td>18.00</td><td>36.10</td></tr>',
          '<tr><td>Plovdiv</td><td>17.2</td><td>12.3</td><td>6.4</td></tr>',
          '<tr><td>Bourgas</td><td>-</td><td>24.3</td><td>-</td></tr>',
          '</table>'
      ]);