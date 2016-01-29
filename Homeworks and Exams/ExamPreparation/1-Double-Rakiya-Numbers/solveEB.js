function solve(input) {
    // mnogo e vajno da se parsva tuka kam Number
    var startNum = Number(input[0]);
    var endNum = Number(input[1]);
    console.log("<ul>");
    for (var num = startNum; num <= endNum; num++) {
        if (isDoubleRakiyaNum(num)) {
            // ima greshka v Judge i zatova sam mahnala vtorite kavichki v linka \"view.php?id=%d\"
            console.log("<li><span class='rakiya'>%d</span><a href=\"view.php?id=%d>View</a></li>", num, num);
        }
        else {
            console.log("<li><span class='num'>%d</span></li>", num);
        }
    }
    console.log("</ul>");

    function isDoubleRakiyaNum(num) {
        var regex = /\d*(\d{2})\d*\1\d*/;
        var hasMatch = regex.test(num);
        if (hasMatch) {
            return true;
        }
        return false;
    }
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

//var arr = [];
//require('readline').createInterface({
//    input: process.stdin,
//    output: process.stdout
//}).on('line', function (line) {
//    arr.push(line);
//}).on('close', function () {
//    doubleRakiyaNumbers(arr);
//});

solve([
          '5',
          '8'
      ]);

solve([
          '55555',
          '55560'
      ]);

solve([
          '11210',
          '11215'
      ]);