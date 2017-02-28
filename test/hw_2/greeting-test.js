const expect = require('chai').expect;
const greeting = require('../../src/hw_2/greeting');

describe('greeting', function () {
    describe('#hello', function () {
        it('should return Hello, {Name}!', function () {
            expect(greeting.hello('Jack')).to.be.equal('Hello, Jack!');
        });
    });

    describe('#hi', function () {
        it('should return Hi! I\'m {Name}.', function () {
            expect(greeting.hi('Jack')).to.be.equal('Hi! I\'m Jack.');
        });
    });
});