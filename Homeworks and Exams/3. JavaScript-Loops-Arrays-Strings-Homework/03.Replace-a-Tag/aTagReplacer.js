//declaring variables
var input = '<ul>\n <li>\n  <a href=http://softuni.bg>SoftUni</a>\n </li>\n</ul>';

//match tag with regex
var pattern = /<a(.*?)>(.*?)<\/a>/gm;
var replaced = input.replace(pattern, "[URL$1]$2[/URL]");

//print in the console
console.log(replaced);

