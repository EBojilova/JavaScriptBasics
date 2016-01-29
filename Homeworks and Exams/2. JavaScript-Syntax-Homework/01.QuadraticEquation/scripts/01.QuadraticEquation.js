var result = '';

//function calcQuadraticEquasionUI() {
//    var a = Number(document.getElementById('a').value);
//    var b = Number(document.getElementById('b').value);
//    var c = Number(document.getElementById('c').value);
//
//    calculateRoots(a, b, c)
//}

function calcQuadraticEquasion() {
    var inputs = [[2, 5, -3], [2, -4, 2], [4, 2, 1]];
    var count = inputs.length;

    for (var i = 0; i < count; i++) {
        var a = inputs[i][0];
        var b = inputs[i][1];
        var c = inputs[i][2];

        calculateRoots(a, b, c)
    }
}

function calculateRoots(a, b, c) {
    var d = b * b - 4 * a * c;
    var x1 = (-b - Math.sqrt(d)) / (2 * a);
    var x2 = (-b + Math.sqrt(d)) / (2 * a);

    result += a + '*x' + '2'.sup() + ' + ' + b + '*x' + ' + ' + c + '=0' + "</br>";
    if (d === 0) {
        result += 'x' + '1'.sub() + ' = ' + 'x' + '2'.sub() + ' = ' + x1 + "</br>";
    }
    else if (d < 0) {
        result += 'No real roots\n';
    }
    else {
        result += 'x' + '1'.sub() + ' = ' + x1 + "</br>";
        result += 'x' + '2'.sub() + ' = ' + x2 + "</br>";
    }
    result+="</br>";
}

calcQuadraticEquasion();
document.getElementById('result').innerHTML = result;

