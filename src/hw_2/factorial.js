var memoFactorial = (function () {
    var cache = {};

    return function f(n) {
        var value;

        if (n in cache) {
            value = cache[n];
        } else {
            if (n === 1 || n === 0) {
                value = 1;
            } else {
                value = n * f(n -1);
            }
            cache[n] = value;
        }
        return value;
    };
})();

var simpleFactorial = (function () {
    return function f(n) {
        return (n !== 1 && n !== 0) ? n * f(n - 1) : 1;
    }
})();

module.exports = {
    memo : memoFactorial,
    simple : simpleFactorial
};
