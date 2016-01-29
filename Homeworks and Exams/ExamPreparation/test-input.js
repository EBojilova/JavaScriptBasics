function solve(input) {
    console.log(input);
}

var arr = [];
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
    if (line === "end") {
        rl.close();
    }
    arr.push(line);

}).on('close',function(){
    solve(arr);
});