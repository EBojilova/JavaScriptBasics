"use strict";
function solve(input) {
    //defining constants
    var aCode = "a".charCodeAt(0);
    var mCode = "m".charCodeAt(0);
    var zCode = "z".charCodeAt(0);

    // defining variables
    var htmlText = input[0];
    var myRegexp = /<p>(.+?)<\/p>/g;
    var match;
    var output = "";

    while ((match = myRegexp.exec(htmlText)) != null) {
        var paragraph = match[1].replace(/[^a-z0-9]+/g, ' ');
        for (var c in paragraph) {
            var currentCharCode = paragraph.charCodeAt(c); //finds the ASCII code of the current symbol
            var newCharCode;
            if (currentCharCode >= aCode && currentCharCode <= mCode) {
                newCharCode = currentCharCode + 13;
            }
            else if (currentCharCode >= mCode && currentCharCode <= zCode) {
                newCharCode = currentCharCode - 13;
            }
            else {
                newCharCode = currentCharCode;
            }
            output += String.fromCharCode(newCharCode);
        }
    }
    console.log(output);
}

// ------------------------------------------------------------
// Remove all below code before submitting to the judge system!
// ------------------------------------------------------------

solve(['<html><head><title></title></head><body><h1>hello</h1><p>znahny!@#%&&&&****</p><div><button>dsad</button></div><p>grkg^^^^%%%)))([]12</p></body></html>']);

//solve(['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl pbaqvgvbaf fabj punvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p>']);

//solve(['<html><head><title></title></head><body><h1>Intro</h1><ul><li>Item01</li><li>Item02</li><li>Item03</li></ul><p>jura qevivat va jrg fyvccrel fabjl</p><div><button>Click me, baby!</button></div><p> pbaqvgvbaf fabj punvaf ner nofbyhgryl rffragvny sbe fnsr unaqyvat nygubhtu fabj punvaf znl ybbx </p><span>This manual is false, do not trust it! The illuminati wrote it down to trick you!</span><p>vagvzvqngvat gur onfvp vqrn vf ernyyl fvzcyr svg gurz bire lbhe gverf qevir sbejneq fybjyl naq gvtugra gurz hc va pbyq jrg</p><p> pbaqvgvbaf guvf vf rnfvre fnvq guna qbar ohg vs lbh chg ba lbhe gverf </p><div>It is frustrating that you have not put car chains yet... Embarrassing...</div><p>orsber lbh ernpu fabjl ebnqf lbh jvyy znxr lbhe yvsr jnl rnfvre</p></body>']);