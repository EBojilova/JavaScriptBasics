"use strict";
function solve(input) {
    var strDate,
        dateParts,
        date,
        min        = new Date("January 1, 1900"),
        breakPoint = new Date("May 25, 1973"),
        max        = new Date("January 1, 2015"),
        dateArray  = [],
        hasHater   = false,
        hasFan     = false;

    input.forEach(function(inputLine) {
        strDate = inputLine;
        dateParts = strDate.split('.');
        //new Date(year, month, day)
        date = new Date(dateParts[2], (dateParts[1] - 1), dateParts[0]);
        if (date > min && date < max) {
            if (date < breakPoint) {
                hasHater = true;
            }
            if (date >= breakPoint) {
                hasFan = true;
            }
            dateArray.push(date);
        }
    });

    if (!dateArray.length) {
        console.log('No result');
        return;
    }

    dateArray.sort(function(a, b) {
        return a.getTime() - b.getTime();
    });
    if (hasFan) {
        printResult(dateArray[dateArray.length - 1], 'fan');
    }
    if (hasHater) {
        printResult(dateArray[0], 'hater');
    }

    function printResult(date, type) {
        console.log('The biggest %s of ewoks was born on %s', type, date.toDateString());
    }
}

