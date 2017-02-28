const expect = require('chai').expect;
const applyFilter = require('../../src/hw_2/apply-filter');

describe('Array.prototype.applyFilter', function () {
    it('should filter array', function () {
        var filteredArr = [1, 2, 3].applyFilter(function (value) {
            return value > 1;
        });
        expect(filteredArr).to.have.lengthOf(2);
    })
});