
var factorial = function(n){
    if(n === 1) return 1;
    return n * factorial(n-1);
}

var optimzeFactorial = function(n,total){
    if(n === 1) return total;
    return factorial(n - 1, n * total);
}

var main = function(){
    console.time('o(n)');
    factorial(100);
    console.timeEnd('o(n)');

    console.time('o(1)');
    optimzeFactorial(100);
    console.timeEnd('o(1)');
}

module.exports = {
    main: main
}