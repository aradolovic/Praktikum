//return double value



function Double(a) {
    return a * 2;
  }
function SquareNb(a){
    return a*a;
}
function isEven(a) {
    return a % 2 === 0 ? "true" : "false";
  }
function setFirstLetterUp(wordsArray) {
    return wordsArray.charAt(0).toUpperCase() + wordsArray.slice(1);
  }

  function getCar(car) {
    let cartotal = [car.brand, car.model].join(" ");
    return cartotal;
  }

module.exports = { Double, SquareNb, isEven ,getCar };
