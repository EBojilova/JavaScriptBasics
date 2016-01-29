"use strict";
function solve(chart) {

    for (var row in chart) {
        if (parachutistPositon) {
            //Checks the next move
            var col = checkNextMove(parachutistPositon.col);

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
                console.log(row,col);
                break;
            }

            parachutistPositon.col = col;
        }

        if (!parachutistPositon) {
            //Finding the starting position
            var parachutistPositon = findStartingPos();
        }

    }

    function findStartingPos() {
        for (var col = 0; col < chart[row].length; col++) {
            if (chart[row][col] == 'o') {
                return {
                    col: col
                };
            }
        }
    }

    function checkNextMove( col) {
        var windDirection = 0;
        for (var i = 0; i < chart[row].length; i++) {
            if (chart[row].charAt(i) == '>') {
                windDirection += 1;
            }
            else if (chart[row].charAt(i) == '<') {
                windDirection -= 1;
            }
        }
        return  col + windDirection;
    }
}

solve(
    [
        "-------------o-<<--------",
        "-------->>>>>------------",
        "---------------->-<---<--",
        "------<<<<<-------/\\--<--",
        "--------------<--/-<\\----",
        ">>--------/\\----/<-<-\\---",
        "---------/<-\\--/------\\--",
        "<-------/----\\/--------\\-",
        "\\------/--------------<-\\",
        "-\\___~/------<-----------"
    ]);