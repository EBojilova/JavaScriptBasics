//declare the variables
var arr = ["Pesho", 2, "Gosho", 12, 2, "true", 9, undefined, 0, "Penka", {bunniesCount:10}, [10, 20, 30, 40]];
var numArray = [];
var counter = 1;
var currentCount = 1;
var frequent;

//push only numbers to a new array
//http://stackoverflow.com/questions/18082/validate-decimal-numbers-in-javascript-isnumeric
function isNumber(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
    // return n === Number(n);
}
numArray=arr.filter(isNumber);


//sort the new array
function sortNumber(a, b) {
    return a - b;
}
numArray.sort(sortNumber);

//print min and max number
console.log("Min number: " + numArray[0]);
console.log("Max number: " + numArray[numArray.length - 1]);

//by default the most frequent is the leftmost
frequent = numArray[0];

//check which number is the most frequent one
//http://stackoverflow.com/questions/3783950/get-the-item-that-appears-the-most-times-in-an-array
for (var i = 1; i < numArray.length - 1; i++) {
    if (numArray[i] === numArray[i - 1]) {
        currentCount++;
        if (currentCount > counter && numArray[i] !== numArray[i + 1]) {
            counter = currentCount;
            currentCount = 1;
            frequent = numArray[i];
        }
    }
}

//print the most frequent number and the reversed array
console.log("Most frequent number: " + frequent);
numArray.reverse();
console.log("[%s]", numArray.join(', '));

