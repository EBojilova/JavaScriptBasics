//var num = parseInt(prompt("Enter a number:"));
num =Number(prompt("Enter a Number"));
decToHex(num);

function decToHex(num){
    var result = num.toString(16).toUpperCase();
    alert(result);
}