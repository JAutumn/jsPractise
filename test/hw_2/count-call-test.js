const expect = require('chai').expect;
const countCall = require('../../src/hw_2/count-call');

describe('countCall', function () {
    it('should return number of call', function () {
        for (var i = 1; i < 100; i++) {
            expect(countCall()).to.be.equal(i);
        }
    })
});