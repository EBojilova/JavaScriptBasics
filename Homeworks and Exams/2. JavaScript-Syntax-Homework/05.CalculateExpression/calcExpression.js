function calcExpression() {
    //https://mhseptiadi.wordpress.com/2011/03/14/javascript-calculator-using-eval/
    var input = document.getElementById('input').value;
    document.getElementById('output').innerHTML = eval(input).toString();
}

