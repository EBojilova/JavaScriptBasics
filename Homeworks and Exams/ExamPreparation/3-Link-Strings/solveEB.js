function solve(input) {
    var result = [];

    input.forEach(function(inputLine) {
        var keys = {};

        inputLine.replace(/(\+|%20)+/g, ' ')  // Replace '+' or '%20' with empty space
                 .replace(/([^=&?]+)=([^=&?]+)/g,   // Regex to match key/value pairs
                          function(full, key, value) {
                              key = key.trim();                 // Trim whitespaces at the beginning and at the end of the string
                              value = value.trim();

                              if (!keys[key]) {
                                  keys[key] = [];
                              }

                              keys[key].push(value);
                              return '';

                          });
        for (var key in keys) {
            result.push(key + '=[' + keys[key].join(', ') + ']');
        }
        result.push('\r\n');
    });

    console.log(result.join('')
                      .trim());
}

solve([
          'field=value1&field=value2&field=value3',
          'http://example.com/over/there?name=ferret'
      ]);