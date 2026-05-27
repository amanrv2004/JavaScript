// let name = "Aman";
// let age = 21;
// age = 25;
// console.log(name,age)

// const account = 123456;
// console.log(account);
// console.log(typeof account );

// ------------ Var disadvantages ---------
// 1. var can declare multiple times with same variable name 
// 2. scope k bahar bhi varible k value access kare sakte hai 

// var name = "Aman";  //var can declare multiple times.
// var name = "Abhay";
// console.log(name); 
// if(true){
//     var a = 10;
// }
// console.log(a); // scope k bahar bhi access kare sakte hai 


// Data Types 
// Primitive Data Types - number , string, boolean , undefined , null , bigint , symbol

//number 
// let a= 10;
// let b = 10.5;
// console.log(a,b);

//String 
// let c = "Aman Raj Verma";
// console.log(c);

//Boolean 
// let login = true;
// let f = false;
// console.log(login,f);

//Undefine
// let user;
// console.log(user);

//BigInt
// let n = 1000000000000000n;
// console.log(n);

//Null
// let name = null;
// console.log(name);
// console.log(typeof(name));

//Symbol

// const id1 = Symbol("id");
// const id2 = Symbol("id");
// console.log(id1);
// console.log(id2);
// console.log(id1 == id2);

// ------------Non Primitive Data Types - array, object , function ---------

//Array
// let arr = [10,20,20,"Rohit",true]; 
// console.log(arr);
// console.log(typeof arr);         //object


//Object 
// let obj = {
//     name:"Aman",
//     account: 123456,
//     age:18,
//     category:'OBC'
// }
// console.log(obj.name,obj.age);
// console.log(typeof obj);         //object


//Function
// function add(){
//     console.log("Hello");
// }
// add();

// const s = function add(){
//     console.log("Hello");
// }
// console.log(s);
// console.log(typeof s);         //function
// s();


//Primitive Data types are immutable

// let a = 10;
// a = 20;

// let str = "Aman";
// str[0] = "O";
// str = "Ajay";
// console.log(str);

//Non-Primitive Data types are immutable

// let arr = [10,20,100,30];
// arr.push(90);
// arr[0]= 6;
// arr.pop();
// console.log(arr);

let obj ={
    name:"Aman",
    account: 123456,
    age:18,
    category:'OBC'
}
let obj2 = obj;    // both refer to same date 
obj2 = {...obj}; // make a new copy of that object and obj2 will refer to that only data
obj.name = "Abhay";

console.log(obj);
console.log(obj2)