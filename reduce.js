const prices=[100,250,50,600];
const prizes=prices.reduce(function(sum,price){
    return sum + price
},0);
console.log(prizes)