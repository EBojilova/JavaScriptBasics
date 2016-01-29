function solve(input) {
    var maxJumps    = Number(input[0]),
        trackLength = Number(input[1]),
        flees       = [],
        winner      = undefined;

    for (var i = 2; i < input.length; i++) {
        var fleeInfo = input[i].split(/[, ]+/g)
                               .filter(function(element) {
                                   return element;
                               });
        flees.push({
                       initial     : fleeInfo[0][0].toUpperCase(),
                       name        : fleeInfo[0],
                       jumpDistance: Number(fleeInfo[1]),
                       index       : 0
                   });
    }

    for (i = 0; i < maxJumps; i++) {
        flees.every(function(flee) {
            flee.index += flee.jumpDistance;
            if (flee.index  >= trackLength - 1) {
                winner = flee;
                flee.index = trackLength - 1;
                return false;
            }
            return true;
        });

        if (winner) {
            break;
        }
    }

    var tribunes = new Array(trackLength + 1).join('#');
    console.log(tribunes);
    console.log(tribunes);
    flees.forEach(function(flee) {
        var fleeTrack = Array.apply(null, new Array(trackLength))
                             .map(function() {
                                 return '.';
                             });
        fleeTrack[flee.index] = flee.initial;
        console.log(fleeTrack.join(''));
    });
    console.log(tribunes);
    console.log(tribunes);

    if (!winner) {
        var maxPos = 0;
        flees.forEach(function(flee) {
            if (flee.index >= maxPos) {
                maxPos = flee.index;
                winner = flee;
            }
        })
    }
    console.log('Winner: ' + winner.name);
}

//solve(
//    [
//        '3',
//        '40',
//        'S, 5',
//        'L, 1',
//        'O, 7',
//        'C, 3',
//        'H, 10',
//        'A, 12',
//        'I, 5',
//        'N, 8',
//        'O, 0',
//        'S, 6'
//    ]
//);

solve(
    [
        '10',
        '19',
        'angel, 9',
        'Boris, 10',
        'Georgi, 3',
        'Dimitar, 7'
    ]
);