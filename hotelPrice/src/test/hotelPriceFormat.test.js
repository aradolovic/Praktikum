var chai = require('chai')
var expect = chai.expect
const {priceListFormatter,data} = require("../hotelPriceFormat.js")

describe('function that sorts prices', function() {
    it('priceListFormatter should be a function', function(){
        expect(priceListFormatter).to.be.a('function')
    })

    it("should throw error if there are no arguments", function(){
        expect(() => priceListFormatter()).to.throw();
    

    })
    it("should throw error if arguments are invalid", function(){
        
        expect(() => priceListFormatter(10,10)).to.throw();


    })

    


})
