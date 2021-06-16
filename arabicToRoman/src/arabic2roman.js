let romanNumerals = 
    {0: "", 
    1: "I", 
    2: "II", 
    3: "III", 
    4: "IV", 
    5: "V",
    10: "X", 
    50: "L", 
    100: "C", 
    500: "D", 
    1000: "M"};

 let boundaries = Object.keys(romanNumerals).map((n)=>parseInt(n)).sort((a,b)=>a-b);

function arabic2roman(arabic) {
   let base = getBase(arabic);
   if(base.arabic == arabic) return base.roman;
   return base.roman + arabic2roman(arabic - base.arabic);
}

    function getBase(arabic){
    let lowerOrEualNum = boundaries.find((val)=>(val<=arabic))
    return{
        arabic: lowerOrEualNum,
        roman: romanNumerals[lowerOrEualNum]
    }
}


module.exports = {arabic2roman};