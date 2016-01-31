function solve(input) {
    var result = {
        silver  : 0,
        gold    : 0,
        diamonds: 0
    };

    input.forEach(function(inputLine) {
        if (inputLine.trim()
                     .substr(0, 4) === 'mine') {
            var data = inputLine.split(/\s*-\s*/)[1];
            if (data) {
                data = data.split(/\s*:\s*/);
                var type = data[0].trim()
                                  .toLocaleLowerCase();
                var quantity = Number(data[1]);
                if (result[type] !== "undefined" && quantity) {
                    result[type] += quantity;
                }
            }

        }
    });

    console.log('*Silver: ' + result.silver);
    console.log('*Gold: ' + result.gold);
    console.log('*Diamonds: ' + result.diamonds);
}

//solve([
//          'mine bobovDol - gold : 10',
//          'mine medenRudnik - silver : 22',
//          'mine chernoMore - shrimps : 24',
//          'gold:50'
//      ]);
//
//console.log();
//
//solve([
//          'mine bobovdol - gold : 10',
//          'mine - diamonds : 5',
//          'mine colas - wood : 10',
//          'mine myMine - silver :  14',
//          'mine silver:14 - silver : 14'
//      ]);

//solve([
//          'mine mina - gold - 5',
//          'mine mina - silver - 5',
//          'mine mina - diamonds : 5',
//          'mine mina - gold:5'
//      ]);

solve([
          'mine mina - golD : 5',
          'mine mina: gold: 5'
      ]);