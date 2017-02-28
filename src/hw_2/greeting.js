var greet = function (greeting) {
    return function (name) {
        return greeting.replace(/\{Name}/g, name);
    }
};

module.exports = {
    hello : greet('Hello, {Name}!'),
    hi    : greet('Hi! I\'m {Name}.')
}