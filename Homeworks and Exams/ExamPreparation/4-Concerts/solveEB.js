function solve(input) {
    var data = {};
    for (var i in input) {
        var inputLine = input[i].split('|');
        var band = inputLine[0].trim();
        var town = inputLine[1].trim();
        //var date = inputLine[2].trim();
        var venue = inputLine[3].trim();

        if (!data[town]) {
            data[town] = {};
        }
        if (!data[town][venue]) {
            data[town][venue] = [];
        }
        if (data[town][venue].indexOf(band) == -1) {
            data[town][venue].push(band);
        }
    }

    // Sort the concertInfo structure
    var outputSorted = {};
    Object.keys(data)
          .sort()
          .forEach(function(town) {
              outputSorted[town] = {};
              Object.keys(data[town])
                    .sort()
                    .forEach(function(venue) {
                        outputSorted[town][venue] = data[town][venue].sort();
                    });
          });
    console.log(JSON.stringify(outputSorted));
}

solve([
          'ZZ Top | London | 2-Aug-2014 | Wembley Stadium',
          'Iron Maiden | London | 28-Jul-2014 | Wembley Stadium',
          'Metallica | Sofia | 11-Aug-2014 | Lokomotiv Stadium',
          'Helloween | Sofia | 1-Nov-2014 | Vassil Levski Stadium',
          'Iron Maiden | Sofia | 20-June-2015 | Vassil Levski Stadium',
          'Helloween | Sofia | 30-July-2015 | Vassil Levski Stadium',
          'Iron Maiden | Sofia | 26-Sep-2014 | Lokomotiv Stadium',
          'Helloween | London | 28-Jul-2014 | Wembley Stadium',
          'Twisted Sister | London | 30-Sep-2014 | Wembley Stadium',
          'Metallica | London | 03-Oct-2014 | Olympic Stadium',
          'Iron Maiden | Sofia | 11-Apr-2016 | Lokomotiv Stadium',
          'Iron Maiden | Buenos Aires | 03-Mar-2014 | River Plate Stadium'
      ]);
