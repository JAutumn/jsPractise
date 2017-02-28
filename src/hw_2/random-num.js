var getRandomNum = module.exports = (function() {
    var usedNumbers = [],
        MAX = 100,
        MIN = 1;

    return function() {
        if (usedNumbers.length === MAX - MIN) {
            usedNumbers = [];
        }

        var randomNumber;
        do {
            randomNumber = Math.floor(Math.random() * (MAX - MIN) + MIN);
        } while (usedNumbers.indexOf(randomNumber) > -1);

        usedNumbers.push(randomNumber);
        return randomNumber;
    }
})();