//Object
// key Value

// const user = {
//     name: "Rohit",
//     age: 20,
//     emailId: "negi@gmail.com",
//     amount:3400,
//     "home address": "Beta 2"
// }
// console.log(user);
// user.aadhar = 1234567890;
// console.log(user.age);
// console.log(user);
// delete user.emailId;
// console.log(user);
// console.log(user["home address"]);

// user reference 
// const user2 = user;
// user2.age = 90;
// console.log(user);
// console.log(user2);

// only wants keys , values and both 
// console.log(Object.keys(user));  // only for keys 
// console.log(Object.values(user)); // only for values 
// console.log(Object.entries(user)); // both for key and values

// -------loop chalaama hai------

// --------1. for-in loop-------
// // for(let keys in user){
//     console.log(keys, user[keys]);
// }


// const user = {
//     name: "Rohit",
//     age: 20,
//     emailId: "negi@gmail.com",
//     amount:3400,
//     "home address": "Beta 2"
// }

// const name = user.name;
// const age = user.age;
// console.log(name, age);
// above is not a good way 
//do destructuring 

// const {name, age} = user;
// console.log(name ,age)
//or other method 
// const {name: userName, age: userAge} = user;
// console.log(userName ,userAge)

// we cannot use for of loop directly 

// ------- 2. for of loop ------
// for(let keys of Object.keys(user)){
//     console.log(keys);
// }
 // or
// const tempArray = Object.keys(user);
// for(let keys of tempArray){
//     console.log(keys);
// }

// for(let values of Object.values(user)){
//     console.log(values);
// }

//console.log(Object.entries(user));

// for(let [keys,values] of Object.entries(user)){
//     console.log(keys,values);
// }



// functions in Objects

// const user = {
//     name: "Rohit",
//     age: 20,
//     emailId: "negi@gmail.com",
//     amount:3400,
//     "home address": "Beta 2",
//     greeting : function(){
//         console.log(`Strike is coming ${this.name}`);
//         return 20;
//     }
// }
// const va = user.greeting();
// console.log(va);

// const user2 ={
//     name: "Raj",
//     account : 201,
//     greeting : function(){
//         console.log(`Strike is coming ${this.name}`);
//         return 20;
//     }
// }
// user2.greeting = user.greeting;
// user2.greeting();


// const user = {
//     name: "Rohit",
//     age: 20,
//     emailId: "negi@gmail.com",
//     amount:3400,
//     address: {
//         city:"kotdwar",
//         state:"Uttrakhand"
//     }
// }

// shallow copy
// console.log(user.address.city);
// const user2 = {...user}; 
// user2.name = "Raj";
// console.log(user);
// console.log(user2);

// deep copy 
// const user2 = structuredClone(user);
// user2.address.city = "Lucknow";
// console.log(user);
// console.log(user2);


// Key : String || Symbol

const sym = Symbol("id");
const user = {
    name: "Rohit",
    age: 20,
    emailId: "negi@gmail.com",
    amount:3400,
    [sym]:"Hello Ji"    
} 