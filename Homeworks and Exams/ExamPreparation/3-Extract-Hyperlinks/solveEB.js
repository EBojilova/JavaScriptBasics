function solve(input) {
    var html = input.join('\n');
    // naming groups not supported in JS
    // Nakov <\s*a\s[^>]*?\bhref\s*=\s*(?:'(?<url>[^']*)'|"(?<url1>[^"]*)"|(?<url2>\S*))[^>]*>(?<linktext>(?:.|\s)*?)<\s*\/a\s*>
    var regex = /<a\s+(?:[^>]+\s+)?href\s*=\s*(?:'([^']*)'|"([^"]*)"|([^\s>]+))[^>]*>/g;
    var match;
    while (match = regex.exec(html)) {
        var hrefValue = match[1];
        if (hrefValue == undefined) {
            var hrefValue = match[2];
        }
        if (hrefValue == undefined) {
            var hrefValue = match[3];
        }
        console.log(hrefValue);
    }
}

solve([
          '<!DOCTYPE html>',
          '<html>',
          '<head>',
          '  <title>Hyperlinks</title>',
          '  <link href="theme.css" rel="stylesheet" />',
          '</head>',
          '<body>',
          '<ul><li><a   href="/"  id="home">Home</a></li><li><a',
          ' class="selected" href="/courses">Courses</a>',
          '</li><li><a href = ',
          '\'/forum\' >Forum</a></li><li><a class="href"',
          'onclick="go()" href= "#">Forum</a></li>',
          '<li><a id="js" href =',
          '"javascript:alert(\'hi\')" class="new">click</a></li>',
          '<li><a id=\'nakov\' href =',
          '\'http://www.nakov.com\' class=\'new\'>nak</a></li></ul>',
          '<a href="#"></a>',
          '<a id="href">href=\'fake\'<img src=\'http://abv.bg/i.gif\' ',
          'alt=\'abv\'/></a><a href="#">&lt;a href=\'hello\'&gt;</a>',
          '<!-- This code is commented:',
          '  <a href="#commented">commentex hyperlink</a> -->',
          '</body>'
      ]);