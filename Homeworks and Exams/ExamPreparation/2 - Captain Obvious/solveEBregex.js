"use strict";
function solve(arr) {
    var currentReg;
    var words = [];
    var firstSequence = arr[0];
    firstSequence.replace(/[a-zA-Z]+/g,
                          function(full) {
                              var key = full.toLowerCase();
                              if (!words[key]) {
                                  words[key] = 1;
                              }
                              else {
                                  words[key]++;
                              }
                              return full;
                          });

    var repeatingWords = Object.keys(words)
                               .filter(function(word) {
                                   return words[word] >= 3
                               });


    if (repeatingWords.length === 0) {
        console.log('No words');
        return;
    }

    var regex = /[\w].+?[?!.]/g;
    var match;
    var sentenceMatched = false;

    while (match = regex.exec(arr[1])) {
        var currentSequence = match[0].toLowerCase();
        var counter = 0;
        for (var i = 0; i < repeatingWords.length; i++) {
            // ili currentReg = new RegExp('([^a-zA-Z]|^)' + repeatingWords[i] + '[^a-zA-Z]', 'i');
            currentReg = new RegExp('\\b' + repeatingWords[i] + '\\b', 'i');
            currentSequence.replace(currentReg,   // Regex to match key/value pairs
                                    function(full) {
                                        counter++;
                                        return full;
                                    });

            if (counter >= 2) {
                console.log(match[0]);
                sentenceMatched = true;
                break;
            }
        }
    }

    if (!sentenceMatched) {
        console.log("No sentences");
    }
}

solve([
          "Lorem ipsum dolor sit amet, sale errem nam no, dictas scaevola posidonium id per. Cibo rebum eloquentiam in per, est vide suavitate et? Duo eu nostro dolorum eloquentiam, at mei libris prompta expetendis, ius hinc vero fabulas ad. Duo natum putant voluptatum ei. Vix option offendit erroribus no, his no meis menandri, ne sea cibo choro dicam. Mei agam consul electram at, vel te iisque regione! Brute adversarium consequuntur in ius, ius ex essent meliore. Sea no modus omnesque expetenda, vix ludus ceteros id, per ancillae voluptatum definitionem ea? Id vis tota dicam exerci, mea mollis expetenda ei? Vel no tation partiendo, eu nam dolore pertinax adversarium, ea sea ludus atomorum! Vix option suscipiantur concludaturque id. His elit vitae explicari ne. Duo ut nonumy iisque pertinax, ut meis zril mel?",
          "Lorem ipsum dolor sit amet, ut accumsan adipisci nam! Has oratio docendi vulputate ei, ut vis vidit ceteros. Vel eu dolor oblique, ea quot unum vel. Sint convenire at his, tempor constituam est ex. Cibo epicuri ne est, per no convenire erroribus patrioque, has te utamur oblique scaevola! No euismod senserit concludaturque has? Ei legere commodo appellantur duo, assum ponderum eu sea, nulla graece no duo? Et erant eirmod propriae his, qui invenire scripserit efficiantur ut. Integre referrentur mea at. At amet ocurreret qui, cum libris possim praesent ea, velit legere viderer an his? Vim quis solet eirmod cu. Saperet perfecto cum eu, dicant ornatus vix ne. Discere euismod detraxit has ex, sea cibo legere adolescens cu, pro eu alii elit. Ex probatus signiferumque vel? Id vix audiam delectus necessitatibus, quod ocurreret disputationi eos cu. Mea eu animal fabellas sensibus, ut sit paulo torquatos! Oratio forensibus ut ius, sed scaevola torquatos definitionem an. Everti option atomorum cu quo, vix tempor postea tincidunt ea, eu viderer aliquid democritum mel. Sed dicta abhorreant contentiones ne, sed laoreet invenire democritum cu! Per laudem sententiae ea! Nam numquam commune vulputate ex. Ridens verear disputando qui eu, per in debitis accusamus consetetur, et nec hinc nostrum evertitur? Id est iuvaret mediocrem, fastidii pertinax consectetuer sit ei, has quaeque eruditi an? Liber abhorreant argumentum nam te, eos in inimicus mnesarchum."
      ]);