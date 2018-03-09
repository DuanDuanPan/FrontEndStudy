

var thunkify = require('thunkify');
var fs = require('fs');
var readFile = thunkify(fs.readFile);

var run = function (fn) {
    var gen = fn();
    function next(err, data) {
        var result = gen.next(data);
        if (result.done) return;
        result.value(next);
    }
    next();
}

var gen = function* () {
    console.dir('call first time');
    var f1 = yield readFile('/Users/panduanduan/Temp/Logs/OrientBase-dev-2018-01-27.0.log');
    console.dir('call second time');
    var f2 = yield readFile('/Users/panduanduan/Temp/Logs/OrientBase-dev-2018-01-29.0.log');
    console.dir('call third time');
    var f3 = yield readFile('/Users/panduanduan/Temp/Logs/OrientBase-dev-2018-01-30.0.log');
    console.dir('call end');
}

var main = function () {
    run(gen);
}

module.exports = {
    main: main
}


