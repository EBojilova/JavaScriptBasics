// The function sorts all letters in the string in alphabetical order and returns the newly formed string.
// The sorting is ascending if the boolean is true otherwise the sorting is in descending order.
function sortLetters(str, isAscending) {
    // http://stackoverflow.com/questions/5285995/how-do-you-sort-letters-in-javascript-with-capital-and-lowercase-letters-combin
    function compare(strA, strB) {
        var icmp = strA.toLowerCase()
                       .localeCompare(strB.toLowerCase());
        if (icmp != 0) {
            // spotted a difference when considering the locale
            return icmp;
        }
        // no difference found when considering locale, let's see whether
        // capitalization matters
        if (strA > strB) {
            return 1;
        }
        else if (strA < strB) {
            return -1;
        }
        else {
            // the characters are equal.
            return 0;
        }
    }

    str = str.split('').sort(compare);
    switch (arguments.length) {
        case 1:
            return str.join('');
        case 2:
            return isAscending
                ?
                   str.join('')
                :
                   str.reverse()
                      .join('');
    }
}

var str = 'HelloWorld';

console.log(sortLetters(str));
console.log(sortLetters(str, true));
console.log(sortLetters(str, false));