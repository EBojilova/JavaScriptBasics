function solve(arr) {
    var regex = /#[a-z][\w-]+[a-z0-9](?!\w)/gi;
    var banned = arr[arr.length - 1].trim()
                                    .split(' ');
    var text = '';
    for (var i = 0; i < arr.length - 1; i++) {
        var obj1 = arr[i];
        text += obj1;
        text += '\n';
    }

    var regexCodeTag = /(<code>[\s\S]*?<\/code>)/g;

    var tags = text.match(regexCodeTag);

    text = text.replace(regex, function(x) {
        var name = x.substr(1);
        for (var j = 0; j < banned.length; j++) {
            var ban = banned[j];
            if (ban === name) {
                return name.replace(/./g, '*');
            }
        }
        name = '\<a href="/users/profile/show/' + name + '">' + name + '</a>';
        return name;

    });

    var i = 0;
    text = text.replace(regexCodeTag, function(x) {
        return tags[i++];
    });

    console.log(text);
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