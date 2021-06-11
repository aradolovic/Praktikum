const chai = require("chai");
const { expect } = chai;
const {
    scoredGoals, 
    totalPrice, 
    mostEctsclass, 
    sum,
    scorersList
} = require("../reduceri.js")

describe("reduce tests", function(){
    it("should return which subject has the most ects", function () {
    
        expect(mostEctsclass).to.eql({
            id: 1,
            name: "Web Develompment",
            ects: 8,
        });
      });

    it("should return a flattened array", function () {
        const flatten = [
          [1, 2],
          [3, 4,],
          [5, 6 ]
        ].reduce((prev, curr) => prev.concat(curr), []);
    
        expect(flatten).to.eql([1, 2, 3, 4, 5, 6]);
      });

    it("should return maximal number", function () {
        let numbers = [7, 5, 12, 6];
        let maxnumber = numbers.reduce(
          (min, curr) => (curr > min ? curr : min),
          numbers[0]
        );
        expect(maxnumber).to.equal(12);
    });
    
    it("should return a number of goals scored by a player", function () {
        expect(scoredGoals).to.eql({
          Messi: 4,
          Benzema: 2,
          Lovren: 1,
          Lewandowski: 1,
          Kane: 1,
        });
      });

    
    it("should only show the names of players who scorred", function () {
        expect(scorersList).to.eql([ "Benzema","Messi" , "Lovren", "Kane", "Lewandowski"]);
      });

    


})