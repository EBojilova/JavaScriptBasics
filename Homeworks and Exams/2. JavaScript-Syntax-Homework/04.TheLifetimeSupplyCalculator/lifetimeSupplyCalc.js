var inputs = [[38, 118, 'chocolate', 0.5], [20, 87, 'fruits', 2], [16, 102, 'nuts', 1.1]];

var count = inputs.length;
for (var i = 0; i < count; i++) {
    var age = inputs[i][0];
    var maxAge = inputs[i][1];
    var food = inputs[i][2];
    var foodPerDay = inputs[i][3];
    var foodAmount = calcSupply(age, maxAge, foodPerDay);
    printSupply(foodAmount, food, maxAge);
}

function calcSupply(age, maxAge, foodPerDay) {
    var foodAmount = (maxAge - age) * 365 * foodPerDay;
    return foodAmount;
}

function printSupply(foodAmount, food, maxAge) {
    console.log("%skg of %s would be enough until I am %s years old.", foodAmount, food, maxAge)
}