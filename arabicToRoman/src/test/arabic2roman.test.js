const { expect } = require("chai");
const { arabic2roman  } = require("../arabic2roman.js");

  describe("arabic 2 roman", function () {

    
    it("should be a function", function () {
        expect(arabic2roman).to.be.a('function')      
    });

    it("should return I for 1",function(){

        expect(arabic2roman(1)).to.eql("I");
    })
    it("should return II for 2",function(){
        expect(arabic2roman(2)).to.eql("II");

    })
    it("should return III for 3",function(){
        expect(arabic2roman(3)).to.eql("III");

    })

    it("should return IV for 4",function(){
        expect(arabic2roman(4)).to.eql("IV");

    })
    it("should return V for 5",function(){
        expect(arabic2roman(5)).to.eql("V");

    })
    it("should return VI for 6",function(){
        expect(arabic2roman(6)).to.eql("VI");

    })


    it("should return X for 10",function(){
        expect(arabic2roman(10)).to.eql("X");

    })

    it("should return XVI for 16",function(){
        expect(arabic2roman(16)).to.eql("XVI");

    })


    it("should return L for 50",function(){
        expect(arabic2roman(50)).to.eql("L");

    })

    it("should return C for 100",function(){
        expect(arabic2roman(100)).to.eql("C");

    })

    it("should return D for 500",function(){
        expect(arabic2roman(500)).to.eql("D");

    })

    it("should return M for 1000",function(){
        expect(arabic2roman(1000)).to.eql("M");

    })




    

    
    
  })