function getInput() {
    var input = document.getElementById("input").value;
    var inputFloat = parseFloat(input, 10);
    return inputFloat;
}

function calc() {

    var r = getInput();
    var resultMessage;
    if (isNaN(r)) {
        console.log("NaN");
        resultMessage = "Please enter number";
    }
    else {
        var area = (Math.PI * Math.pow(r, 2));
        resultMessage = "r = " + r + "; area = " + area + "";
    }
    document.getElementById("result-box").innerHTML = resultMessage;
}
