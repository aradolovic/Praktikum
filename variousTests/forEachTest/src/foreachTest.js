const { expect } = require("chai");
const {Square } = require("../foreachTest.js");

describe("forEach tests", function () {

    it("return square number", function(){
        brojevi= [2,3,8]
        kvadrat = Square(brojevi);
        expect(kvadrat).to.eql([4,9,64]);
    });



});
