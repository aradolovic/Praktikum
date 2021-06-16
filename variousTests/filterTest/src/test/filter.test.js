const { expect } = require("chai");

let players = [
    {name: "Lionel" ,    surname : "Messi",    club : "Barcelona" , age: 33, height : 170 },
    {name : "Karim"  ,     surname : "Benzema",   club : "Real Madrid" , age: 34, height : 184 },
    {name : "Gerrard"  ,   surname : "Pique",     club : "Barcelona" , age: 33, height : 189 },
    {name : "Jesse" ,     surname : "Lingard",     club : "West Ham"  , age: 28, height : 178 },
    {name : "Neymar" ,     surname : "Junior",     club : "PSG" , age: 29, height : 175 },
    {name : "Kylian" ,     surname : "Mbappe",     club : "PSG" , age: 22, height : 181 },

];





describe("filter tests", function(){



    
    
      it("should determine which club does the player plays in", function () {
        
        const Barcelona = players.filter((players) => players.club === "Barcelona");
        const realmadrid = players.filter((players) => players.club === "Real Madrid");
    
        expect(Barcelona).to.eql([{name: "Lionel" ,    surname : "Messi",    club : "Barcelona" , age: 33, height : 170 },
                                  {name : "Gerrard"  ,   surname : "Pique",     club : "Barcelona" , age: 33, height : 189 },            ]);
        expect(realmadrid).to.eql([{name : "Karim"  ,     surname : "Benzema",   club : "Real Madrid" , age: 34, height : 184 }]);
      });

      it("should list all players higher then 180 cm",function(){

        let playerHeights = players.filter((player) => player.height >= 180);
        expect(playerHeights).to.eql([ {name : "Karim"  ,     surname : "Benzema",   club : "Real Madrid" , age: 34, height : 184 },
                                        {name : "Gerrard"  ,   surname : "Pique",     club : "Barcelona" , age: 33, height : 189 }, 
                                        {name : "Kylian" ,     surname : "Mbappe",     club : "PSG" , age: 22, height : 181 }]);
      })

      it("should return positive numbers",function(){
        let num = [4, -11 , 82 , -4 , 1 , 36 , -27]
        let positiveNum = num.filter((a) => a >= 0)

        expect(positiveNum).to.eql([4,82,1,36])
        
    
        }  
        )



})