const expect = require('chai').expect;
const factorial = require('../../src/hw_2/factorial');

describe('factorial#memo', function () {
    it('should return factorial of number', function () {
        for (var i = 0; i < 40; i++) {
            expect(factorial.memo(i)).to.be.equal(factorial.simple(i));
        }
    })
});