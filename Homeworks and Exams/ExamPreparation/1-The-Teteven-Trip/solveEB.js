function solve(input) {
    var output = "";
    for (var row = 0; row < input.length; row++) {
        var tempRow = input[row].split(' ');
        var car = tempRow[0];
        var fuel = tempRow[1];
        var trace = tempRow[2];
        var baggage = parseFloat(tempRow[3]);
        var finalConsumption = calculateFinalConsumption(trace, fuel, baggage);
        finalConsumption = Math.round(finalConsumption);
        
        output += car + ' ' + fuel + ' ' + trace + ' ' + finalConsumption + "\n";
    }
    console.log(output);

    function calculateFinalConsumption(trace, fuelType, baggage) {
        var averageConsumption = getConsumptionByFuel(fuelType) + getOverFuelConsumption(baggage);
        if (trace === '1') {
            var consumptionInSnow = calculateOverConsumptionInSnow(10, averageConsumption);
            var calculatedConsumption = consumptionInSnow + ((averageConsumption / 100) * 110)
        }
        else {
            var consumptionInSnow = calculateOverConsumptionInSnow(30, averageConsumption);
            var calculatedConsumption = consumptionInSnow + ((averageConsumption / 100) * 95 )
        }

        return calculatedConsumption;
    }

    function getConsumptionByFuel(fuelType) {
        var BASE_CONSUMPTION = 10;
        if (fuelType === 'petrol') {
            return 1 * BASE_CONSUMPTION;
        }
        else if (fuelType === 'diesel') {
            return 0.8 * BASE_CONSUMPTION;
        }
        else if (fuelType === 'gas') {
            return 1.2 * BASE_CONSUMPTION;
        }
    }
    
    function getOverFuelConsumption(baggage) {
        var overFuel = 0.01 * baggage;
        return overFuel;
    }
    
    function calculateOverConsumptionInSnow(km, averageConsumption) {
        return (0.3 * averageConsumption / 100) * km;
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

solve([
          'BMW petrol 1 320.5',
          'Golf petrol 2 150.75',
          'Lada gas 1 202',
          'Mercedes diesel 2 312.54'
      ]);