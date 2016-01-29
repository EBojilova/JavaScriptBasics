var regex = /ab+c/;
console.log(regex);
var regex = new RegExp("ab+c");
console.log(regex);

//exec() - method executes a search for a match in a specified string. Returns a result array or null.
//Is meant to be used in a loop
var regex = /quick\s(brown).+?(jumps)/ig;
var result = regex.exec('The Quick Brown Fox Jumps Over The Lazy Dog');
console.log(result);

// match() - retrieves the matches when matching a string against a regular expression. Returns a result array or null.
var str = 'For more information, see Chapter 3.4.5.1';
var regex = /(chapter \d+(\.\d)*)/i;
var found = str.match(regex);
console.log(found);

// test() returns true or false if there is/ is not a match
var regex = /\d/;
var result = regex.test('www.regex101.com');
console.log(result);

//declaring variables
var input = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';

//replace() - returns a new string with some or all matches of a pattern replaced by a replacement.
var pattern = /<a(.*?)>(.*?)<\/a>/gm;
var replaced = input.replace(pattern, "[URL$1]$2[/URL]");
console.log(replaced);
var str = 'Apples are round, and apples are juicy.';
var newStr = str.replace(/apples/gi, 'oranges');
console.log(newStr);

//search() - search for a match between a regular expression and this String object.
// Returns the index of the first match of the regular expression inside the string.
// Otherwise, it returns -1.
var str = 'Returns the index of the first match';
console.log(str.search(/e/));
console.log(str.search(/@/));

//split() - splits a String object into an array of strings by separating the string into substrings.
var str = 'i23need2304only32numbers';
var splittedSting = str.split(/\D+/);
console.log(splittedSting);
//Note:To remove empty string you should use .filter()
//http://stackoverflow.com/questions/281264/remove-empty-elements-from-an-array-in-javascript
var arr=splittedSting.filter(function(e){ return e === 0 || e });
console.log(arr);