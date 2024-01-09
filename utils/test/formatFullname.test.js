const formatFullname = require('../formatFullname');
const expect = require('chai').expect;

describe('CutText', () => {
	it('should return an error if "fullName" arg is undefined', () => {
		expect(formatFullname(undefined)).to.equal('Error');
	});
	it('should return an error if "fullName" arg is not a string', () => {
		expect(formatFullname([])).to.equal('Error');
		expect(formatFullname(23)).to.equal('Error');
		expect(formatFullname(function () {})).to.equal('Error');
	});
	it('should return an error if the "fullName" argument is split into more or less than 2 parts ', () => {
		expect(formatFullname('John')).to.equal('Error');
		expect(formatFullname('Amanda')).to.equal('Error');
		expect(formatFullname(`John Steven Black`)).to.equal('Error');
		expect(formatFullname(`Amanda Kate Brown`)).to.equal('Error');
	});
});
