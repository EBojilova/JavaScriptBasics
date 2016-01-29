function solve(input) {
    function removeEmptyEntries(element) {
        return element;
    }

    var garden     = [],
        directions = input[0].split(', ')
                             .filter(removeEmptyEntries),
        moves      = [],
        rowPos     = 0,
        colPos     = 0,
        gosho      = {
            '&'        : 0,
            '*'        : 0,
            '#'        : 0,
            '!'        : 0,
            'wall hits': 0
        };
    for (var i = 1; i < input.length; i++) {
        garden.push(input[i].split(', ')
                            .filter(removeEmptyEntries));
    }

    directions.forEach(moveToDirection);

    console.log(JSON.stringify(gosho));
    console.log(moves.length > 0 ?
                moves.join('|') :
                'no');

    function moveToDirection(direction) {
        if (direction === 'right') {
            changePosition(0, 1);
        }
        else if (direction === 'left') {
            changePosition(0, -1);
        }
        else if (direction === 'up') {
            changePosition(-1, 0);
        }
        else if (direction === 'down') {
            changePosition(1, 0);
        }
    }

    function changePosition(rowChange, colChange) {
        var row = rowPos + rowChange;
        var col = colPos + colChange;
        var isInsideCols = (col >= 0) && (col < garden[rowPos].length);
        var isInsideRows = (row >= 0) && (row < garden.length);
        if (isInsideRows && isInsideCols) {
            rowPos = row;
            colPos = col;
            checkVegetable();
        }
        else {
            gosho['wall hits']++;
        }
    }

    function checkVegetable() {
        garden[rowPos][colPos] = garden[rowPos][colPos].replace(/{([&*!#])}/g, function(match, group) {
            gosho[group] += 1;
            // zameniame celia match
            return '@';
        });
        moves.push(garden[rowPos][colPos]);
    }
}

//solve([
//          'right',
//          'qwekjs, asd{#}a',
//          'qwekjs, asd{#}a'
//      ]);

solve([
          'right, up, up, down',
          'asdf, as{#}aj{g}dasd, kjldk{}fdffd, jdflk{#}jdfj',
          'tr{X}yrty, zxx{*}zxc, mncvnvcn, popipoip',
          'poiopipo, nmf{X}d{X}ei, mzoijwq, omcxzne'
      ]);

solve([
          'up, right, left, down',
          'as{!}xnk'
      ]);