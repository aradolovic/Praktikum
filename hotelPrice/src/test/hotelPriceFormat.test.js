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

    it("should return correct order",function(){

         let data = [
            {from: "2021-01-01", 
             to: "2021-02-01", 
             price: 48.25
            },
        
            {from: "2020-04-02",
             to: "2020-04-04",
            price: 11.5
            },
        
            {from: "2020-03-02",
             to: "2020-05-15",
             price: 42.0
            },
        
            {from: "2020-02-02",
             to: "2020-03-01",
             price: 18.25
            },
            ]
            expect(priceListFormatter(data)).to.eql(['11.5 : 2020-04-02 do 2020-04-04',
                                                     '18.25 : 2020-02-02 do 2020-03-01', 
                                                     '42 : 2020-03-02 do 2020-05-15', 
                                                     '48.25 : 2021-01-01 do 2021-02-01'])

    })




})
