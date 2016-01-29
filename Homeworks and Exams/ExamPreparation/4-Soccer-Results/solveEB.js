function solve(input) {

    // input
    var results = {};
    for (i in input) {
        var inputLine = input[i].split(/[\/:-]+/);
        var teamHome = inputLine[0].trim();
        var teamAway = inputLine[1].trim();
        var goalsHome = Number(inputLine[2].trim());
        var goalsAway = Number(inputLine[3].trim());
        processResults(results, teamHome, teamAway, goalsHome, goalsAway);
        processResults(results, teamAway, teamHome, goalsAway, goalsHome);
    }

    // output-sorted
    var output = {};
    Object.keys(results)
          .sort()
          .forEach(function(homeTeam) {
              output[homeTeam] = results[homeTeam];
              output[homeTeam].matchesPlayedWith.sort();
          });

    // Print the results as JSON string
    console.log(JSON.stringify(output));

    function processResults(results, teamHome, teamAway, goalsHome, goalsAway) {
        // premahvame dubliraneto na otborite
        if (!results[teamHome]) {
            results[teamHome] = {
                goalsScored      : 0,
                goalsConceded    : 0,
                matchesPlayedWith: []
            };
        }
        results[teamHome].goalsScored += goalsHome;
        results[teamHome].goalsConceded += goalsAway;
        // premahvame dubliraneto na otborite
        if (results[teamHome].matchesPlayedWith.indexOf(teamAway) == -1) {
            results[teamHome].matchesPlayedWith.push(teamAway);
        }
    }
}

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

//solve([
//          'Germany / Argentina: 1-0',
//          'Brazil / Netherlands: 0-3',
//          'Netherlands / Argentina: 0-0',
//          'Brazil / Germany: 1-7',
//          'Argentina / Belgium: 1-0',
//          'Netherlands / Costa Rica: 0-0',
//          'France / Germany: 0-1',
//          'Brazil / Colombia: 2-1'
//      ]);

