function solve(input) {
    var text = input[0];
    var numbers = text.match(/[0-9]+/g);
    var result = numbers.map(function(number) {
        var hex = Number(number)
        .toString(16)
        .toUpperCase();
        var leadingZeros = 4 - hex.length;
        leadingZeros = new Array(leadingZeros + 1)
        .join('0');
        return '0x' + leadingZeros + hex;
    });
    console.log(result.join('-'));
}

solve(['5tffwj(//*7837xzc2---34rlxXP%$".']);
