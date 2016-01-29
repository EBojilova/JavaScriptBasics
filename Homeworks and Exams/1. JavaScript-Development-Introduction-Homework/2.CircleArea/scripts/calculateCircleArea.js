var r    = 7;
var area = calcCircleArea(r);
printCircleArea(r, area);

r    = 1.5;
area = calcCircleArea(r);
printCircleArea(r, area);

r    = 20;
area = calcCircleArea(r);
printCircleArea(r, area);

function calcCircleArea(r) {
    var area = r * r * Math.PI;
    return area;
}

function printCircleArea(r, area) {
    var output = "r = " + r + "; area = " + area + "\n";
    document.body.innerText += output;
}