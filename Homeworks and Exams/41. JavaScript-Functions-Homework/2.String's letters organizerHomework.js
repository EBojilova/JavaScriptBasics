function sortLetters(str, isAscending) {
    var sortedValue;
    var arr = str.split("");

    switch (arguments.length) {
        case 1:
            return arr.sort(case_insensitive_comp_ascending);
        case 2:
            return isAscending
                ?
                   arr.sort(case_insensitive_comp_ascending)
                :
                   arr.sort(case_insensitive_comp_descending);
    }

    function case_insensitive_comp_ascending(a, b) {
        return a.toLowerCase()
                .localeCompare(b.toLowerCase());
    }

    function case_insensitive_comp_descending(a, b) {
        return b.toLowerCase()
                .localeCompare(a.toLowerCase());
    }
}

var value = sortLetters('HelloWorld');
console.log(value.join(''));
value = sortLetters('HelloWorld', true);
console.log(value.join(''));
value = sortLetters('HelloWorld', false);
console.log(value.join(''));