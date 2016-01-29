"use strict";
function evaluate(array) {
    var name, luggageName, isFood, isDrink, isFragile, weight, transferredWith;
    var type;

    var sorting = array.pop(array.length - 1);

    var tourists = {};

    for (var line in array) {
        var lineArray = array[line].split(/\.*\*\.*/g);
        name = lineArray[0];
        luggageName = lineArray[1];
        isFood = lineArray[2]==='true';
        isDrink = lineArray[3]==='true';
        isFragile = lineArray[4]==='true';
        weight = parseFloat(lineArray[5]);
        transferredWith = lineArray[6];

        type = "other";
        if (isFood ) {
            type = "food";
        }
        else if (isDrink) {
            type = "drink";
        }

        if (!tourists[name]) {
            tourists[name] = {};
        }

        tourists[name][luggageName] = {
            kg             : weight,
            fragile        : isFragile,
            type           : type,
            transferredWith: transferredWith
        };
    }

    var name, currentTourist, luggageNames, sortedLuggage, i, w;
    switch (sorting) {
        case "luggage name":
        case "weight":
            sortedLuggage = {};
            for (name in tourists) {
                luggageNames = Object.keys(tourists[name]);
                if(sorting==='luggage name'){
                    luggageNames.sort();
                }
                else if(sorting==='weight'){
                    luggageNames.sort(function(luggage1, luggage2) {
                        return tourists[name][luggage1].kg - tourists[name][luggage2].kg;
                    })
                }

                sortedLuggage[name]={};
                for (i in luggageNames) {
                    var luggage= luggageNames[i];
                    sortedLuggage[name][luggage] = tourists[name][luggage];
                }
            }
            console.log(JSON.stringify(sortedLuggage));
            return;
            break;
        default:
            console.log(JSON.stringify(tourists));
            return;
            break;
    }
}

var input = [
    "Yana Slavcheva.*.clothes.*.false.*.false.*.false.*.2.2.*.backpack",
    "Kiko.*.socks.*.false.*.false.*.false.*.0.2.*.backpack",
    "Kiko.*.banana.*.true.*.false.*.false.*.3.2.*.backpack",
    "Kiko.*.sticks.*.false.*.false.*.false.*.1.6.*.ATV",
    "Kiko.*.glasses.*.false.*.false.*.true.*.3.*.ATV",
    "Manov.*.socks.*.false.*.false.*.false.*.0.3.*.ATV",
    "weight"
];
evaluate(input);