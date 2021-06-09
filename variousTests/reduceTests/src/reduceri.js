  // should return subject with most ECTS
  let subject = [
    {
      id: 1,
      name: "Web Develompment",
      ects: 8,
    },
    {
      id: 2,
      name: "Economy 101",
      ects: 4,
    },
    {
      id: 3,
      name: "Mathematics",
      ects: 5,
    },
    {
      id: 4,
      name: "Databases",
      ects: 7,
    }
  ];
const mostEctsclass = subject.reduce((highest, subject) => {
    return (highest.ects || 0) > subject.ects ? highest : subject;
  }
  );



// should return a number of goals scored by a player
let scorers = [
    "Benzema",
    "Messi",
    "Lovren",
    "Messi",
    "Messi",
    "Kane",
    "Lewandowski",
    "Benzema",
    "Messi"
  ];
  
  const scoredGoals = scorers.reduce((allGoals, goal) => {
    if (goal in allGoals) allGoals[goal]++;
    else allGoals[goal] = 1;
  
    return allGoals;
  }, {});

  //should return only name of players without replicating their names
  const scorersList = scorers.reduce((accu, currValue) => {
    if (accu.indexOf(currValue) === -1) accu.push(currValue);
    return accu;
  },[]);

 // should return total amount of all prices
  let lineItems = [
    { 
    description: 'Eggs ', 
    quantity: 1, 
    price: 3, 
    total: 3 
    },
    { 
    description: 'Cheese', 
    quantity: 0.5, 
    price: 5, 
    total: 2.5 
},
    {
     description: 'Butter', 
     quantity: 2, 
     price: 6,
     total: 12 
    }
  ];

  
  const totalPrice=lineItems.reduce((sum, list) => sum + list.total, 0);

// should add numbers in array
let array = [1,2,3,4,5,6];
const sum = array.reduce(function(a,b){  return a+b; });






  

  module.exports = { scoredGoals, totalPrice, mostEctsclass, sum ,scorersList};