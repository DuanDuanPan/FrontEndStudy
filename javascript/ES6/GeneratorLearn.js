
var fetch = require('node-fetch');

function* gen() {
    for (let current_id = 1; ; current_id++) {
        yield current_id;
    }
    return current_id;
}

function* genWithFetch() {
    var url = 'https://api.github.com/users/github';
    var result = yield fetch(url);
    console.log(result.bio);
}

function main() {
    console.dir('generate unique number begin');
    var g = gen();
    for (let index = 1; index < 100; index++)console.dir(g.next());
    console.dir('generate unique number end');
    console.dir('generate with promise begin');
    var g = genWithFetch();
    var result = g.next();
    result.value.then(function (data) {
        return data.json();
    }).then(function (data) {
        g.next(data);
    });
    console.dir('generate with promise end');
}

module.exports = {
    main:main
}