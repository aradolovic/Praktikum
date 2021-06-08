const { expect } = require ('chai');
const dayOfYear = require('../dayOfYear.js');

describe('dayOfYear()', function () {
  it('should be a function', function () {
    expect(dayOfYear).to.be.a('function');
  });

  context('wrong input', function () {
    it('should throw error if not exactly 3 arguments', function () {
      expect(() => dayOfYear()).to.throw();
      expect(() => dayOfYear(1)).to.throw();
    });
    it('should throw error if any argument is not number', function () {
      expect(() => dayOfYear(2021, 1, "1")).to.throw();
    });
    /*it('should throw error if month is not valid', function(){
      expect(() => dayOfYear(2021, 13, 1)).to.throw();   
    });
    it('should throw error if day is not valid', function(){
      expect(() => dayOfYear(2021, 1, 40)).to.throw();   
    });*/
  });

  it('should return 1 if 1st of January 2021', function () {
    expect(dayOfYear(2021, 1, 1)).to.be.equal(1);
  });

  it('should return 2 if 2st of January 2021', function () {
    expect(dayOfYear(2021, 1, 2)).to.be.equal(2);
  });

  it('should return 32 if 1st of February 2000', function () {
    expect(dayOfYear(2021, 2, 1)).to.be.equal(1 + 31);
  });

  it('should return 61 if 1st of March 2021', function () {
    expect(dayOfYear(2021, 3, 1)).to.be.equal(1 + 31 + 28);
  });

  it('should return 61 if 1st of March 2020', function () {
    expect(dayOfYear(2020, 3, 1)).to.be.equal(1 + 31 + 29);
  });

  it('should return 60 if 1st of March 1999', function () {
    expect(dayOfYear(1999, 3, 1)).to.be.equal(60);
  });

  it('should return 92 if 1st of April 1944', function () {
    expect(dayOfYear(1944, 4, 1)).to.be.equal(92);
  });
}); 