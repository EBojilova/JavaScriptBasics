function solve(input) {

    var filterInfo = input[input.length - 1];

    var dataArray = {};
    for (var row = 0; row < input.length - 1; row++) {
        var arrayInfo = input[row].split(/\.*\*\.*/g);
        var ownerName = arrayInfo[0];
        var luggageName = arrayInfo[1];
        var isFood = (arrayInfo[2] === 'true');
        var isDrink = (arrayInfo[3] === 'true');
        var isFragile = (arrayInfo[4] === 'true');
        var weight = parseFloat(arrayInfo[5]);
        var transferredWith = arrayInfo[6];

        if (!(ownerName in dataArray)) {
            dataArray[ownerName] = {};
        }

        var type = '';
        if (isFood) {
            type = 'food';
        }
        else if (isDrink) {
            type = 'drink';
        }
        else {
            type = 'other';
        }

        dataArray[ownerName][luggageName] = {
            'kg'             : weight,
            'fragile'        : isFragile,
            'type'           : type,
            'transferredWith': transferredWith
        };
    }

    // output
    if (filterInfo === 'luggage name' || filterInfo === 'weight') {

        var outputLuggageSort = {};
        Object.keys(dataArray)
              .forEach(function(name) {
                  outputLuggageSort[name] = {};
                  var sortedInnerKeys;
                  if (filterInfo === 'luggage name') {
                      sortedInnerKeys = Object.keys(dataArray[name])
                                              .sort();
                  }
                  else if (filterInfo === 'weight') {
                      sortedInnerKeys = Object.keys(dataArray[name])
                                              .sort(function(luggage1, luggage2) {
                                                  return dataArray[name][luggage1].kg - dataArray[name][luggage2].kg;
                                              });
                  }
                  sortedInnerKeys.forEach(function(luggage) {
                      outputLuggageSort[name][luggage] = dataArray[name][luggage];
                  })
              });
        console.log(JSON.stringify(outputLuggageSort));
    }
    else if (filterInfo === 'strict') {
        console.log(JSON.stringify(dataArray));
    }
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

//var arr = [];
//require('readline')
//.createInterface({
//                     input : process.stdin,
//                     output: process.stdout
//                 })
//.on('line', function(line) {
//    arr.push(line);
//})
//.on('close', function() {
//    solve(arr);
//});

solve ([
    'Yana Slavcheva...*..clothes..*false*false......*...false..*..2.2..*.backpack',
    'Kiko..*...socks..*false*false......*...false..*..0.2..*.backpack',
    'Kiko....*...banana..*true*false......*...false..*..3.2..*.backpack',
    'Kiko......*...sticks..*false.....*false......*...false..*..1.6..*.ATV',
    'Kiko*...glasses..*false*...false......*...true..*..3..*.ATV',
    'Manov..*...socks..*false*false....*...false..*0.3..*.ATV',
    'strict']);