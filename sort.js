/*sort*/
const prices=[100,250,50,600];
prices.sort();
console.log(prices)
const num=[2,30,100];
num.sort(function(a,b){
    return a-b
});
console.log(num)
const numbers=[500,1000,3,0];
numbers.sort(function(a,b){
    return b -a
})
console.log(numbers)

const happy=[100,2,30];
happy.sort();
console.log(happy);
const smile = ["zac","kelv","ali"];
smile.sort();
console.log(smile)
const prices=[100,250,50,600];
const prizes=prices.reduce(function(sum,prices){
    return sum + prices
},0);
console.log(prizes)