const { expect } = require("chai");
const {Double , SquareNb,isEven, getCar
  } = require("../mapTest.js");

  describe("Map tests", function () {

    
    it("should return doubled numbers", function () {
        let array = [1, 2, 3, 4, 50, 101];
        let double = array.map(Double);
    
        expect(double).to.eql([2, 4, 6, 8, 100, 202]);
      });

    it("should return square value", function(){
        let array = [1, 2, 3, 4, 50, 101];
        let square = array.map(SquareNb);

        expect(square).to.eql([1,4,9,16,2500,10201])
    })

    it("should return values from euro to kuna", function(){

      let array = [10, 15 , 399 , 1000]
      const eurotokuna = array.map(x => x * 7.5)

      expect(eurotokuna).to.eql([75, 112.5 , 2992.5, 7500])
    })
    it("should return true if a number is even", function () {
        let array = [1, 2, 3, 4, 50];
        let evenarray = array.map(isEven);
    
        expect(evenarray).to.eql(["false", "true", "false", "true", "true"]);
      });

    it("should return model of a car", function () {
        let cars = [
          { brand: "Fiat", model: "Panda" },
          { brand: "Ford", model: "Focus" },
          { brand: "Renault", model: "Clio" },
          { brand: "Renault", model: "Megane" },
          { brand: "Toyota", model: "Yaris" },
        ];
        let car = cars.map(getCar);

        expect (car).to.eql([
            "Fiat Panda",
            "Ford Focus",
            "Renault Clio",
            "Renault Megane",
            "Toyota Yaris"
          ]);
    })

    
    
  })