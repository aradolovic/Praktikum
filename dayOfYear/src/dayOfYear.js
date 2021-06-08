function dayOfYear(year, month, day){

  if(month>12 || month<0) console.log("error")
  else{
    if(day>31 || day<0) console.log("error")
    else{

  
  let months = [31 , 28 , 31 , 30 , 31 , 30 , 31 , 31 , 30 , 31 , 30 , 31]
  let numberofdays = day

  for(let i=0; i<month-1; i++){
    numberofdays += months[i];

   }

  if(month>2 && leapYear(year)) numberofdays++ 
  
  return numberofdays ;

}}}

function leapYear(year){
  return (!(year % 4) && (year % 100) || !(year % 400));
}




let a = dayOfYear( 2020, 3, 1)

console.log("Danas je " + a + ". dan u godini.")

module.exports = dayOfYear;


