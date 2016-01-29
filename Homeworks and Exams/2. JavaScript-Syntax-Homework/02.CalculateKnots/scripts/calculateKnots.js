var input = [20, 112, 400];

for (i = 0; i < input.length; i++) {
    var knots = (input[i]/1.852).toFixed(2);
    printResult(input[i], knots);
    //console.log(knots);
}

function printResult(kmh, knots) {
    var output = kmh +"km/h are  " + knots + "knots"  + "\n";
    document.body.innerText += output;
}