function evaluate(chart) {
    var chartLine, parachutePosition;
    var isStartPositionFound = false;

    for (var row in chart) {
        chartLine = chart[row];

        if (isStartPositionFound) {
            for (var col in chartLine) {
                if (chartLine[col] == ">") {
                    parachutePosition++;
                }
                else if (chartLine[col] == "<") {
                    parachutePosition--;
                }
            }

            switch (chartLine[parachutePosition]) {
                case "_":
                    console.log("Landed on the ground like a boss!");
                    console.log(row, parachutePosition);
                    return;
                    break;
                case "~":
                    console.log("Drowned in the water like a cat!");
                    console.log(row, parachutePosition);
                    return;
                    break;
                case "/":
                case "|":
                case "\\":
                    console.log("Got smacked on the rock like a dog!");
                    console.log(row, parachutePosition);
                    return;
                    break;
                default:
                    break;
            }
        }

        if (!isStartPositionFound) {
            parachutePosition = chartLine.indexOf("o");
            if (parachutePosition > -1) {
                isStartPositionFound = true;
            }
        }
    }
}

var input =
        [
            ">>>>>>>>>>>o<<<<<<<<<<<<<",
            "----------~~~------------",
            "--------~/~~~\\~----------",
            "-------~/~---~\\~---------",
            "------~/~-----~\\~--------",
            "-----~/~-------~\\~-------",
            "----~/~---------~\\~------",
            "---~/~-----------~\\~-----",
            "--~/~-------------~\\~----",
            "-~/~---------------~\\~---"
        ];

evaluate(input);