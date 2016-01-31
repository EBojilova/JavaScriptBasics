function solve(arr) {
    var student = function(name, result) {
        this.name = name;
        this.result = result;
        this.makeUpExams = 0;
    };
    var data = {};

    // input
    for (var i = 0; i < arr.length; i++) {
        var splitLine = arr[i].split(/[:-]/);
        var name = splitLine[0].trim();
        var exam = splitLine[1].trim();
        var result = Number(splitLine[2].trim());

        if (result < 0 || result > 400) {
            continue;
        }

        if (!data[exam]) {
            data[exam] = [];
        }

        var firstTime = true;
        for (var j = 0; j < data[exam].length; j++) {
            if (name === data[exam][j].name) {
                data[exam][j].result = Math.max(data[exam][j].result, result);
                data[exam][j].makeUpExams++;
                firstTime = false;
                break;
            }
        }
        if (firstTime) {
            data[exam].push(new student(name, result));
        }
    }

    // output
    Object.keys(data)
          .forEach(function(exam) {
              data[exam].sort(function(student1, student2) {
                  //result in descending order: the students with the highest results should be first.
                  if (student1.result !== student2.result) {
                      return student1.result < student2.result;
                  }
                  // makeup exams taken in ascending order (if there are several players with the same result)
                  else if (student1.makeUpExams !== student2.makeUpExams) {
                      return student1.makeUpExams > student2.makeUpExams;
                  }
                  else {
                      return student1.name.localeCompare(student2.name);
                  }
              });
          });
    console.log(JSON.stringify(data));
}

solve([
          'Simon Cowell - PHP : 100',
          'Simon Cowell-PHP: 500',
          'Peter Jackson - PHP: 350',
          'Simon Cowell - PHP : 400'
      ]);

console.log();

solve([
          'Peter Jackson - Java : 350',
          'Jane - JavaScript : 200',
          'Jane     -    JavaScript :     400',
          'Simon Cowell - PHP : 100',
          'Simon Cowell-PHP: 500',
          'Simon Cowell - PHP : 200'
      ]);
