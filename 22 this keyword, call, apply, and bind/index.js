//this keyword, call, apply, and bind

// 'use strict'

// var a = 10;
// var b = 20;
// console.log(a,b);

// -------this --------
// console.log(this);

// const user = {
//     name : "Aman",
//     age:22,
//     greet: function(){
//         console.log(this);
//         console.log(`Hi ${this.name}`);

//     }
// }
// user.greet();

// const user2 ={
//     name:"Raj"
// }

// user2.greet = user.greet;
// user2.greet()


// function greet(){
//     console.log(`Hi ${this.name}`);
// }
// function increment(value,name){
//     this.age+=value;
//     this.name = name;
//     console.log(this.age );
//     console.log(this.name);
// }
// const user = {
//     name : "Aman",
//     age:22,
// }
// const user2 ={
//     name:"Raj"
// }
// greet.call(user);
// increment.call(user,5,"Verma");

// // Apply  

// increment.apply(user,[2,"yadav"]);

// //Bind

// const inc = increment.bind(user,5,"Verma");
// inc();




// class

// class Person{
//     constructor(name,age){
//         this.name = name;
//         this.age = age;
//     }


// }

// //when new keyword is used at that time an empty object {} is created and this points to empty object ( this ->  {})
// // this = {name:"Aman",age:22}
// const p1 = new Person("Aman",22)
// console.log(p1)
// console.log(p1.name,p1.age);



// -------- Arrow Function ------  this doesnot exist for arrow function , lexical environment scope
// console.log(this);
// const greet = () =>{
//     console.log(this);
// }
// greet();

// 'use strict'
// const user = {
//     name:"Rohit",
//     greet: function(){
//         // console.log(this);
//         const that = this;
//         function meet(){
//             console.log(this);
//         }
//         meet();
//     }
// }
// user.greet();

// const stopWatch ={
//     second:0,
//     start: function(){
        
//         const that = this;
//         setInterval(function(){
//             that.second++;
//             console.log(that.second);
//         },1000);
//     }
// }

// stopWatch.start();

// const stopWatch ={
//     second:0,
//     start: function(){
//         setInterval(()=>{
//             this.second++;
//             console.log(this.second);
//         },1000);
//     }
// }

// stopWatch.start();

// 'use strict'
// const user = {
//     name :"Aman",
//     greet: ()=>{
//         console.log(this)
//     }
// }
// user.greet();



// const button = document.getElementById('first');
// // button.addEventListener('click',function(){
// //    console.log(this);
// // })
// button.addEventListener('click',()=>{
//    console.log(this);
// })



///-------------IMPORTANT SUMMARY -------------
//this keyword : Global Scope in NodeJs
//windows : Window Object 
//functiom : this keyword , if someone invoke the methord or function this will point to that 
// normal function : when no one is invoking it,
//non strict : Global Object for Node and Browser
//strict mode : Undefined 
// Arrow function : it take this for its lexical environment Scope 

