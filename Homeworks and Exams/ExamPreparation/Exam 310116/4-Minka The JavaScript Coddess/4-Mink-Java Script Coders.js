function solve(input) {
    // input
    var results = {};
    var sortable = [];
    for (var i = 0; i < input.length; i++) {
        // Name & Type & Task Number & Score & Lines of code
        var inputLine = input[i].split('&');
        var name = inputLine[0].trim();
        var type = inputLine[1].trim();
        var taskNumber = "Task " + inputLine[2].trim();
        var score = Number(inputLine[3].trim());
        var lines = Number(inputLine[4].trim());
        if (!results[taskNumber]) {
            results[taskNumber] = {
                tasks  : [],
                average: [],
                lines  : 0
            };
        }

        var taskObject = {
            name: name,
            type: type
        };
        results[taskNumber].tasks.push(taskObject);
        results[taskNumber].average.push(score);
        results[taskNumber].lines += lines;

    }

    Object.keys(results)
          .forEach(function(task) {
              results[task].average = average(results[task].average);
              results[task].tasks.sort(function(obj1, obj2) {
                  return obj1.name.localeCompare(obj2.name)
              });
          });

    //output
    var output = {};
    Object.keys(results)
          .sort(compareTasks)
          .forEach(function(task) {
              output[task] = {};
              output[task].tasks = results[task].tasks;
              output[task].average = results[task].average;
              output[task].lines = results[task].lines;
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

    function compareTasks(task1, task2) {
        if (results[task1].average !== results[task2].average) {
            return results[task2].average - results[task1].average;
        }
        if (results[task1].lines !== results[task2].lines) {
            return results[task1].lines - results[task2].lines;
        }
    }
}

solve([
          'Array Matcher & strings & 4 & 100 & 38',
          'Magic Wand & draw & 3 & 100 & 15',
          'Dream Item & loops & 2 & 88 & 80',
          'Knight Path & bits & 5 & 100 & 65',
          'Basket Battle & conditionals & 2 & 100 & 120',
          'Torrent Pirate & calculations & 1 & 100 & 20',
          'Encrypted Matrix & nested loops & 4 & 90 & 52',
          'Game of bits & bits & 5 & 100 & 18',
          'Fit box in box & conditionals & 1 & 100 & 95',
          'Disk & draw & 3 & 90 & 15',
          'Poker Straight & nested loops & 4 & 40 & 57',
          'Friend Bits & bits & 5 & 100 & 81'
      ]);
