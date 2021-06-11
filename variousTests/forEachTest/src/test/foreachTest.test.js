const { expect } = require("chai");
const { Square } = require("../foreachTest.js");

describe("forEach tests", function () {

    it("return square number", function(){
        function Square(a){
            let a = [1,2,3];
            a.forEach((number) => array.push(number * number));
            return array;
            
        };
        expect(Square(array)).to.eql([1,4,9]);
    });
})
