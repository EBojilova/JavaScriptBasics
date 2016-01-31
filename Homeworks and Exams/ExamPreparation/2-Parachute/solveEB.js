"use strict";
function solve(chart) {

    for (var row in chart) {
        if (col !== undefined) {
            //Checks the next move
            findCol(col);

            if (chart[row].charAt(col) == '/' ||
                chart[row].charAt(col) == '\\' ||
                chart[row].charAt(col) == '|') {
                console.log('Got smacked on the rock like a dog!');
                console.log(row, col);
                break;
            }
            else if (chart[row].charAt(col) == '~') {
                console.log('Drowned in the water like a cat!');
                console.log(row, col);
                break;
            }
            else if (chart[row].charAt(col) == '_') {
                console.log('Landed on the ground like a boss!');
                console.log(row, col);
                break;
            }
        }

        if (col === undefined) {
            //Finding the starting position
            var col = findStartingPos();
        }

    }

    function findStartingPos() {
        for (var col = 0; col < chart[row].length; col++) {
            if (chart[row][col] == 'o') {
                return col;
            }
        }
    }

    function findCol() {
        for (var i = 0; i < chart[row].length; i++) {
            var currentChar = chart[row].charAt(i);
            if (currentChar == '>') {
                col++;
            }
            else if ((currentChar) == '<') {
                col--;
            }
        }
    }
}

//solve(
//    [
//        "-------------o-<<--------",
//        "-------->>>>>------------",
//        "---------------->-<---<--",
//        "------<<<<<-------/\\--<--",
//        "--------------<--/-<\\----",
//        ">>--------/\\----/<-<-\\---",
//        "---------/<-\\--/------\\--",
//        "<-------/----\\/--------\\-",
//        "\\------/--------------<-\\",
//        "-\\___~/------<-----------"
//    ]);

solve([
          'o----------/-------------',
          '-------->>/-->>-->><<----',
          '----------\--->>>>-------',
          '-----------\_________>---',
          '---------------------\>--',
          '>>>>>>----------------\-<',
          '------>>>>------------/--',
          '---------------------/---',
          '--------------------/----',
          '-------------------/-----'
      ]);