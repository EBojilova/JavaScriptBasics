function solve(input) {
    var stars = [];
    for (var i = 0; i < 3; i++) {
        var currentStar = input[i].split(/\s+/);
        stars[i] = {
            name: currentStar[[0]],
            x   : parseFloat(currentStar[1]),
            y   : parseFloat(currentStar[2])
        };
    }
    var normandy = {};
    var nInfo = input[3].split(/\s+/);
    normandy.x = parseFloat(nInfo[0]);
    normandy.y = parseFloat(nInfo[1]);
    var turns = parseInt(input[4]);

    stars = stars.filter(function(star) {
        var isOnXpath = (normandy.x >= star.x-1 && normandy.x <= star.x+1);
        return isOnXpath;
    });

    for (i = 0; i <= turns; i++) {
        var foundStar = false;
        for (var j = 0; j < stars.length; j++) {
            if (isInsideStar(normandy.x, normandy.y, stars[j].x, stars[j].y)) {
                console.log(stars[j].name.toLowerCase());
                foundStar = true;
                break;
            }
        }
        if (!foundStar) {
            console.log("space");
        }
        normandy.y++;
    }

    function isInsideStar(normandyX, normandyY, starX, starY) {
        return (normandyY >= starY - 1 && normandyY <= starY + 1);
    }
}

// ------------------------------------------------------------
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

solve([
          'Sirius 3 7',
          'Alpha-Centauri 7 5',
          'Gamma-Cygni 10 10',
          '8 1',
          '6'
      ]);
