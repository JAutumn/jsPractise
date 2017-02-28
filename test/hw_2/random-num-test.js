const expect = require('chai').expect;
const getRandomNum = require('../../src/hw_2/random-num');

describe('getRandomNum', function () {
    var usedNumbers,
        randomNumber;

    beforeEach(function () {
        usedNumbers = [];
        randomNumber = null;
    });

    it('should\'t return duplicates before 100', function () {
        for (var i = 1; i < 100; i++) {
            randomNumber = getRandomNum();
            expect(usedNumbers).not.to.include(randomNumber);
            usedNumbers.push(randomNumber);
        }
    });

    it('should return duplicate after 100', function () {
        for (var i = 1; i < 101; i++) {
            randomNumber = getRandomNum();
            if (i === 100) {
                expect(usedNumbers).to.include(randomNumber);
            }
            usedNumbers.push(randomNumber);
        }
    })
});
