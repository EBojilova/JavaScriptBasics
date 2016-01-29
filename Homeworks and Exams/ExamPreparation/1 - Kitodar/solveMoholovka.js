function solve(arr) {
    var result = {
        silver  : 0,
        gold    : 0,
        diamonds: 0
    };
    // ne triabva da ima g nakraia v regexa za da machva exec vsichki rezultati
    var regex = /mine.+-\s*(gold|silver|diamonds)\s*:\s*(\d+)[ "]*/;
    var match;

    for (var i = 0; i < arr.length; i++) {
        if (match = regex.exec(arr[i].trim())) {
            var material = match[1];
            var quantity = Number(match[2]);
            result[material] += quantity;
        }
    }

    console.log('*Silver: ' + result.silver);
    console.log('*Gold: ' + result.gold);
    console.log('*Diamonds: ' + result.diamonds);
}

solve([
          'mine bobovDol - gold : 10',
          'mine medenRudnik - silver : 22',
          'mine chernoMore - shrimps : 24',
          'gold:50'
      ]);

console.log();

solve([
          'mine bobovdol - gold : 10',
          'mine - diamonds : 5',
          'mine colas - wood : 10',
          'mine myMine - silver :  14',
          'mine silver:14 - silver : 14'
      ]);