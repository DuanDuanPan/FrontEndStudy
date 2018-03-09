
var getStockSymbol = function (name) {
    setTimeout(function () {
        console.dir('enter step1');
    }, 2000);
}

var getStockPrice = function (symbol) {
    setTimeout(function () {
        console.dir('enter step2');
    }, 2000);
}

async function getStockPriceByName(name) {
    var symbol = await getStockSymbol(name);
    var stockPrice = await getStockPrice(symbol);
    return stockPrice;
}

var main = function () {
    getStockPriceByName('goog').then(function (result) {
        console.log(result);
    });
}

module.exports = {
    main: main
}

