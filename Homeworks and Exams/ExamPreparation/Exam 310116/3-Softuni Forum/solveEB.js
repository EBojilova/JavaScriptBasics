"use strict";
function solve(input) {
    // gi does a case-insensitive search in a string
    // LoKSET var regex = /#([a-z][\w-]+[a-z0-9])\b/gi;
    var regex = /#([a-zA-Z][a-zA-Z0-9-_]+[a-zA-Z0-9])\b/g;
    var bannedNames = input[input.length - 1].split(/\s+/);
    input.pop();

    // the idea for joining input and code blocks replacemnts- from LoKSET, Kamigava
    var result = input.join('\n');

    var regexCode = /<code>[\s\S]*?<\/code>/g;

    var codeBlocksInitial = result.match(regexCode);

    result = result.replace(regex,
                            function(full, key) {
                                if (bannedNames.indexOf(key) > -1) {
                                    var stars = "";
                                    return key.replace(/./, '*')
                                }
                                return '<a href="/users/profile/show/' + key + '">' + key + '</a>';
                            });

    var i = 0;
    result = result.replace(regexCode, function(full) {
        return codeBlocksInitial[i++];
    });

    console.log(result);
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