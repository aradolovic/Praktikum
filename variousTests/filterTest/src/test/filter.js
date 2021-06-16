var players = [
    {name: Lionel ,    surname : Messi,     club : Barcelona , age: 33, height : 170 },
    {name : Karim  ,     surname : Benzema,   club : Real_Madrid , age: 34, height : 184 },
    {name : Gerrard  ,   surname : Pique,     club : Barcelona , age: 33, height : 189 },
    {name : Jesse ,     surname : Lingard,     club : West_Ham  , age: 28, height : 178 },
    {name : Neymar ,     surname : Junior,     club : PSG , age: 29, height : 175 },
    {name : Kylian ,     surname : Mbappe,     club : PSG , age: 22, height : 181 },

];


const barcelona = players.filter((players) => players.club === "Barcelona");
const PSG = players.filter((players) => players.club === "PSG");

console.log(barcelona);