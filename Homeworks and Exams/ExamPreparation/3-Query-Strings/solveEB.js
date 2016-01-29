"use strict";

function solve(input) {
    var result = [];

    input.forEach(function(inputLine) {
        var keys = {};

        inputLine.replace(/(\+|%20)+/g, ' ')  // Replace '+' or '%20' with empty space
            .replace(/\s{2,}/g, ' ') // Replace multiple (2 or more) whitespaces with one
            .replace(/([^=&?]+)=([^=&?]+)/g,   // Regex to match key/value pairs
                     function(full, key, value) {
                         key = key.trim();// Trim whitespaces at the beginning and at the end of the string
                         value = value.trim();// Trim whitespaces at the beginning and at the end of the string
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

// ------------------------------------------------------------
// Remove all below code before submitting to the judge system!
//
solve(['login=student&password=student']);

solve([
          'field=value1&field=value2&field=value3',
          'http://example.com/over/there?name=ferret'
      ]);

solve([
          'foo=%20foo&value=+val&foo+=5+%20+203',
          'foo=poo%20&value=valley&dog=wow+',
          'url=https://softuni.bg/trainings/coursesinstances/details/1070',
          'https://softuni.bg/trainings?trainer=nakov&course=oop&course=php'
      ]);