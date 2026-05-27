// Scope, Closures, and Higher Order Functions

// -------------- SCOPE ------

//Global 
//Functional 
//Block level scope
// let a = 10;
// const b = 20;
// function greet(){
//     console.log(a);
// }

// greet();

//------- Closure --------
// function createCounter(){
//     let count = 0;
//     function increment(){
//         count++;
//         return count;
//     }
//     return increment;
// }
// const counter = createCounter();
// console.log(counter());
// console.log(counter());
// console.log(counter()); 

// let user = {
//     balance : 500,
//     deposit : function (amount){
//         console.log(this);
//         if(typeof amount === "number" && amount > 0){
//         this.balance +=amount;
//         return this.balance;
//         }
//     },
//     withdraw : function (amount){
//         console.log(this);
//         if(typeof amount === "number" && amount >=amount){
//         this.balance -=amount;
//         return this.balance;
//         }
//     },
//     getBalance: function(){
//         return this.balance;
//     }
// }
// user.balance = 500;
// console.log(user.getBalance());


// function createBankAccount() {
//     let balance = 500;
//     const user = {
//         deposit: function (amount) {
//             if (typeof amount === "number" && amount > 0) {
//                 balance += amount;
//                 return balance;
//             }
//         },
//         withdraw: function (amount) {
//             if (typeof amount === "number" && amount >= amount) {
//                 balance -= amount;
//                 return balance;
//             }
//         },
//         getBalance: function () {
//             return balance;
//         }
//     }
//     return user;
// }
// const customer = createBankAccount();
// // console.log(customer.withdraw(50));
// // console.log(customer.deposit(50));


//-----Higher Order Function ----


// function double(){
//     function execute(){
//         console.log("Hello");
//     }
//     return execute;
// }

// const n = double();
// console.log(n);
// n();

// function double(){
//     return function execute(){
//         console.log("Hello");
//     }
// }
// const n = double();
// n();


function double(value){
    return function execute(num){
        return num*value
    }
}
const n = double(20);  // you can do this
const n = double(20)(5);// or you can do this
console.log(n(5));