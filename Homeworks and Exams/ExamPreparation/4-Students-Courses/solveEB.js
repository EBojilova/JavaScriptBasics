function solve(input) {
    // input
    var results = {};
    for (var i = 0; i < input.length; i++) {
        var inputLine = input[i].split('|');
        var student = inputLine[0].trim();
        var course = inputLine[1].trim();
        var grade = Number(inputLine[2].trim());
        var visits = Number(inputLine[3].trim());
        if (!results[course]) {
            results[course] = {
                grades  : [],
                visits  : [],
                students: []
            };
        }
        results[course].grades.push(grade);
        results[course].visits.push(visits);
        if (results[course].students.indexOf(student) == -1) {
            results[course].students.push(student);
        }
    }

    // output
    var output = {};
    Object.keys(results)
          .sort()
          .forEach(function(course) {
              output[course] = {};
              output[course].avgGrade = average(results[course].grades);
              output[course].avgVisits = average(results[course].visits);
              output[course].students = results[course].students.sort();
          });
    console.log(JSON.stringify(output));

    function average(arr) {
        var sum = 0;
        for (var i in arr) {
            sum += arr[i];
        }
        var avg = sum / arr.length;
        //http://stackoverflow.com/questions/3612744/remove-insignificant-trailing-zeros-from-a-number
        // parsvaneto na stringa kam Number ste premahne trailing zeros
        avg = Number(avg.toFixed(2));
        return avg;
    }
}

// ------------------------------------------------------------
// Read the input from the console as array and process it
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

var arr = [];
var readline = require('readline');
var rl = readline.createInterface(process.stdin, process.stdout);
rl.on('line', function(line) {
      if (line === "end") {
          rl.close();
      }
      arr.push(line);

  })
  .on('close', function() {
      solve(arr);
  });