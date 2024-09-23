// Task 1
// let arr1 = [1,2,3];
// let arr2 = [7,5,8];

// const combinedArr = [...arr1, ...arr2]
// console.log(combinedArr);

// task 2
// const orginalArr = [8, 6 ,24,23,3,2];

// const copiedArr = [...orginalArr,40]

// console.log(copiedArr);

// TASK 3
// const person = { name: "John", age: 25 };
// const job = { title: "Developer", company: "TechCorp" };

// const profile = {...person, ...job};

// console.log(profile);

// Task4 
// function sumNumber(...number){
//     return number.reduce((total, num) => total + num,0)
// };
// console.log(sumNumber(1,2,3,4,5));

// task 5
// const arr = [1, 2, 3, 4, 5];
// const [a, b, ...restArr] = arr;
// console.log("a =",a);
// console.log("b =",b);
// console.log(restArr);

// task 6 ?

// task 7
const person = { name: "Alice", age: 28, city: "Paris", country: "France" };

const { name, age, ...address } = person;

console.log("name =",name);
console.log("age =",age);   
console.log(address); 

