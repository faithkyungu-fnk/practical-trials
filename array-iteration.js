
/*forEach*/
const fruits = ["apple", "banana", "cherry"]
for(let i =0;i <fruits.length;i++){
console.log(fruits[i]);
}
const students =["ocean", "skye"];
for(let i=1;i<students.length;i++){
    console.log(students[i]);
}
const cats= ["person1", "person2"];
cats.forEach(function(cat){
    console.log(cat);
});
const pets=["dog", "cat"]
pets.forEach(function(pet){
    console.log(pet);

});
const numbers=[10,20];
numbers.forEach(function(number){
    console.log(number);
    console.log(numbers);
});


/*.map*/
const animals = ["lion", "elephant"];
const wildlife=animals.map(function(animal){
    return animal;
})
console.log(wildlife)
const names=["happy","blessing"];
const list = names.map(function(name){
    return name;
})
console.log(list)
const his=["faith","ocean"];
const her = his.map(function(his){
    return his.toUpperCase();
});
console.log(her[1]);


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


/*find*/
const laptop=["Dell","Hp","samsung"]
const news=laptop.filter(function(laptop){
    return laptop=== "samsung";
})
console.log(news);
const fruity=["apple","banana","mango","orange"];
const fruts=fruity.find(function(fruity){
return fruity ==="mango";

})
console.log(fruts)
const humans=[1,2,3,4,5,6,7,8,9];
const odd=humans.find(function(humans){
    return humans %2===0;
})
console.log(odd)
const heys=[1,3,5,8,10];
const result=heys.find(function(hey){
    return hey >6;
})
console.log(result)


/*reduce*/
const numbers=[10,20,30]
const total=numbers.reduce(function(sum,number){
    return sum+number;
},0);
console.log(total)


/*sort*/
const happy=[100,2,30];
happy.sort();
console.log(happy);
const smile = ["zac","kelv","ali"];
smile.sort();
console.log(smile)