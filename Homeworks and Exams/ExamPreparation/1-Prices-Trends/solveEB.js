function solve(input) {
    // po-mi haresva reshenieto ot Judge
    var prices = input.map(Number);
                      //.map(function(number) {
                      //    return number.toFixed(2)
                      //})
                      //.map(Number);
    console.log("<table>");
    console.log("<tr><th>Price</th><th>Trend</th></tr>");
    console.log('<tr><td>%s</td><td><img src="%s.png"/></td></td>', prices[0].toFixed(2), 'fixed');
    var prevPrice=prices[0].toFixed(2);
    for (var i = 1; i < prices.length; i++) {
        var price = prices[i].toFixed(2);
        var trend;
        if (price == prevPrice) {
            trend = "fixed";
        }
        // zadaljitelno triabva parvoto chislo da e nomer, vtoroto moje i da e string pri sapostavianeto
        else if (prices[i] < prevPrice) {
            trend = "down";
        }
        else {
            trend = "up";
        }
        console.log('<tr><td>%s</td><td><img src="%s.png"/></td></td>', price, trend);
        prevPrice = price;
    }
    console.log("</table>");
}
