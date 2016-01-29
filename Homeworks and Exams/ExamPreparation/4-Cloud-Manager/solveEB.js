function solve(input) {

    // input
    var data = [];

    for (var i = 0; i < input.length; i++) {
        var inputLine = input[i].split(/\s+/);
        var file = inputLine[0];
        var extension = inputLine[1];
        // parsva bez remove na MB
        var memory = parseFloat(inputLine[2]);
        if (!data[extension]) {
            data[extension] = {
                'files' : [],
                'memory': 0
            };
        }
        data[extension].files.push(file);
        data[extension].memory += memory;
    }

    // output
    var output = {};
    Object.keys(data)
          .sort()
          .forEach(function(extension) {
              output[extension] = {};
              output[extension].files = data[extension].files.sort();
              output[extension].memory = data[extension].memory.toFixed(2);
          });
    console.log(JSON.stringify(output));
}

solve([
          'sentinel .exe 15MB',
          'zoomIt .msi 3MB',
          'skype .exe 45MB',
          'trojanStopper .bat 23MB',
          'kindleInstaller .exe 120MB',
          'setup .msi 33.4MB',
          'winBlock .bat 1MB'
      ]);