// Functions, Parameters, and Arrow Functions


// --------------Functions

// function greeting(){
//     console.log("Hello Everyone");
//     return 0;
// }
// greeting();
// console.log(greeting);  // stores the function 
// console.log(greeting());


// function addNumber(num1, num2,num3=0,num4=0){
//     const sum = num1 + num2 + num3 + num4;
//     console.log(`The sum of ${num1} and ${num2} is ${sum}`);
// }
// addNumber(2,4);
// addNumber(2,5,3);
// addNumber(2,5,3,1);

//- Rest Operator
// function addNumber(...num){
//    let sum = 0;
//    for(let n of num){
//     sum = sum + n;
//    }
//    console.log(sum);
// }
// addNumber(2,4);
// addNumber(2,5,3);
// addNumber(2,5,3,1);

//--- spread operator 
// const arr = [10,20,30,40,50];
// const [first , second , ...num] = arr;
// console.log(first,second,num);

// const arr = [10,20,30,40,50];
// const arr2 = [30,70,90,10];
// const ans = [...arr,...arr2];
// console.log(ans);

// -- second method to make function

// const addNumber = function(n1,n2){
//     const sum = n1+n2;
//     console.log(sum);
// }
// console.log(addNumber(2,4));


// --- Arrow Function -----

// const addNumber = (n1,n2)=>{
//         const sum = n1+n2;
//         console.log(sum);
// }
// console.log(addNumber(2,4));

//or 
// const addNumber = (n1,n2)=> n1+n2;
// console.log(addNumber(2,4));

// const squareNumber = (num) => num*num;
// console.log(squareNumber(5));

// if we have single paramete no need of ()
// const squareNumber = num => num*num;
// console.log(squareNumber(6));

// const greeting = () => {
//     let user = {
//         name: "Aman",
//         message:"Hello"
//     }
//     return user;
// }
// console.log(greeting());

//or 

// const greeting = () => {
//     return {
//         name: "Aman",
//         message:"Hello"
//     }
// }
// console.log(greeting());


//or 
// const greeting = () => {{name: "Aman",age:24}};
// console.log(greeting());



// IIFE function

// (function greeting(){
//     console.log("Hello");
// })();
//also work for 
// (()=>{
//     console.log("Hello");
// })();

//---callback Function

// function greet(){
//     console.log("hello");
// }
// function dance(){
//     console.log("I am Dancing");
// }
// function meet(callback){
//     console.log("I am Happy.")
//     callback();
//     console.log("I have Finished");
// }
// meet(greet);
// meet(dance);

// example of Callback
// function zomatoOrderPlaced(){
//     console.log("We have. started preparing your food");
// }
// function payment(amount){
//     console.log(`${amount} payment has initilized`);
//     console.log("Payment is recevied.");
//     zomatoOrderPlaced();
// }
// payment(500);

// payment with blinkit
function blinkitOrderPlaced(){
    console.log("We have started packing your order.");
}
function zomatoOrderPlaced(){
    console.log("We have started preparing your food.");
}
function payment(amount,callback){
    console.log(`${amount} payment has initilized`);
    console.log("Payment is recevied.");
    callback();
}
payment(500,zomatoOrderPlaced);
payment(200,blinkitOrderPlaced);