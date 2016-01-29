var inputs = [[2, 4], [5, 8], [12, 3]];
var count = inputs.length;
for (var i = 0; i < count; i++) {
    calcCylinderVol(inputs[i]);
}

function calcCylinderVol(arr) {
    var volume = Math.PI * arr[0] * arr[0] * arr[1];
    console.log(volume.toFixed(3));
}

