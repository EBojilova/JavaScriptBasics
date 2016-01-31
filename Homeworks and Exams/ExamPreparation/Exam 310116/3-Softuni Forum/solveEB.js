"use strict";
function solve(input) {
    var regex = /#([a-zA-Z][a-zA-Z0-9-_]+[a-zA-Z0-9])\b/g;
    var bannedNames = input[input.length - 1].split(/\s+/);
    input.pop();

    // the idea for joining input and code blocks replacemnts- from Kamigava
    var result=input.join('\n');

    var regexCode = /<code>[\s\S]*?<\/code>/g;
    var codes = result.match(regexCode);
    if (codes) {
        var codeIndex = 0;
        codes.forEach(function(code) {
            result = result.replace(code, "<code>" + codeIndex + "</code>");
            codeIndex++;
        });
    }

    result = result.replace(regex,
                            function(full, key) {
                                if (bannedNames.indexOf(key) > -1) {
                                    var stars = "";
                                    for (var i = 0; i < key.length; i++) {
                                        stars += '*';
                                    }
                                    return stars;

                                }
                                return '<a href="/users/profile/show/' + key + '">' + key + '</a>';
                            });
    if (codes) {
        codeIndex = 0;
        codes.forEach(function(code) {
            result = result.replace("<code>" + codeIndex + "</code>", code);
            codeIndex++;
        });
    }

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

//solve([
//          "#RoYaLinio: I'm not sure what you mean,",
//          "#RoYaL: I'm not sure what you mean,",
//          "#RoYaL: I'm not sure what you mean,",
//          "#RoYaLinio: I'm not sure what you mean,",
//          "but I am confident that I've written",
//          "everything correctly. Ask #iordan_93",
//          "and #pesho if you don't believe me",
//          "#123, or #Asd_golemiq_ ",
//          "pesho gosho"
//      ]);