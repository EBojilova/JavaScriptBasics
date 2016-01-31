"use strict";
function solve(input) {
    var regex = /#([a-zA-Z][a-zA-Z0-9-_]+[a-zA-Z0-9])/g;
    var bannedNames = input[input.length - 1].split(/\s+/);
    for (var i = 0; i < input.length - 1; i++) {
        var inputLine = input[i];
        if (inputLine == "<code>") {
            while (input[i] !== "</code>") {
                console.log(input[i]);
                i++;
            }
            console.log("</code>");
            i++;
        }
        else {
            var outputLine = inputLine.replace(regex,
                                               function(full, key) {
                                                   if (bannedNames.indexOf(key) > -1) {
                                                       var stars = new Array(key.length + 1).join('*');
                                                       return stars;
                                                   }
                                                   return '<a href="/users/profile/show/' + key + '">' + key + '</a>';
                                               });
            console.log(outputLine)
        }
    }
}

solve([
          '#RoYaL: I\'m not sure what you mean,',
          'but I am confident that I\'ve written',
          'everything correctly. Ask #iordan_93',
          'and #pesho if you don\'t believe me',
          '<code>',
          '#trying to print stuff',
          'print("yoo")',
          '</code>',
          'pesho gosho'
      ]);