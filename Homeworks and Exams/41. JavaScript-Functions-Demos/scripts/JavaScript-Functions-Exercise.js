function solve(input) {
    function newString(char, count) {
        for (j = 0; j < count; j++) {
            output += char;
        }
    }

    function drawLine() {
        newString('.', dots);
        newString('*', stars);
        newString('.', dots);
    }

    var n      = Number(input[0]),
        stars  = n,
        dots   = 0,
        i, j, k,
        output = "";
    for (i = 0; i < n / 2; i++) {
        drawLine();
        output += "\n";
        stars -= 2;
        dots++;
    }
    dots--;
    stars += 2;
    for (i = 0; i < n / 2 - 1; i++) {
        dots--;
        stars += 2;
        drawLine();
        output += "\n"
    }
    return output;
}

console.log(solve(['7']));