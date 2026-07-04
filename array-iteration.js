
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