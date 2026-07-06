/*filter*/
const age =[18,50,7,18,10];
const adults=age.filter(function(age){
    return age>=18;
});
console.log(adults)
const nums=[1,2,3,4,5,6,7,8,9]
const even=nums.filter(function(num){
    return num %2===0;
});
console.log(even);