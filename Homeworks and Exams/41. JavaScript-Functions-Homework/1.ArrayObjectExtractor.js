var inputs = [
    "Pesho",
    4,
    4.21,
    {
        name: 'Valyo',
        age : 16
    },
    {
        type : 'fish',
        model: 'zlatna ribka'
    },
    [
        1,
        2,
        3
    ],
    "Gosho",
    {
        name  : 'Penka',
        height: 1.65
    }
];

var objects = [];
var count = inputs.length;
// http://stackoverflow.com/questions/3250379/what-is-the-call-function-doing-in-this-javascript-statement/3250415#3250415
for (var i in inputs) {
    if (Object.prototype.toString.call(inputs[i]) === "[object Object]") {
        objects.push(inputs[i]);
    }
}

console.log(objects);